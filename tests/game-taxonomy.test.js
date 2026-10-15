const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('Shared game taxonomy stays aligned with the hub', () => {
  const root = path.resolve(__dirname, '..');
  const taxonomy = JSON.parse(fs.readFileSync(path.join(root, 'data', 'game-taxonomy.json'), 'utf8'));
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const filterScript = fs.readFileSync(path.join(root, 'shared', 'js', 'game-taxonomy.js'), 'utf8');

  assert.equal(taxonomy.games.length, 20, 'taxonomy should describe all 20 games');
  assert.equal(new Set(taxonomy.games.map(game => game.id)).size, 20, 'game IDs must be unique');
  assert.equal(new Set(taxonomy.categories.map(category => category.id)).size, taxonomy.categories.length, 'category IDs must be unique');
  assert.deepEqual(taxonomy.cefrLevels.map(level => level.id), ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

  const categoryIds = new Set(taxonomy.categories.map(category => category.id));
  const audienceIds = new Set(taxonomy.audiences.map(audience => audience.id));
  const modeIds = new Set(taxonomy.playModes.map(mode => mode.id));
  const formatIds = new Set(taxonomy.playFormats.map(format => format.id));
  taxonomy.games.forEach(game => {
    assert.ok(categoryIds.size > 0);
    assert.ok(game.categories.length > 0, game.id + ' needs at least one topic');
    game.categories.forEach(id => assert.ok(categoryIds.has(id), game.id + ' references unknown category ' + id));
    game.audiences.forEach(id => assert.ok(audienceIds.has(id), game.id + ' references unknown audience ' + id));
    game.modes.forEach(id => assert.ok(modeIds.has(id), game.id + ' references unknown mode ' + id));
    game.formats.forEach(id => assert.ok(formatIds.has(id), game.id + ' references unknown format ' + id));
    game.levels.forEach(id => assert.ok(taxonomy.cefrLevels.some(level => level.id === id), game.id + ' references unknown CEFR level ' + id));
    assert.ok(Array.isArray(game.subcategories), game.id + ' needs subcategories');
    assert.ok(html.includes(game.id + '/index.html'), 'hub should link to ' + game.id);
  });

  const luckyNumbers = taxonomy.games.find(game => game.id === 'lucky-numbers');
  assert.deepEqual(luckyNumbers.specialSelection.options, ['Alphabet', 'Numbers 0–9', 'Numbers 0–19', 'Numbers 0–100']);
  assert.equal(luckyNumbers.specialSelection.bypassesCEFR, true);

  ['filter-category', 'filter-subcategory', 'filter-level', 'filter-audience', 'filter-mode', 'filter-format'].forEach(id => {
    assert.ok(html.includes('id="' + id + '"'), 'hub should expose ' + id);
  });
  assert.ok(html.includes('shared/js/game-taxonomy.js'), 'hub should load taxonomy filter logic');
  assert.ok(filterScript.includes('data/game-taxonomy.json'), 'filter logic should load the shared taxonomy');
  assert.ok(html.includes('matchesCategory && matchesSubcategory && matchesLevel && matchesAudience && matchesMode && matchesFormat'), 'all taxonomy selectors should combine in result filtering');
});
