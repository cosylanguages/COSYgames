#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function parseArgs() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Usage: node scripts/translations-import.js <file.csv>');
    process.exit(1);
  }
  return { csvPath: args[0] };
}

function detectDelimiter(text) {
  const firstLine = text.split(/\r?\n/)[0] || '';
  let commas = 0, semicolons = 0, tabs = 0;
  let inQuotes = false;
  for (let i = 0; i < firstLine.length; i++) {
    const ch = firstLine[i];
    if (ch === '"') inQuotes = !inQuotes;
    if (!inQuotes) {
      if (ch === ',') commas++;
      else if (ch === ';') semicolons++;
      else if (ch === '\t') tabs++;
    }
  }
  if (tabs > commas && tabs > semicolons) return '\t';
  if (semicolons > commas) return ';';
  return ',';
}

function parseCsv(text, delimiter) {
  if (text.startsWith('\uFEFF')) {
    text = text.slice(1);
  }

  const rows = [];
  let currentRow = [];
  let currentVal = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const nextCh = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && nextCh === '"') {
        currentVal += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        currentVal += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === delimiter) {
        currentRow.push(currentVal);
        currentVal = '';
      } else if (ch === '\r' && nextCh === '\n') {
        currentRow.push(currentVal);
        rows.push(currentRow);
        currentRow = [];
        currentVal = '';
        i++;
      } else if (ch === '\n' || ch === '\r') {
        currentRow.push(currentVal);
        rows.push(currentRow);
        currentRow = [];
        currentVal = '';
      } else {
        currentVal += ch;
      }
    }
  }

  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal);
    rows.push(currentRow);
  }

  return rows.filter(r => r.length > 1 || (r.length === 1 && r[0].trim() !== ''));
}

function extractPlaceholders(str) {
  const matches = String(str).match(/\{([a-zA-Z0-9_]+)\}/g) || [];
  return new Set(matches.map(m => m.slice(1, -1)));
}

function extractHtmlTags(str) {
  const matches = String(str).match(/<[^>]+>/g) || [];
  const tags = new Set();
  for (const m of matches) {
    const tagMatch = m.match(/<\/?([a-zA-Z0-9]+)/);
    if (tagMatch) {
      tags.add(tagMatch[1].toLowerCase());
    }
  }
  return tags;
}

