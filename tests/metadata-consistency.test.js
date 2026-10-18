'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { computeDifferences, structuralProblems } = require('../scripts/lib/metadata-diff');

const root = path.join(__dirname, '..');

test('games/index.json, GAMES_INVENTORY.json, game-taxonomy.json and game folders list the same games', () => {
  assert.deepStrictEqual(structuralProblems(root), []);
});

test('differences between the metadata sources match the reviewed baseline (no new drift)', () => {
  const baseline = JSON.parse(fs.readFileSync(path.join(root, 'tests', 'fixtures', 'metadata-known-differences.json'), 'utf8'));
  assert.deepStrictEqual(
    computeDifferences(root),
    baseline,
    'Metadata sources changed relative to tests/fixtures/metadata-known-differences.json. ' +
      'If the change is intentional, review it (see docs/GAME_METADATA.md) and run: node scripts/metadata-report.js --update'
  );
});
