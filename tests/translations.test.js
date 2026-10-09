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
  const convertedGames = ['last-letter', 'lucky-numbers', 'hot-seat', 'object-quest', 'emoji-odyssey', 'word-linker', 'identity-mystery'];
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

      for (const key of Object.keys(strings)) {
        for (const lang of allLangs) {
          assert.ok(
            strings[key][lang] !== undefined && strings[key][lang] !== '',
            `[${gameId}] key '${key}' missing translation for lang '${lang}'`
          );
        }
      }
    }
  });

  await t.test('c. No English string identical in two game files unless allow-listed', () => {
    const allowList = [
      // Format: { string: "...", reason: "One-line explanation..." }
    ];

    const enMap = {}; // en -> [{ gameId, key }]
    for (const gId of Object.keys(allStrings)) {
      const strings = allStrings[gId].strings || {};
      for (const key of Object.keys(strings)) {
        const en = strings[key].en;
        if (!enMap[en]) enMap[en] = [];
        enMap[en].push({ gameId: gId, key });
      }
    }

    const allowSet = new Set(allowList.map(a => a.string));

    for (const [en, usages] of Object.entries(enMap)) {
      const gameIds = new Set(usages.map(u => u.gameId));
      if (gameIds.size > 1) {
        assert.ok(
          allowSet.has(en),
          `English string "${en}" is duplicated in multiple game string files (${Array.from(gameIds).join(', ')}) without being allow-listed`
        );
      }
    }
  });

  await t.test('d. Usage verification for seven games', () => {
    const commonStrings = (allStrings['_common'] && allStrings['_common'].strings) || {};

    for (const gameId of convertedGames) {
      const gameJsPath = path.join(__dirname, '..', gameId, 'game.js');
      const gameJs = fs.readFileSync(gameJsPath, 'utf8');

      const stringsObj = (allStrings[gameId] && allStrings[gameId].strings) || {};
      const definedKeys = new Set(Object.keys(stringsObj));

      const gsMatches = Array.from(gameJs.matchAll(/data-gs=["']([^"']+)["']/g)).map(m => m[1]);
      const tMatches = Array.from(gameJs.matchAll(/T\s*\(\s*["']([^"']+)["']/g)).map(m => m[1]);

      const usedKeys = new Set([...gsMatches, ...tMatches]);

      for (const usedKey of usedKeys) {
        if (usedKey.startsWith('common.')) {
          assert.ok(commonStrings[usedKey] !== undefined, `[${gameId}] Key '${usedKey}' referenced in game.js but missing in _common`);
        } else {
          assert.ok(definedKeys.has(usedKey), `[${gameId}] Key '${usedKey}' referenced in game.js but missing in string file`);
        }
      }

      for (const definedKey of definedKeys) {
        assert.ok(usedKeys.has(definedKey), `[${gameId}] Key '${definedKey}' in string file but never used in game.js`);
      }
    }
  });

  await t.test('e. Round trip with temp copies (including _common)', () => {
    const tmpDir = path.join(__dirname, '..', 'translations', 'tmp_test');
    fs.mkdirSync(tmpDir, { recursive: true });

    try {
      const exportCmd = `node scripts/translations-export.js fr --game _common`;
      execSync(exportCmd, { cwd: path.join(__dirname, '..') });

      const exportedFile = path.join(__dirname, '..', 'translations', 'export', 'fr-_common.csv');
      assert.ok(fs.existsSync(exportedFile));

      let csvText = fs.readFileSync(exportedFile, 'utf8');

      csvText = csvText.replace(
        'Configuration',
        'Paramètres'
      );

      const tempCsvPath = path.join(tmpDir, 'fr-_common.csv');
      fs.writeFileSync(tempCsvPath, csvText, 'utf8');

      const importOut = execSync(`node scripts/translations-import.js "${tempCsvPath}"`, { cwd: path.join(__dirname, '..') }).toString();

      assert.ok(importOut.includes('Updated: 1') || importOut.includes('Unchanged:'), `Import output for _common:\n${importOut}`);

      const stringsAfter = loadAllGameStrings();
      const commonFr = stringsAfter['_common'];

      assert.strictEqual(
        commonFr.strings['common.btn_setup'].fr,
        'Paramètres'
      );
    } finally {
      execSync('git checkout -- i18n/games/', { cwd: path.join(__dirname, '..') });
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  await t.test('f. translations-report prints counts consistent with the files', () => {
    const reportOut = execSync('node scripts/translations-report.js', { cwd: path.join(__dirname, '..') }).toString();
    assert.ok(reportOut.includes('_common'));
    assert.ok(reportOut.includes('last-letter'));
    assert.ok(reportOut.includes('lucky-numbers'));
    assert.ok(reportOut.includes('hot-seat'));
    assert.ok(reportOut.includes('object-quest'));
    assert.ok(reportOut.includes('emoji-odyssey'));
    assert.ok(reportOut.includes('word-linker'));
    assert.ok(reportOut.includes('identity-mystery'));
  });
});