function loadAllGameFiles() {
  const gamesDir = path.join(__dirname, '..', 'i18n', 'games');
  if (!fs.existsSync(gamesDir)) return { gameDataMap: {}, keyOrderMap: {} };

  const files = fs.readdirSync(gamesDir).filter(f => f.endsWith('.js'));
  const gameDataMap = {};
  const keyOrderMap = {};

  for (const f of files) {
    const gameId = f.replace(/\.js$/, '');
    const filePath = path.join(gamesDir, f);
    const code = fs.readFileSync(filePath, 'utf8');

    const context = { window: {} };
    vm.createContext(context);
    vm.runInContext(code, context);

    const obj = context.window.COSYGameStrings && context.window.COSYGameStrings[gameId];
    if (obj) {
      gameDataMap[gameId] = obj;

      const keys = [];
      const keyMatches = code.match(/['"]([a-zA-Z0-9_.]+)['"]\s*:/g) || [];
      const stringsObjKeys = obj.strings ? Object.keys(obj.strings) : [];
      keyOrderMap[gameId] = stringsObjKeys;
    }
  }

  return { gameDataMap, keyOrderMap };
}

function serializeString(str) {
  const jsonStr = JSON.stringify(str);
  return jsonStr;
}

function serializeGameFile(gameId, gameObj) {
  const strings = gameObj.strings || {};
  const status = gameObj.status || {};

  let out = `window.COSYGameStrings = window.COSYGameStrings || {};\n`;
  out += `window.COSYGameStrings['${gameId}'] = {\n`;
  out += `  strings: {\n`;

  const stringKeys = Object.keys(strings);
  stringKeys.forEach((key, kIdx) => {
    out += `    '${key}': {\n`;
    const langObj = strings[key];
    const langs = Object.keys(langObj);
    langs.forEach((lang, lIdx) => {
      out += `      ${lang}: ${serializeString(langObj[lang])}${lIdx < langs.length - 1 ? ',' : ''}\n`;
    });
    out += `    }${kIdx < stringKeys.length - 1 ? ',' : ''}\n`;
  });

  out += `  },\n`;
  out += `  status: {\n`;

  const statusLangs = Object.keys(status).sort();
  statusLangs.forEach((stLang, slIdx) => {
    out += `    ${stLang}: {\n`;
    const stObj = status[stLang] || {};
    const stKeys = Object.keys(stObj);
    stKeys.forEach((stKey, skIdx) => {
      out += `      '${stKey}': ${serializeString(stObj[stKey])}${skIdx < stKeys.length - 1 ? ',' : ''}\n`;
    });
    out += `    }${slIdx < statusLangs.length - 1 ? ',' : ''}\n`;
  });

  out += `  }\n`;
  out += `};\n`;

  return out;
}

function main() {
  const { csvPath } = parseArgs();
  if (!fs.existsSync(csvPath)) {
    console.error(`File not found: ${csvPath}`);
    process.exit(1);
  }

  const rawText = fs.readFileSync(csvPath, 'utf8');
  const delimiter = detectDelimiter(rawText);
  const rows = parseCsv(rawText, delimiter);

  if (rows.length < 2) {
    console.log('Summary: Updated: 0, Unchanged: 0, Rejected: 0');
    return;
  }

  const header = rows[0].map(h => h.trim().toLowerCase());
  const gameIdx = header.indexOf('game');
  const keyIdx = header.indexOf('key');
  const englishIdx = header.indexOf('english');
  const transIdx = header.indexOf('translation');
  const statusIdx = header.indexOf('status');

  if (gameIdx === -1 || keyIdx === -1 || transIdx === -1) {
    console.error('CSV header must contain game, key, and translation columns');
    process.exit(1);
  }

  const filename = path.basename(csvPath);
  const langMatch = filename.match(/^([a-z]{2})/i);
  let csvLang = langMatch ? langMatch[1].toLowerCase() : null;

  const { gameDataMap } = loadAllGameFiles();

  let updatedCount = 0;
  let unchangedCount = 0;
  const rejected = [];
  const modifiedGames = new Set();

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const gameId = row[gameIdx] ? row[gameIdx].trim() : '';
    const key = row[keyIdx] ? row[keyIdx].trim() : '';
    const translation = row[transIdx] ? row[transIdx] : '';
    const rawStatus = statusIdx !== -1 && row[statusIdx] ? row[statusIdx].trim() : '';

    if (!gameId || !key) continue;

    const gameObj = gameDataMap[gameId];
    if (!gameObj || !gameObj.strings || !gameObj.strings[key]) {
      rejected.push({ gameId, key, reason: `Unknown game '${gameId}' or key '${key}'` });
      continue;
    }

    if (!translation || translation.trim() === '') {
      continue;
    }

    const englishText = gameObj.strings[key].en || '';

    const engPlaceholders = extractPlaceholders(englishText);
    const transPlaceholders = extractPlaceholders(translation);

    let placeholderMismatch = engPlaceholders.size !== transPlaceholders.size;
    if (!placeholderMismatch) {
      for (const p of engPlaceholders) {
        if (!transPlaceholders.has(p)) {
          placeholderMismatch = true;
          break;
        }
      }
    }

    if (placeholderMismatch) {
      rejected.push({
        gameId,
        key,
        reason: `Placeholder mismatch. English: [${Array.from(engPlaceholders).join(', ')}], Translation: [${Array.from(transPlaceholders).join(', ')}]`
      });
      continue;
    }

    const engTags = extractHtmlTags(englishText);
    const transTags = extractHtmlTags(translation);

    let extraTagFound = false;
    for (const tag of transTags) {
      if (!engTags.has(tag)) {
        extraTagFound = true;
        break;
      }
    }

    if (extraTagFound) {
      rejected.push({
        gameId,
        key,
        reason: `Translation contains HTML tags not found in English: [${Array.from(transTags).filter(t => !engTags.has(t)).join(', ')}]`
      });
      continue;
    }

    let targetLang = csvLang;
    if (!targetLang) {
      const knownLangs = Object.keys(gameObj.strings[key]).filter(l => l !== 'en');
      if (knownLangs.length === 1) targetLang = knownLangs[0];
      else targetLang = 'fr';
    }

    const currentTrans = gameObj.strings[key][targetLang] || '';
    const currentStatus = (gameObj.status && gameObj.status[targetLang] && gameObj.status[targetLang][key]) || 'machine';

    const statusIsReviewed = rawStatus.toLowerCase() === 'reviewed';
    const transChanged = currentTrans !== translation;

    if (transChanged || statusIsReviewed) {
      gameObj.strings[key][targetLang] = translation;
      if (!gameObj.status) gameObj.status = {};
      if (!gameObj.status[targetLang]) gameObj.status[targetLang] = {};
      gameObj.status[targetLang][key] = 'reviewed';

      updatedCount++;
      modifiedGames.add(gameId);
    } else {
      unchangedCount++;
    }
  }

  const gamesDir = path.join(__dirname, '..', 'i18n', 'games');
  for (const gameId of modifiedGames) {
    const gameObj = gameDataMap[gameId];
    const fileContent = serializeGameFile(gameId, gameObj);
    const filePath = path.join(gamesDir, `${gameId}.js`);
    fs.writeFileSync(filePath, fileContent, 'utf8');
  }

  console.log(`Summary: Updated: ${updatedCount}, Unchanged: ${unchangedCount}, Rejected: ${rejected.length}`);
  if (rejected.length > 0) {
    console.log('\nRejected rows:');
    rejected.forEach(r => {
      console.log(`- [${r.gameId}] ${r.key}: ${r.reason}`);
    });
  }
}

main();
