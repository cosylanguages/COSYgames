const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const DECKS = path.join(ROOT, 'this-or-that', 'decks');
const DECK_FILES = {
  en: 'cefr_all_decks.json',
  french: 'french.json',
  italian: 'italian.json',
  russian: 'russian.json',
  greek: 'greek.json'
};
const LEVELS = ['A0_A1', 'A2', 'B1', 'B2'];

function readDeck(file) {
  return JSON.parse(fs.readFileSync(path.join(DECKS, file), 'utf8'));
}

test('this-or-that loads its deck files instead of leaving TOT_DECKS unset', () => {
  const source = fs.readFileSync(path.join(ROOT, 'this-or-that', 'game.js'), 'utf8');
  assert.match(
    source,
    /window\.TOT_DECKS\[[^\]]+\]\s*=/,
    'game.js must assign window.TOT_DECKS so the deck selectors do something'
  );
});

test('every this-or-that language has a deck file with all CEFR levels', () => {
  for (const [lang, file] of Object.entries(DECK_FILES)) {
    const deck = readDeck(file);
    for (const level of LEVELS) {
      assert.ok(deck[level], `${lang} (${file}) is missing level ${level}`);
      assert.ok(
        Object.values(deck[level]).some(Array.isArray),
        `${lang} (${file}) has no card arrays at ${level}`
      );
    }
  }
});

test('the English deck backs every option in the deck selector', () => {
  const deck = readDeck(DECK_FILES.en);
  const vocabularyCategories = [
    'appearance', 'professions', 'properties', 'character', 'hobbies',
    'nationalities', 'food', 'travel', 'entertainment', 'daily_habits'
  ];
  const grammarCategories = [
    'grammar_present', 'grammar_past', 'grammar_perfect', 'grammar_advanced'
  ];

  for (const level of LEVELS) {
    for (const category of vocabularyCategories) {
      assert.ok(
        Array.isArray(deck[level][category]) && deck[level][category].length > 0,
        `English ${category} has no cards at ${level}`
      );
    }
    if (level !== 'A0_A1') {
      for (const category of grammarCategories) {
        assert.ok(
          Array.isArray(deck[level][category]) && deck[level][category].length > 0,
          `English ${category} has no cards at ${level}`
        );
      }
    }
  }
  assert.ok(Array.isArray(deck.A2.dilemmas) && deck.A2.dilemmas.length > 0, 'English dilemmas are empty');
});

test('non-English decks keep at least two cards per vocabulary category', () => {
  for (const [lang, file] of Object.entries(DECK_FILES)) {
    if (lang === 'en') continue;
    const deck = readDeck(file);
    for (const level of LEVELS) {
      for (const category of ['appearance', 'professions', 'character', 'food', 'travel']) {
        assert.ok(
          Array.isArray(deck[level][category]) && deck[level][category].length >= 2,
          `${lang} ${category} has fewer than 2 cards at ${level}`
        );
      }
    }
  }
});
