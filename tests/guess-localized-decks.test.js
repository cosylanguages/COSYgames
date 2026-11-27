'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const CEFR = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

function loadDecks() {
  const source = fs.readFileSync(path.join(root, 'guess', 'data', 'who-localized.js'), 'utf8');
  const sandbox = {};
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.COSY_GUESS_DECKS.who;
}

test('localized Guess Who decks cover every non-English practice language', () => {
  const decks = loadDecks();
  const games = JSON.parse(fs.readFileSync(path.join(root, 'games', 'index.json'), 'utf8'));
  const guess = games.find((g) => g.id === 'guess');
  assert.ok(guess, 'guess must be listed in games/index.json');

  for (const lang of guess.learning_languages) {
    if (lang === 'en') continue;
    const cards = decks[lang];
    assert.ok(Array.isArray(cards) && cards.length > 0, `guess/data/who-localized.js needs a "${lang}" deck`);
  }
  assert.strictEqual(decks.en, undefined, 'English must keep the curated inline deck, not a localized copy');
});

test('every localized card is a valid Guess Who card', () => {
  const decks = loadDecks();
  for (const [lang, cards] of Object.entries(decks)) {
    const seen = new Set();
    for (const card of cards) {
      assert.strictEqual(typeof card.word, 'string', `${lang}: word must be a string`);
      assert.ok(card.word.trim().length > 0, `${lang}: empty word`);
      assert.ok(!seen.has(card.word), `${lang}: duplicate word "${card.word}"`);
      seen.add(card.word);

      assert.ok(Array.isArray(card.clues) && card.clues.length > 0, `${lang}/${card.word}: needs at least one clue`);
      assert.ok(card.clues.every((c) => typeof c === 'string' && c.trim().length > 0), `${lang}/${card.word}: empty clue`);

      assert.ok(CEFR.includes(card.level), `${lang}/${card.word}: level "${card.level}" is not a Guess CEFR level`);
      assert.strictEqual(typeof card.cat, 'string', `${lang}/${card.word}: cat must be a string`);
      assert.ok(Array.isArray(card.taboo), `${lang}/${card.word}: taboo must be an array`);
    }
  }
});

test('Guess loads the localized decks before its own script', () => {
  const html = fs.readFileSync(path.join(root, 'guess', 'index.html'), 'utf8');
  const dataAt = html.indexOf('data/who-localized.js');
  const gameAt = html.indexOf('src="game.js"');
  assert.ok(dataAt !== -1, 'guess/index.html must load data/who-localized.js');
  assert.ok(gameAt !== -1 && dataAt < gameAt, 'localized decks must load before game.js');

  const js = fs.readFileSync(path.join(root, 'guess', 'game.js'), 'utf8');
  assert.ok(js.includes('window.COSY_GUESS_DECKS'), 'game.js must read window.COSY_GUESS_DECKS');
  assert.ok(js.includes('BASE_WHO'), 'game.js must keep the curated English deck as fallback');
  assert.ok(js.includes("urlParams.get('lang')"), 'game.js must support the ?lang= deep link used by the localized decks');
});

test('the identity dataset is not duplicated in the game_data bundles', () => {
  const dirs = fs.readdirSync(path.join(root, 'data'), { withFileTypes: true }).filter((d) => d.isDirectory());
  for (const dir of dirs) {
    const file = path.join(root, 'data', dir.name, 'game_data.js');
    if (!fs.existsSync(file)) continue;
    const sandbox = {};
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox);
    assert.ok(!('identity' in sandbox.gameData[dir.name]), `data/${dir.name}/game_data.js still carries the retired identity key`);
  }
});
