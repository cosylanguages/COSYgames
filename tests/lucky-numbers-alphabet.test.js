const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const GAME_JS = fs.readFileSync(path.join(ROOT, 'lucky-numbers', 'game.js'), 'utf8');

function menuLanguages() {
  const match = GAME_JS.match(/cosyLanguageLabels\(\s*(\[[^\]]+\])\s*\)/);
  assert.ok(match, 'lucky-numbers should declare its languages with cosyLanguageLabels');
  return JSON.parse(match[1]);
}

function alphabets() {
  const latin = GAME_JS.match(/const LATIN_ALPHABET = ('[^']*');/);
  const map = GAME_JS.match(/const ALPHABETS = (\{[\s\S]*?\n    \});/);
  assert.ok(latin && map, 'LATIN_ALPHABET / ALPHABETS declarations not found');
  return vm.runInNewContext(`const LATIN_ALPHABET = ${latin[1]};\n(${map[1]})`);
}

test('every lucky-numbers language has its own alphabet', () => {
  const map = alphabets();
  for (const lang of menuLanguages()) {
    const alphabet = map[lang];
    assert.ok(typeof alphabet === 'string' && alphabet.length > 0, `${lang} has no alphabet`);
    assert.equal(new Set(alphabet).size, alphabet.length, `${lang} alphabet contains duplicate letters`);
  }
});

test('non-Latin languages use their own script instead of A-Z', () => {
  const map = alphabets();
  assert.match(map.ru, /^[А-ЯЁ]+$/, 'Russian alphabet must be Cyrillic');
  assert.match(map.el, /^[Α-Ω]+$/, 'Greek alphabet must be Greek');
  assert.match(map.en, /^[A-Z]+$/, 'English alphabet must be Latin');
});
