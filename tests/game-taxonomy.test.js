const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('Shared game taxonomy stays aligned with the hub', () => {
  const root = path.resolve(__dirname, '..');
  const taxonomy = JSON.parse(fs.readFileSync(path.join(root, 'data', 'game-taxonomy.json'), 'utf8'));
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const filterScript = fs.readFileSync(path.join(root, 'shared', 'js', 'game-taxonomy.js'), 'utf8');
  const hubScript = fs.readFileSync(path.join(root, 'shared', 'js', 'hub.js'), 'utf8');
  const hubCore = require(path.join(root, 'shared', 'js', 'hub-core.js'));

  const gameCount = JSON.parse(fs.readFileSync(path.join(root, 'games', 'index.json'), 'utf8')).length;
  assert.equal(taxonomy.games.length, gameCount, 'taxonomy should describe every game in games/index.json');
  assert.equal(new Set(taxonomy.games.map(game => game.id)).size, gameCount, 'game IDs must be unique');
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
    assert.deepEqual(Object.keys(game.subcategoryMappings || {}).sort(), game.subcategories.slice().sort(), game.id + ' must explicitly map every source subtopic label');
    const canonicalSubtopics = new Set(taxonomy.categories.flatMap(category => category.subcategories || []));
    Object.entries(game.subcategoryMappings || {}).forEach(([sourceLabel, targets]) => {
      assert.ok(Array.isArray(targets), game.id + '/' + sourceLabel + ' mapping must be an array');
      targets.forEach(target => assert.ok(canonicalSubtopics.has(target), game.id + '/' + sourceLabel + ' maps to unknown canonical subtopic ' + target));
    });
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

  for (const id of ['action-hero', 'identity-mystery', 'object-quest']) {
    const game = taxonomy.games.find(item => item.id === id);
    assert.deepEqual(game.levels, ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], id + ' levels should match its explicit setup options');
    assert.ok(game.audienceNotes && game.modeNotes, id + ' should document audience suitability and play-mode assumptions');
  }
  assert.ok(taxonomy.games.find(game => game.id === 'action-hero').modeNotes.includes('does not enforce'), 'Action Hero should not imply a hard group-size limit without one in the UI');
  assert.ok(taxonomy.games.find(game => game.id === 'identity-mystery').modeNotes.includes('Do not assume solo play'), 'Identity Mystery should not overstate solo support');
  assert.ok(taxonomy.games.find(game => game.id === 'object-quest').modeNotes.includes('does not by itself guarantee offline'), 'Object Quest should distinguish in-person use from offline capability');

  const actionHero = taxonomy.games.find(game => game.id === 'action-hero');
  assert.deepEqual(actionHero.levelMapping.starter, ['A1'], 'Action Hero Starter mapping should match its visible setup label');
  const battle = taxonomy.games.find(game => game.id === 'battle-of-wits');
  assert.deepEqual(battle.levels, ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], 'Battle of Wits levels should match explicit setup options');
  assert.ok(battle.modeNotes.includes('Team A and Team B'), 'Battle of Wits should document team play');
  const opinionArena = taxonomy.games.find(game => game.id === 'opinion-arena');
  assert.deepEqual(opinionArena.levels, ['B1', 'B2', 'C1'], 'Opinion Arena should advertise only levels with explicit source mappings');
  assert.ok(opinionArena.audienceNotes.includes('setup selector offers A1–C2'), 'Opinion Arena should explain the difference between selector options and mapped content');
  const lastLetter = taxonomy.games.find(game => game.id === 'last-letter');
  assert.deepEqual(lastLetter.levels, ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], 'Last Letter levels should match explicit setup options');

  const crossword = taxonomy.games.find(game => game.id === 'cosy-crossword');
  assert.deepEqual(crossword.levels, ['A1', 'A2', 'B1', 'B2', 'C1'], 'Cosy Crossword levels should match explicit setup options');
  assert.ok(crossword.audienceNotes.includes('language selector currently lists'), 'Cosy Crossword should document current language options');

  const etymology = taxonomy.games.find(game => game.id === 'etymology-explorer');
  assert.deepEqual(etymology.levels, [], 'Etymology Explorer should not present non-CEFR difficulty modes as CEFR levels');
  assert.equal(etymology.levelAvailability, 'mode-based-not-cefr');
  assert.deepEqual(etymology.specialSelection.options, ['Easy', 'Medium', 'Hard', 'Language Network', 'Word Pairs']);
  assert.equal(etymology.specialSelection.bypassesCEFR, true);
  assert.ok(etymology.audienceNotes.includes('not CEFR-labelled'));

  const sceneMatchAdvanced = taxonomy.games.find(game => game.id === 'scene-match');
  assert.deepEqual(sceneMatchAdvanced.levels, ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], 'Scene Match taxonomy should include its B2–C2 setup option');
  assert.ok(sceneMatchAdvanced.modeNotes.includes('solo-oriented'));
  for (const id of ['fluency-flow', 'critics-corner', 'this-or-that', 'word-linker']) {
    const game = taxonomy.games.find(item => item.id === id);
    assert.ok(game.audienceNotes, id + ' should document audience caveats');
    assert.ok(game.modeNotes, id + ' should document mode caveats');
  }

  const luckyNumbers = taxonomy.games.find(game => game.id === 'lucky-numbers');
  assert.deepEqual(luckyNumbers.levels, [], 'Lucky Numbers practice sets should not be presented as CEFR-assessed');
  assert.deepEqual(luckyNumbers.specialSelection.options, ['Alphabet', 'Numbers 0–9', 'Numbers 0–19', 'Numbers 0–99']);
  assert.equal(luckyNumbers.specialSelection.bypassesCEFR, true);

  assert.ok(luckyNumbers.audienceNotes.includes('Caller role'), 'Lucky Numbers should document player/caller roles');
  assert.ok(luckyNumbers.modeNotes.includes('internet-free'), 'Lucky Numbers should not imply in-person means offline');
  assert.ok(!luckyNumbers.specialSelection.options.includes('Numbers 0–100'), 'Lucky Numbers range should match source maximum of 99');
  const emojiOdyssey = taxonomy.games.find(game => game.id === 'emoji-odyssey');
  assert.ok(emojiOdyssey.audienceNotes.includes('Guess and Story'), 'Emoji Odyssey should document its two modes and content suitability');

  ['filter-category', 'filter-subcategory', 'filter-level', 'filter-audience', 'filter-mode', 'filter-format'].forEach(id => {
    assert.ok(html.includes('id="' + id + '"'), 'hub should expose ' + id);
  });
  assert.ok(html.includes('shared/js/game-taxonomy.js'), 'hub should load taxonomy filter logic');
  assert.ok(!html.includes('</script>\\n    <div id="toast"'), 'hub markup should not contain a literal escaped newline after the taxonomy script');
  assert.ok(html.includes('Level filters show games with mapped CEFR levels'), 'hub should explain that CEFR filtering only includes mapped games');
  assert.ok(html.includes('id="taxonomy-empty-state"'), 'hub should provide a no-results message for combined filters');
  assert.ok(html.includes('id="taxonomy-load-error"'), 'hub should provide a fallback notice if taxonomy filters fail to load');
  assert.ok(filterScript.includes("if (loadError) loadError.hidden = false;"), 'taxonomy load failure should reveal the fallback notice');
  assert.ok(hubScript.includes('if (emptyState) emptyState.hidden = totalVisible > 0;'), 'filter logic should show the no-results message only when no games match');
  assert.ok(filterScript.includes('Object.values(game.subcategoryMappings || {}).flat()'), 'subtopic choices should use canonical mappings, not game-specific source labels');
  assert.ok(filterScript.includes('const allowedSubtopics = new Set();'), 'subtopic choices should be constrained to canonical topics');
  assert.ok(filterScript.includes("category.id === selectedCategory"), 'a selected topic should only offer subtopics owned by that topic');
  assert.ok(filterScript.includes('COSYHubCore.taxonomyCardAttributes(game)'), 'game cards should be tagged through the shared hub core');
  taxonomy.games.forEach(game => {
    assert.equal(
      hubCore.taxonomyCardAttributes(game).subcategories,
      JSON.stringify(Array.from(new Set(Object.values(game.subcategoryMappings || {}).flat()))),
      game.id + ' cards should be tagged with deduplicated canonical subtopics'
    );
  });
  assert.ok(filterScript.includes('data/game-taxonomy.json'), 'filter logic should load the shared taxonomy');
  ['filter-category', 'filter-subcategory', 'filter-level', 'filter-audience', 'filter-mode', 'filter-format'].forEach(id => {
    assert.ok(hubScript.includes("selectValue('" + id + "')"), 'result filtering should read ' + id);
  });
  assert.ok(hubScript.includes('core.cardMatches(data, selection)'), 'all taxonomy selectors should combine in result filtering through the shared core');
});
