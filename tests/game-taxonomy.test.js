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
    if (game.levelMapping) {
      Object.entries(game.levelMapping).forEach(([sourceLevel, mappedLevels]) => {
        assert.ok(game.sourceLevels.includes(sourceLevel), game.id + ' maps unknown source level ' + sourceLevel);
        mappedLevels.forEach(id => assert.ok(game.levels.includes(id), game.id + ' maps to undeclared CEFR level ' + id));
      });
      const mapped = new Set(Object.values(game.levelMapping).flat());
      game.levels.forEach(id => assert.ok(mapped.has(id), game.id + ' declares CEFR level ' + id + ' without a source-level mapping'));
    }
    assert.ok(Array.isArray(game.subcategories), game.id + ' needs subcategories');
    if (game.contentSets) {
      game.contentSets.forEach(set => {
        assert.ok(set.id, game.id + ' content set needs an ID');
        if (Array.isArray(set.levels) && set.levels.length) {
          set.levels.forEach(id => assert.ok(game.levels.includes(id), game.id + '/' + set.id + ' has undeclared level ' + id));
        } else {
          assert.equal(set.levelBasis, 'not-assessed', game.id + '/' + set.id + ' without CEFR tags must explicitly state levelBasis=not-assessed');
          assert.ok(set.sourceLevelNote, game.id + '/' + set.id + ' must explain why CEFR is not assigned');
        }
        set.categories.forEach(id => assert.ok(categoryIds.has(id), game.id + '/' + set.id + ' references unknown category ' + id));
        if (set.source) assert.ok(fs.existsSync(path.join(root, set.source)), game.id + '/' + set.id + ' source file does not exist: ' + set.source);
      });
    }
    assert.ok(html.includes(game.id + '/index.html'), 'hub should link to ' + game.id);
  });

  const sceneMatch = taxonomy.games.find(game => game.id === 'scene-match');
  assert.equal(sceneMatch.contentSets.length, 24, 'Scene Match should tag every current scene');
  assert.ok(sceneMatch.contentSets.every(set => fs.existsSync(path.join(root, 'data', 'scenes', set.id + '.js'))), 'Scene Match content-set IDs should resolve to scene files');

  const thisOrThat = taxonomy.games.find(game => game.id === 'this-or-that');
  assert.equal(thisOrThat.contentSets.length, 12, 'This or That should tag all twelve English decks');
  assert.ok(thisOrThat.contentSets.every(set => set.levelBuckets && set.levelBuckets['A0-A1']), 'This or That decks should preserve their source CEFR buckets');

  const questions = taxonomy.games.find(game => game.id === '100-questions');
  assert.equal(questions.contentSets.length, 8, '100 Questions should tag all eight current decks');
  assert.ok(questions.contentSets.every(set => set.levelBasis === 'not-assessed' && !set.levels), '100 Questions should not imply unverified CEFR levels for its progressive stages');
  assert.ok(questions.contentSets.every(set => fs.existsSync(path.join(root, set.source))), '100 Questions content-set sources should exist');

  const fluency = taxonomy.games.find(game => game.id === 'fluency-flow');
  assert.equal(fluency.contentSets.length, 5, 'Fluency Flow should group its English prompts by five source level bands');
  assert.ok(fluency.contentSets.every(set => set.sourceLevel && set.levels && set.source === 'data/en/fluency.js'), 'Fluency Flow content sets should preserve source level bands and source file');

  const wordLinker = taxonomy.games.find(game => game.id === 'word-linker');
  assert.equal(wordLinker.contentSets.length, 3, 'Word Linker should distinguish unlabelled core puzzles and explicitly level-labelled puzzles');
  assert.ok(wordLinker.contentSets.some(set => set.levelBasis === 'not-assessed'), 'Word Linker unlabelled puzzles must not be assigned guessed CEFR levels');
  assert.ok(wordLinker.contentSets.filter(set => set.levels).every(set => set.sourceLevel), 'Word Linker CEFR tags should preserve source level labels');

  const hundredQuestions = taxonomy.games.find(game => game.id === '100-questions');
  assert.deepEqual(hundredQuestions.levels, ['A2', 'B1', 'B2', 'C1', 'C2'], '100 Questions game-level CEFR list should match the explicit A2-C2 setup description');
  assert.ok(hundredQuestions.audienceNotes.includes('depends on deck'), '100 Questions should warn that suitability varies by deck and card side');
  assert.ok(hundredQuestions.modeNotes.includes('solo mode'), '100 Questions should distinguish individual lesson preparation from verified solo play');
  assert.ok(hundredQuestions.contentSets.filter(set => ['family', 'student', 'myself'].includes(set.id)).every(set => set.audienceNote && set.audiences.includes('children')), 'Child-friendly sides should be documented for Family, Student, and Myself decks');
  assert.ok(hundredQuestions.contentSets.filter(set => ['friends', 'interview', 'civic', 'netflix'].includes(set.id)).every(set => set.audienceNote && set.audiences.includes('adults')), 'Deck-specific suitability notes should exist for Friends, Interview, Civic, and Netflix');

  for (const id of ['story-chain', 'story-weaver', 'hot-seat']) {
    const game = taxonomy.games.find(item => item.id === id);
    assert.deepEqual(game.levels, ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], id + ' levels should match its explicit setup options');
    assert.ok(game.audienceNotes && game.modeNotes, id + ' should document age suitability and mode assumptions');
  }
  assert.ok(taxonomy.games.find(game => game.id === 'hot-seat').modeNotes.includes('at least a guesser and a clue-giver'), 'Hot Seat should document its minimum role structure');
  assert.ok(taxonomy.games.find(game => game.id === 'story-weaver').audienceNotes.includes('English-only'), 'Story Weaver should disclose its English-only setup');

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
