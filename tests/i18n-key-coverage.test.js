'use strict';

// Guards against the regression where guess/game.js called T('some.key') for keys
// that were never defined in i18n/games/guess.js, silently leaking English (or the
// hardcoded fallback) into every non-English UI language.
//
// For every game that ships an i18n/games/<game>.js file, every T('...') key used
// in <game>/game.js must resolve to a defined entry, either in that game's own
// strings or in the shared _common.js (for keys prefixed with 'common.').

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const GAMES_DIR = path.join(ROOT, 'i18n', 'games');

function loadGameStrings() {
  const files = fs.readdirSync(GAMES_DIR).filter((f) => f.endsWith('.js'));
  const context = { window: {} };
  vm.createContext(context);
  for (const f of files) {
    vm.runInContext(fs.readFileSync(path.join(GAMES_DIR, f), 'utf8'), context);
  }
  return context.window.COSYGameStrings || {};
}

function extractTKeys(code) {
  const keys = new Set();
  const re = /\bT\(\s*(['"])((?:\\.|(?!\1).)*)\1/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    keys.add(m[2]);
  }
  return keys;
}

test('i18n key coverage: every T() key used in a game.js exists in its strings file', () => {
  const allStrings = loadGameStrings();
  const commonStrings = (allStrings['_common'] && allStrings['_common'].strings) || {};

  const i18nGameIds = Object.keys(allStrings).filter((id) => id !== '_common');
  assert.ok(i18nGameIds.length > 0, 'expected at least one i18n/games/*.js file');

  const failures = [];

  for (const gameId of i18nGameIds) {
    const gameJsPath = path.join(ROOT, gameId, 'game.js');
    if (!fs.existsSync(gameJsPath)) continue;

    const strings = (allStrings[gameId] && allStrings[gameId].strings) || {};
    const code = fs.readFileSync(gameJsPath, 'utf8');

    for (const key of extractTKeys(code)) {
      if (key.indexOf('common.') === 0) {
        if (!Object.prototype.hasOwnProperty.call(commonStrings, key)) {
          failures.push(`${gameId}/game.js uses T('${key}') but it is not defined in i18n/games/_common.js`);
        }
        continue;
      }
      if (!Object.prototype.hasOwnProperty.call(strings, key)) {
        failures.push(`${gameId}/game.js uses T('${key}') but it is not defined in i18n/games/${gameId}.js`);
      }
    }
  }

  assert.deepStrictEqual(failures, [], `Missing i18n keys:\n${failures.join('\n')}`);
});

test('i18n key coverage: every defined key has all six target languages', () => {
  const allStrings = loadGameStrings();
  const targets = ['fr', 'es', 'de', 'it', 'ru', 'el'];
  const failures = [];

  for (const gameId of Object.keys(allStrings)) {
    const strings = (allStrings[gameId] && allStrings[gameId].strings) || {};
    for (const key of Object.keys(strings)) {
      const entry = strings[key] || {};
      assert.ok(
        typeof entry.en === 'string' && entry.en !== '',
        `[${gameId}] key '${key}' is missing an English string`
      );
      for (const lang of targets) {
        if (typeof entry[lang] !== 'string' || entry[lang] === '') {
          failures.push(`[${gameId}] key '${key}' has no '${lang}' translation`);
        }
      }
    }
  }

  assert.deepStrictEqual(failures, [], `Incomplete translations:\n${failures.join('\n')}`);
});

// Guards the shared chrome i18n table (shared/js/i18n.js) which powers every
// data-i18n="..." element. A key added to one language but not another (or used in
// HTML but never defined) silently falls back to English in the other six UIs.
test('shared i18n.js: every data-i18n key used in a page is defined in all seven languages', () => {
  const i18nPath = path.join(ROOT, 'shared', 'js', 'i18n.js');
  const context = { window: {}, document: { readyState: 'complete', addEventListener() {}, querySelectorAll: () => [] }, localStorage: { getItem: () => 'en' }, console };
  context.window = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(i18nPath, 'utf8'), context);

  const langs = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];
  const failures = [];

  const htmlFiles = fs.readdirSync(ROOT)
    .filter((name) => fs.existsSync(path.join(ROOT, name, 'index.html')))
    .map((name) => path.join(name, 'index.html'));
  htmlFiles.push('index.html');

  const usedKeys = new Set();
  for (const rel of htmlFiles) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    const html = fs.readFileSync(abs, 'utf8');
    const re = /data-i18n=["']([^"']+)["']/g;
    let m;
    while ((m = re.exec(html)) !== null) usedKeys.add(m[1]);
  }

  assert.ok(usedKeys.size > 0, 'expected to find data-i18n keys in page markup');

  for (const key of usedKeys) {
    for (const lang of langs) {
      if (!context.hasI18n(key, lang)) {
        failures.push(`data-i18n="${key}" is missing for language '${lang}' in shared/js/i18n.js`);
      }
    }
  }

  assert.deepStrictEqual(failures, [], `Missing shared i18n keys:\n${failures.join('\n')}`);
});

test('shared i18n.js: all seven language blocks define an identical key set', () => {
  const i18nPath = path.join(ROOT, 'shared', 'js', 'i18n.js');
  const code = fs.readFileSync(i18nPath, 'utf8');
  const langs = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];

  const blocks = {};
  const blockRe = /^ {4}(en|fr|es|de|it|ru|el): \{\s*$/gm;
  const marks = [];
  let m;
  while ((m = blockRe.exec(code)) !== null) marks.push({ lang: m[1], bodyStart: blockRe.lastIndex });
  marks.push({ lang: '__end', bodyStart: code.length });

  for (let i = 0; i < marks.length - 1; i++) {
    const body = code.slice(marks[i].bodyStart, marks[i + 1].bodyStart);
    const keys = new Set();
    const keyRe = /^ {6}([a-zA-Z0-9_]+):/gm;
    let k;
    while ((k = keyRe.exec(body)) !== null) keys.add(k[1]);
    blocks[marks[i].lang] = keys;
  }

  assert.strictEqual(Object.keys(blocks).length, langs.length, `expected ${langs.length} language blocks, found ${Object.keys(blocks).length}`);

  const en = blocks.en;
  const failures = [];
  for (const lang of langs) {
    if (lang === 'en') continue;
    for (const key of en) if (!blocks[lang].has(key)) failures.push(`'${key}' present in en but missing in ${lang}`);
    for (const key of blocks[lang]) if (!en.has(key)) failures.push(`'${key}' present in ${lang} but missing in en`);
  }

  assert.deepStrictEqual(failures, [], `Language key-set drift:\n${failures.join('\n')}`);
});
