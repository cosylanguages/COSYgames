const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('Canonical subtopic mappings stay within each game topic set', () => {
  const taxonomyPath = path.join(__dirname, '..', 'data', 'game-taxonomy.json');
  const taxonomy = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));

  const topicBySubtopic = new Map();
  taxonomy.categories.forEach(category => {
    (category.subcategories || []).forEach(subtopic => {
      assert.ok(!topicBySubtopic.has(subtopic), 'canonical subtopic must have one owner: ' + subtopic);
      topicBySubtopic.set(subtopic, category.id);
    });
  });

  taxonomy.games.forEach(game => {
    Object.entries(game.subcategoryMappings || {}).forEach(([sourceLabel, targets]) => {
      targets.forEach(target => {
        const owner = topicBySubtopic.get(target);
        assert.ok(owner, game.id + '/' + sourceLabel + ' maps to unknown subtopic ' + target);
        assert.ok(
          game.categories.includes(owner),
          game.id + '/' + sourceLabel + ' maps to ' + target + ', but the game is not assigned to its topic ' + owner
        );
      });
    });
  });
});
