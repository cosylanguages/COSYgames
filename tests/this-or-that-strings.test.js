'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const game = read('this-or-that/game.js');
const page = read('this-or-that/index.html');
const LANGS = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];

function strings() {
  const sb = {};
  sb.window = sb;
  vm.createContext(sb);
  vm.runInContext(read('i18n/games/this-or-that.js'), sb);
  return sb.COSYGameStrings['this-or-that'].strings;
}

test('every key the game and its page use exists, in all 7 languages, and none is unused', () => {
  const s = strings();
  const used = new Set();
  for (const m of game.matchAll(/\bT\('([a-z_.0-9]+)'/g)) used.add(m[1]);
  for (const m of game.matchAll(/\bpracticeText\('([a-z_.0-9]+)'/g)) used.add(m[1]);
  for (const m of (game + page).matchAll(/data-gs(?:-label)?="([a-z_.0-9]+)"/g)) used.add(m[1]);
  for (const key of [...used]) if (key.endsWith('_')) used.delete(key); // prefixes of numbered keys, handled below
  // numbered keys built with a counter: 'practice.icebreaker_' + n and 'practice.reply_' + n
  for (const prefix of ['practice.icebreaker_', 'practice.reply_']) {
    assert.ok(game.includes(`'${prefix}' + n`), `${prefix}N keys are built in game.js`);
    for (const key of Object.keys(s).filter((k) => k.startsWith(prefix))) used.add(key);
  }
  const missing = [...used].filter((k) => !s[k]);
  assert.deepEqual(missing, [], 'keys used but not defined');
  const unused = Object.keys(s).filter((k) => !used.has(k));
  assert.deepEqual(unused, [], 'keys defined but never used (remove them or use them)');
  for (const [key, entry] of Object.entries(s)) for (const l of LANGS) assert.ok(entry[l] && entry[l].trim(), `${key}/${l} missing`);
});

test('translated strings keep the same {placeholders} as English', () => {
  for (const [key, entry] of Object.entries(strings())) {
    const names = (t) => [...t.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
    for (const l of LANGS) assert.equal(names(entry[l]), names(entry.en), `${key}/${l}`);
  }
});

test('language names are native only (no "(French)" translations next to them), and decks/levels are translated', () => {
  assert.ok(!/\((French|Italian|Russian|Greek)\)/.test(game), 'monolingual: language names must not carry an English translation');
  assert.ok(!/<option value="[^"]*"[^>]*>[A-Z0-9][^<$]*<\/option>/.test(game.replace(/🇬🇧 English|🇫🇷 Français|🇮🇹 Italiano|🇷🇺 Русский|🇬🇷 Ελληνικά/g, '')),
    'every deck and level option must come from T()');
});

test('results colouring uses a language-independent kind, never the translated label', () => {
  assert.ok(!/choice\.includes\(/.test(game), 'do not inspect translated choice text');
  assert.ok(game.includes("['like', 'b', 'super'].includes(c.kind)"));
});

test('the page loads the strings before the game', () => {
  const common = page.indexOf('i18n/games/_common.js');
  const own = page.indexOf('i18n/games/this-or-that.js');
  const code = page.indexOf('game.js');
  assert.ok(common > 0 && common < own && own < code, 'order: _common.js, this-or-that.js, game.js');
});
