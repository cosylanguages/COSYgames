'use strict';
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { syncHub } = require('../scripts/sync-hub');
const { loadGames, loadI18n, SECTIONS, sectionFor } = require('../scripts/lib/game-content');

const root = path.join(__dirname, '..');

test('index.html game sections are generated from games/index.json', () => {
  const { changed } = syncHub(root, { write: false });
  assert.strictEqual(changed, false, 'Run: node scripts/sync-hub.js');
});

test('every game has the hub fields needed to generate its card', () => {
  const games = loadGames(root);
  const i18n = loadI18n(root);
  const langs = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];
  for (const game of games) {
    assert.ok(game.icon, `${game.id} needs an icon in games/index.json`);
    assert.ok(game.description_key, `${game.id} needs a description_key in games/index.json`);
    assert.doesNotThrow(() => sectionFor(game.category), `${game.id} has an unknown category`);
    for (const lang of langs) {
      assert.ok(i18n.hasI18n(game.description_key, lang), `${game.id} description_key "${game.description_key}" is missing from ${lang}`);
    }
  }
});

test('hub section counts match the registry', () => {
  const games = loadGames(root);
  for (const section of SECTIONS) {
    const count = games.filter((game) => game.category === section.category).length;
    assert.ok(count > 0, `${section.category} needs at least one game`);
  }
  assert.strictEqual(
    games.length,
    SECTIONS.reduce((sum, section) => sum + games.filter((game) => game.category === section.category).length, 0)
  );
});
