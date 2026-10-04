import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const repoRoot = path.resolve(import.meta.dirname, '..');
const i18nPath = path.join(repoRoot, 'shared', 'js', 'i18n.js');

test('PART D1: All 10+ new keys exist in all 7 languages and ui_level_* strings contain CEFR codes', () => {
  const i18nCode = fs.readFileSync(i18nPath, 'utf8');

  // Load i18n.js in vm sandbox
  const sandbox = {
    localStorage: { getItem: () => 'en' },
    window: {},
    document: { readyState: 'complete', addEventListener: () => {} }
  };
  sandbox.window = sandbox;

  vm.createContext(sandbox);
  vm.runInContext(i18nCode, sandbox);

  const languages = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];
  const requiredKeys = [
    'ui_practice_language',
    'ui_level',
    'ui_start_game',
    'ui_play_again',
    'ui_level_a1',
    'ui_level_a2',
    'ui_level_b1',
    'ui_level_b2',
    'ui_level_c1',
    'ui_level_c2'
  ];

  const levelKeys = [
    { key: 'ui_level_a1', code: 'A1' },
    { key: 'ui_level_a2', code: 'A2' },
    { key: 'ui_level_b1', code: 'B1' },
    { key: 'ui_level_b2', code: 'B2' },
    { key: 'ui_level_c1', code: 'C1' },
    { key: 'ui_level_c2', code: 'C2' }
  ];

  languages.forEach(lang => {
    requiredKeys.forEach(key => {
      assert.strictEqual(
        sandbox.hasI18n(key, lang),
        true,
        `Key ${key} should exist in language ${lang}`
      );
      const text = sandbox.getI18nText(key, lang);
      assert.ok(text && text.length > 0, `Text for ${key} in ${lang} should not be empty`);
    });

    levelKeys.forEach(({ key, code }) => {
      const text = sandbox.getI18nText(key, lang);
      assert.ok(
        text.includes(`(${code})`),
        `Level string ${key} in ${lang} ("${text}") must contain CEFR code "(${code})"`
      );
    });
  });
});

test('PART D2: cosyLevelOptions returns 6 <option> elements with exact English values and matching data-i18n', () => {
  const i18nCode = fs.readFileSync(i18nPath, 'utf8');
  const sandbox = {
    localStorage: { getItem: () => 'en' },
    window: {},
    document: { readyState: 'complete', addEventListener: () => {} }
  };
  sandbox.window = sandbox;

  vm.createContext(sandbox);
  vm.runInContext(i18nCode, sandbox);

  const levelOpts = [
    'Starter (A1)',
    'Primary (A2)',
    'Intermediate (B1)',
    'Upper (B2)',
    'Advanced (C1)',
    'Proficiency (C2)'
  ];

  // Test without selectedLabel
  const optionsHtml = sandbox.cosyLevelOptions(levelOpts);
  assert.ok(optionsHtml.includes('value="Starter (A1)"'));
  assert.ok(optionsHtml.includes('data-i18n="ui_level_a1"'));
  assert.ok(optionsHtml.includes('value="Proficiency (C2)"'));
  assert.ok(optionsHtml.includes('data-i18n="ui_level_c2"'));
  assert.ok(!optionsHtml.includes('selected'));

  // Test with selectedLabel
  const selectedHtml = sandbox.cosyLevelOptions(levelOpts, 'Intermediate (B1)');
  assert.ok(selectedHtml.includes('value="Intermediate (B1)" data-i18n="ui_level_b1" selected>'));

  // Count occurrences of 'selected'
  const selectedMatches = selectedHtml.match(/selected/g) || [];
  assert.strictEqual(selectedMatches.length, 1, 'Exactly one option should have the selected attribute');
});

test('PART D3: Scan in-scope game.js files for absence of legacy raw HTML patterns', () => {
  const inScopeFiles = [
    'action-hero/game.js',
    'battle-of-wits/game.js',
    'critics-corner/game.js',
    'emoji-odyssey/game.js',
    'etymology-explorer/game.js',
    'fluency-flow/game.js',
    'hot-seat/game.js',
    'identity-mystery/game.js',
    'last-letter/game.js',
    'lucky-numbers/game.js',
    'object-quest/game.js',
    'opinion-arena/game.js',
    'story-chain/game.js',
    'story-weaver/game.js',
    'what-gender-is-it/game.js',
    'word-linker/game.js'
  ];

  inScopeFiles.forEach(relPath => {
    const filePath = path.join(repoRoot, relPath);
    const content = fs.readFileSync(filePath, 'utf8');

    assert.ok(
      !content.includes('<label>Level</label>'),
      `${relPath} should not contain legacy <label>Level</label>`
    );
    assert.ok(
      !content.includes('<label>Language</label>'),
      `${relPath} should not contain legacy <label>Language</label>`
    );
    assert.ok(
      !/\$\{LEVEL_OPTS\.map\([^)]+\)\.join\(''\)\}/.test(content),
      `${relPath} should not map LEVEL_OPTS directly to <option> strings without cosyLevelOptions`
    );
  });
});
