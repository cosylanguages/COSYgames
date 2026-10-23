'use strict';
// Every game that has its own interface strings (i18n/games/<id>.js) must use them completely and consistently.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const LANGS = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];

// id -> keys that are built from a counter in the code ("'practice.reply_' + n") and therefore cannot be found literally
const GAMES = {
  'this-or-that': { numbered: ['practice.icebreaker_', 'practice.reply_'] },
  'etymology-explorer': { numbered: [] },
};

function load(file, id) {
  const sb = {};
  sb.window = sb;
  vm.createContext(sb);
  vm.runInContext(read(file), sb);
  return sb.COSYGameStrings[id].strings;
}
const common = () => load('i18n/games/_common.js', '_common');

for (const [id, options] of Object.entries(GAMES)) {
  const code = read(`${id}/game.js`);
  const page = read(`${id}/index.html`);
  const strings = load(`i18n/games/${id}.js`, id);

  test(`${id}: every key used exists in all 7 languages, and none of the game's own keys is unused`, () => {
    const used = new Set();
    for (const m of code.matchAll(/\bT\('([a-z_.0-9]+)'/g)) used.add(m[1]);
    for (const m of code.matchAll(/\bpracticeText\('([a-z_.0-9]+)'/g)) used.add(m[1]);
    for (const m of (code + page).matchAll(/data-gs(?:-label)?="([a-z_.0-9]+)"/g)) used.add(m[1]);
    for (const key of [...used]) if (key.endsWith('_')) used.delete(key);
    for (const prefix of options.numbered) {
      assert.ok(code.includes(`'${prefix}' + n`), `${prefix}N keys are built in game.js`);
      for (const key of Object.keys(strings).filter((k) => k.startsWith(prefix))) used.add(key);
    }
    const shared = common();
    const missing = [...used].filter((k) => !(k.startsWith('common.') ? shared[k] : strings[k]));
    assert.deepEqual(missing, [], 'keys used but not defined');
    assert.deepEqual(Object.keys(strings).filter((k) => !used.has(k)), [], 'keys defined but never used');
    for (const [key, entry] of Object.entries(strings)) for (const l of LANGS) assert.ok(entry[l] && entry[l].trim(), `${key}/${l} missing`);
  });

  test(`${id}: translations keep the same {placeholders} and HTML tags as English`, () => {
    const placeholders = (t) => [...t.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
    const tags = (t) => [...t.matchAll(/<\/?\w+>/g)].map((m) => m[0]).join('');
    for (const [key, entry] of Object.entries(strings)) {
      for (const l of LANGS) {
        assert.equal(placeholders(entry[l]), placeholders(entry.en), `${key}/${l} placeholders`);
        assert.equal(tags(entry[l]), tags(entry.en), `${key}/${l} tags`);
        assert.ok(!entry[l].includes("'"), `${key}/${l}: use the typographic apostrophe ’`);
      }
    }
  });

  test(`${id}: the page loads the common strings, then the game's strings, before game.js`, () => {
    const a = page.indexOf('i18n/games/_common.js');
    const b = page.indexOf(`i18n/games/${id}.js`);
    const c = page.indexOf('game.js');
    assert.ok(a > 0 && a < b && b < c, 'order: _common.js, <game>.js, game.js');
  });

  test(`${id}: no <option> or setup label carries literal English text`, () => {
    const NATIVE = /^(\S+ )?(English|Français|Italiano|Deutsch|Español|Русский|Ελληνικά|Português|Brezhoneg)( \S+)?$|^[^A-Za-z]*$/;
    const literal = [...code.matchAll(/<option[^>]*>([^<]*)<\/option>/g)]
      .map((m) => m[1].trim())
      .filter((text) => !text.includes('${') && /[A-Za-z]{4,}/.test(text) && !NATIVE.test(text));
    assert.deepEqual(literal, [], 'use T() for option labels');
  });
}
