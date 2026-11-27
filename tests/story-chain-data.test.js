const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const GAME_JS = fs.readFileSync(path.join(ROOT, 'story-chain', 'game.js'), 'utf8');

function menuLanguages() {
  const match = GAME_JS.match(/cosyLanguageLabels\(\s*(\[[^\]]+\])\s*\)/);
  assert.ok(match, 'story-chain should declare its languages with cosyLanguageLabels');
  return JSON.parse(match[1]);
}

function loadPrompts(lang) {
  const file = path.join(ROOT, 'data', lang, 'storychain.js');
  assert.ok(fs.existsSync(file), `missing ${file}`);
  const sandbox = { window: {} };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox);
  const data = sandbox.gameData || sandbox.window.gameData;
  return (data[lang] && data[lang].storychain) || [];
}

function connectors() {
  const start = GAME_JS.indexOf('const CONNECTORS = {');
  assert.ok(start !== -1, 'CONNECTORS block not found');
  const end = GAME_JS.indexOf('};', start);
  const literal = GAME_JS.slice(start + 'const CONNECTORS = '.length, end + 1);
  return vm.runInNewContext('(' + literal + ')');
}

test('every story-chain menu language has story prompts', () => {
  for (const lang of menuLanguages()) {
    const prompts = loadPrompts(lang);
    assert.ok(prompts.length > 0, `${lang} has no story prompts`);
    for (const prompt of prompts) {
      assert.equal(typeof prompt.prompt, 'string');
      assert.ok(prompt.prompt.trim().length > 0, `${lang} has an empty prompt`);
      assert.ok(typeof prompt.level === 'string' && prompt.level.length > 0, `${lang} prompt has no level`);
    }
  }
});

test('every story-chain menu language has connector words', () => {
  const map = connectors();
  for (const lang of menuLanguages()) {
    assert.ok(Array.isArray(map[lang]) && map[lang].length > 0, `${lang} has no connector list`);
  }
});
