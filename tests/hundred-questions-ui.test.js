'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const game = fs.readFileSync(path.join(__dirname, '..', '100-questions', 'game.js'), 'utf8');

// UI_TEXTS is an object literal inside the game's IIFE: cut it out with a brace matcher and evaluate just that.
function uiTexts() {
  const start = game.indexOf('const UI_TEXTS = {') + 'const UI_TEXTS = '.length;
  let depth = 0, end = start, inString = null;
  for (let i = start; i < game.length; i++) {
    const c = game[i];
    if (inString) { if (c === '\\') i++; else if (c === inString) inString = null; continue; }
    if (c === '"' || c === "'" || c === '`') { inString = c; continue; }
    if (c === '{') depth++;
    if (c === '}' && --depth === 0) { end = i + 1; break; }
  }
  return vm.runInNewContext('(' + game.slice(start, end) + ')');
}

const NEW_KEYS = ['lesson_individual', 'lesson_group', 'sub_mother', 'sub_father', 'sub_grandparents', 'sub_sibling', 'self_current', 'self_past', 'self_future',
  'target_grandma', 'target_grandpa', 'target_sister', 'target_brother', 'region_us', 'region_uk', 'region_canada', 'region_france', 'region_russia'];

test('English, French and Russian interface text have exactly the same keys and array lengths', () => {
  const t = uiTexts();
  const shape = (o) => Object.entries(o).map(([k, v]) => `${k}${Array.isArray(v) ? `[${v.length}]` : ''}`).sort();
  assert.deepEqual(shape(t.fr), shape(t.en), 'fr must mirror en');
  assert.deepEqual(shape(t.ru), shape(t.en), 'ru must mirror en');
});

test('setup option labels that used to be hard-coded English are translated', () => {
  const t = uiTexts();
  const sameInFrench = new Set(['region_canada', 'region_france']); // identical in French
  for (const key of NEW_KEYS) {
    for (const lang of ['en', 'fr', 'ru']) assert.ok(typeof t[lang][key] === 'string' && t[lang][key].trim(), `${lang}.${key}`);
    if (!sameInFrench.has(key)) assert.notEqual(t.fr[key], t.en[key], `fr.${key} is still English`);
    assert.notEqual(t.ru[key], t.en[key], `ru.${key} is still English`);
  }
});

test('no setup <option> carries literal English text (only language names, which are native)', () => {
  const NATIVE = /^(🇬🇧 )?English( 🇬🇧)?$|^(🇫🇷 )?Français( 🇫🇷)?$|^(🇷🇺 )?Русский( 🇷🇺)?$/;
  const literal = [...game.matchAll(/<option[^>]*>([^<]*)<\/option>/g)]
    .map((m) => m[1].trim())
    .filter((text) => !text.includes('${') && /[A-Za-z]{4,}/.test(text) && !NATIVE.test(text));
  assert.deepEqual(literal, [], 'use UI_TEXTS for option labels');
});

test('the game follows the interface language until the player chooses, and reacts to language changes on the setup screen', () => {
  assert.ok(game.includes("const SUPPORTED_LANGS = ['en', 'fr', 'ru']"));
  assert.ok(/if \(!langChosen && !linkedLang && SUPPORTED_LANGS\.includes\(interfaceLang\(\)\)\) state\.lang = interfaceLang\(\);/.test(game), 'initial language');
  assert.ok(game.includes("document.addEventListener('cosy:languagechange'"), 'language-change listener');
  assert.ok(/selectLang\.addEventListener\('change', \(\) => \{\s*langChosen = true;/.test(game), 'an explicit choice must win');
  assert.ok(game.includes("new URLSearchParams(window.location.search).has('lang')"), 'a ?lang= link must win over the interface language');
});
