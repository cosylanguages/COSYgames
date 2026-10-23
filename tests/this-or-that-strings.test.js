'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const game = read('this-or-that/game.js');


test('language names are native only (no "(French)" translations next to them), and decks/levels are translated', () => {
  assert.ok(!/\((French|Italian|Russian|Greek)\)/.test(game), 'monolingual: language names must not carry an English translation');
  assert.ok(!/<option value="[^"]*"[^>]*>[A-Z0-9][^<$]*<\/option>/.test(game.replace(/🇬🇧 English|🇫🇷 Français|🇮🇹 Italiano|🇷🇺 Русский|🇬🇷 Ελληνικά/g, '')),
    'every deck and level option must come from T()');
});

test('results colouring uses a language-independent kind, never the translated label', () => {
  assert.ok(!/choice\.includes\(/.test(game), 'do not inspect translated choice text');
  assert.ok(game.includes("['like', 'b', 'super'].includes(c.kind)"));
});

