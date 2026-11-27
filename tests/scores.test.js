'use strict';

// COSYScores is the single score store (localStorage key 'cosy_game_scores').
// Setup screens used to read a different, never-written key through COSYUtils,
// so every "High Score" showed 0.

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');

function loadScores() {
  const store = {};
  const elements = {
    'current-score': { textContent: '0' },
    'high-score': { textContent: '0' }
  };
  const context = {
    console,
    localStorage: {
      getItem: (key) => (Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null),
      setItem: (key, value) => { store[key] = String(value); },
      removeItem: (key) => { delete store[key]; }
    },
    document: { getElementById: (id) => elements[id] || null }
  };
  context.window = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(ROOT, '_engine', 'scores.js'), 'utf8'), context);
  return { scores: context.COSYScores, store, elements };
}

test('COSYScores.latest and bestAny read the same store that save() writes', () => {
  const { scores, store } = loadScores();
  scores.save('demo', 'fr', 'A1', 40);
  scores.save('demo', 'en', 'A1', 90);
  scores.save('demo', 'en', 'A2', 10);
  scores.save('other', 'en', 'A1', 500);

  assert.ok(store.cosy_game_scores, 'save() must write to the cosy_game_scores key');
  assert.strictEqual(scores.best('demo', 'en').score, 90);
  assert.strictEqual(scores.bestAny('demo').score, 90);
  assert.strictEqual(scores.bestAny('other').score, 500);
  assert.strictEqual(scores.bestAny('missing'), null);
  assert.ok(scores.latest('demo'), 'latest() should find the most recent entry');
});

test('COSYScores.renderSetupScores fills the setup-screen counters', () => {
  const { scores, elements } = loadScores();
  scores.renderSetupScores('demo');
  assert.strictEqual(elements['current-score'].textContent, 0);
  assert.strictEqual(elements['high-score'].textContent, 0);

  scores.save('demo', 'en', 'A1', 30);
  scores.save('demo', 'en', 'A2', 70);
  scores.renderSetupScores('demo');
  assert.strictEqual(elements['current-score'].textContent, 70);
  assert.strictEqual(elements['high-score'].textContent, 70);
});

test('every setup screen reads the same score store the games write to', () => {
  const folders = fs.readdirSync(ROOT).filter((name) => fs.existsSync(path.join(ROOT, name, 'game.js')));
  const failures = [];

  for (const folder of folders) {
    const htmlPath = path.join(ROOT, folder, 'index.html');
    if (!fs.existsSync(htmlPath)) continue;
    const html = fs.readFileSync(htmlPath, 'utf8');
    const gameJs = fs.readFileSync(path.join(ROOT, folder, 'game.js'), 'utf8');

    if (html.includes('COSYUtils.getScore') || html.includes('COSYUtils.getHighScore')) {
      failures.push(`${folder}/index.html still reads the unused COSYUtils score store`);
    }

    if (!html.includes('id="current-score"')) continue;
    if (!gameJs.includes('COSYScores.save')) {
      failures.push(`${folder}/index.html shows a score but game.js never calls COSYScores.save`);
      continue;
    }
    const idMatch = gameJs.match(/GAME_ID\s*=\s*['"]([^'"]+)['"]/);
    if (!idMatch) {
      failures.push(`${folder}/game.js has no GAME_ID`);
      continue;
    }
    if (!html.includes(`renderSetupScores('${idMatch[1]}')`)) {
      failures.push(`${folder}/index.html must call renderSetupScores('${idMatch[1]}')`);
    }
  }

  assert.deepStrictEqual(failures, [], failures.join('\n'));
});
