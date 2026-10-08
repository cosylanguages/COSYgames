'use strict';

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { execSync } = require('node:child_process');

function loadAllGameStrings() {
  const gamesDir = path.join(__dirname, '..', 'i18n', 'games');
  if (!fs.existsSync(gamesDir)) return {};
  const files = fs.readdirSync(gamesDir).filter(f => f.endsWith('.js'));
  const context = { window: {} };
  vm.createContext(context);
  for (const f of files) {
    const code = fs.readFileSync(path.join(gamesDir, f), 'utf8');
    vm.runInContext(code, context);
  }
  return context.window.COSYGameStrings || {};
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

test('translations integrity and pipeline tests', async (t) => {
  const allStrings = loadAllGameStrings();
  const pilotGames = ['last-letter', 'lucky-numbers'];
  const allLangs = ['fr', 'es', 'de', 'it', 'ru', 'el'];

  await t.test('b. Data integrity for every file in i18n/games/', () => {
    for (const gameId of Object.keys(allStrings)) {
      const gameObj = allStrings[gameId];
      const strings = gameObj.strings || {};
      const statusObj = gameObj.status || {};

      for (const key of Object.keys(strings)) {
        const langObj = strings[key];
        assert.ok(langObj.en !== undefined && langObj.en !== null, `[${gameId}] key '${key}' missing English entry`);

        const engPlaceholders = extractPlaceholders(langObj.en);
        const engTags = extractHtmlTags(langObj.en);

        for (const lang of Object.keys(langObj)) {
          if (lang === 'en') continue;
          const trans = langObj[lang];
          const transPlaceholders = extractPlaceholders(trans);
          const transTags = extractHtmlTags(trans);

          assert.deepStrictEqual(
            Array.from(transPlaceholders).sort(),
            Array.from(engPlaceholders).sort(),
            `[${gameId}] key '${key}' lang '${lang}' placeholder set mismatch with English`
          );

          for (const tag of transTags) {
            assert.ok(engTags.has(tag), `[${gameId}] key '${key}' lang '${lang}' contains tag <${tag}> not present in English`);
          }
        }
      }

      for (const lang of Object.keys(statusObj)) {
        const langStatuses = statusObj[lang];
        for (const key of Object.keys(langStatuses)) {
          assert.ok(strings[key] !== undefined, `[${gameId}] status refers to non-existent key '${key}' in lang '${lang}'`);
          const st = langStatuses[key];
          assert.ok(st === 'machine' || st === 'reviewed', `[${gameId}] status for key '${key}' lang '${lang}' is invalid '${st}'`);
        }
      }

      if (pilotGames.includes(gameId)) {
        for (const key of Object.keys(strings)) {
          for (const lang of allLangs) {
            assert.ok(strings[key][lang] !== undefined && strings[key][lang] !== '', `Pilot game [${gameId}] key '${key}' missing translation for lang '${lang}'`);
          }
        }
      }
    }
  });

  await t.test('c. Usage verification for pilot games', () => {
    for (const gameId of pilotGames) {
      const gameJsPath = path.join(__dirname, '..', gameId, 'game.js');
      const gameJs = fs.readFileSync(gameJsPath, 'utf8');

      const stringsObj = allStrings[gameId].strings || {};
      const definedKeys = new Set(Object.keys(stringsObj));

      const gsMatches = Array.from(gameJs.matchAll(/data-gs=["']([^"']+)["']/g)).map(m => m[1]);
      const tMatches = Array.from(gameJs.matchAll(/T\s*\(\s*["']([^"']+)["']/g)).map(m => m[1]);

      const usedKeys = new Set([...gsMatches, ...tMatches]);

      for (const usedKey of usedKeys) {
        assert.ok(definedKeys.has(usedKey), `[${gameId}] Key '${usedKey}' referenced in game.js but missing in string file`);
      }

      for (const definedKey of definedKeys) {
        assert.ok(usedKeys.has(definedKey), `[${gameId}] Key '${definedKey}' in string file but never used in game.js`);
      }
    }
  });

  await t.test('d. Leak guard for pilot games', () => {
    const originalPhrases = {
      'last-letter': [
        'Type a word to start the interlocking chain. Each new word must start with the last letter of the previous word. Watch your chain grow!',
        'Start Interlocking Chain',
        'Loading chain link data...',
        'Chain Links',
        'Required Start',
        'Interlocking Chain',
        'Type the first word below to forge the first chain link…',
        'Type a word to link…',
        'Link Word',
        'Restart Chain',
        'Please enter a word with at least 2 letters.',
        'Chain Mastered!',
        'Forge New Chain'
      ],
      'lucky-numbers': [
        'Play Bingo! You can be the Caller for a group, or play as a Player (solo or with a host).',
        'Level: Starter (A1)',
        'Get ready to call!',
        'Next Item',
        'Your Bingo Card',
        'New Card'
      ]
    };

    for (const gameId of pilotGames) {
      const gameJsPath = path.join(__dirname, '..', gameId, 'game.js');
      const rawCode = fs.readFileSync(gameJsPath, 'utf8');
      const codeWithoutComments = rawCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

      for (const phrase of originalPhrases[gameId]) {
        const matches = Array.from(codeWithoutComments.matchAll(new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')));
        for (const m of matches) {
          const index = m.index;
          const contextBefore = codeWithoutComments.slice(Math.max(0, index - 120), index);
          assert.ok(
            contextBefore.includes('T(') || contextBefore.includes('data-gs='),
            `[${gameId}] Literal English phrase "${phrase}" found outside T() or data-gs initial content`
          );
        }
      }
    }
  });

  await t.test('e. Round trip with temp copies', () => {
    const tmpDir = path.join(__dirname, '..', 'translations', 'tmp_test');
    fs.mkdirSync(tmpDir, { recursive: true });

    try {
      const exportCmd = `node scripts/translations-export.js fr --game last-letter`;
      execSync(exportCmd, { cwd: path.join(__dirname, '..') });

      const exportedFile = path.join(__dirname, '..', 'translations', 'export', 'fr-last-letter.csv');
      assert.ok(fs.existsSync(exportedFile));

      let csvText = fs.readFileSync(exportedFile, 'utf8');

      // 1. Edit a translation and leave status or set status
      csvText = csvText.replace(
        'Tape un mot pour commencer la chaîne. Chaque nouveau mot doit commencer par la dernière lettre du mot précédent. Regarde ta chaîne grandir !',
        'Saisis un mot pour lancer la chaîne. Chaque nouveau mot doit commencer par la dernière lettre du mot précédent. Regarde ta chaîne grandir !'
      );

      const lines = csvText.split('\r\n');
      for (let i = 0; i < lines.length; i++) {
        // 2. Change another placeholder ({word} removed)
        if (lines[i].includes('feedback.already_used')) {
          const parts = lines[i].split(',');
          if (parts.length >= 4) {
            parts[3] = '"Mot déjà utilisé dans la chaîne !"';
            lines[i] = parts.join(',');
          }
        }
        // 3. Change one status only
        if (lines[i].includes('btn.restart_chain')) {
          lines[i] = lines[i].replace('machine', 'reviewed');
        }
      }
      const modifiedCsv = lines.join('\r\n');

      const tempCsvPath = path.join(tmpDir, 'fr-last-letter.csv');
      fs.writeFileSync(tempCsvPath, modifiedCsv, 'utf8');

      const importOut = execSync(`node scripts/translations-import.js "${tempCsvPath}"`, { cwd: path.join(__dirname, '..') }).toString();

      assert.ok(importOut.includes('Updated: 2'), `Expected 2 updated rows in import output, got:\n${importOut}`);
      assert.ok(importOut.includes('Rejected: 1'), `Expected 1 rejected row in import output, got:\n${importOut}`);

      const stringsAfter = loadAllGameStrings();
      const lastLetterFr = stringsAfter['last-letter'];

      assert.strictEqual(
        lastLetterFr.strings['setup.description'].fr,
        'Saisis un mot pour lancer la chaîne. Chaque nouveau mot doit commencer par la dernière lettre du mot précédent. Regarde ta chaîne grandir !'
      );
      assert.strictEqual(lastLetterFr.status.fr['setup.description'], 'reviewed');

      assert.strictEqual(lastLetterFr.status.fr['btn.restart_chain'], 'reviewed');

      assert.strictEqual(lastLetterFr.strings['feedback.already_used'].fr.includes('{word}'), true);

      // Verify semicolon-delimited and BOM-prefixed import identically
      const semiCsvPath = path.join(tmpDir, 'fr-last-letter-semi.csv');
      const semiCsvText = '\uFEFF' + modifiedCsv.replace(/,/g, ';');
      fs.writeFileSync(semiCsvPath, semiCsvText, 'utf8');

      const semiImportOut = execSync(`node scripts/translations-import.js "${semiCsvPath}"`, { cwd: path.join(__dirname, '..') }).toString();
      assert.ok(semiImportOut.includes('Updated: 2') || semiImportOut.includes('Unchanged: 20'), 'Semicolon and BOM import executed correctly');
    } finally {
      execSync('git checkout -- i18n/games/', { cwd: path.join(__dirname, '..') });
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  await t.test('f. translations-report prints counts consistent with the files', () => {
    const reportOut = execSync('node scripts/translations-report.js', { cwd: path.join(__dirname, '..') }).toString();
    assert.ok(reportOut.includes('last-letter'));
    assert.ok(reportOut.includes('lucky-numbers'));
    assert.ok(reportOut.includes('0/21/21'));
    assert.ok(reportOut.includes('0/22/22'));
  });
});
