'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { syncReadme, levelRange } = require('../scripts/lib/readme-games');

const root = path.join(__dirname, '..');

test('README games table is generated from games/index.json and is up to date', () => {
  assert.equal(syncReadme(root).changed, false, 'Run: node scripts/sync-readme.js');
});

test('README lists every game once, with its folder', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  const games = JSON.parse(fs.readFileSync(path.join(root, 'games', 'index.json'), 'utf8'));
  for (const g of games) {
    const rows = readme.split('\n').filter((l) => l.startsWith('|') && l.includes(`\`${g.folder_path}\``));
    assert.equal(rows.length, 1, `${g.id} must appear in exactly one table row`);
  }
});

test('README does not claim a licence the LICENSE file does not grant', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  const license = fs.readFileSync(path.join(root, 'LICENSE'), 'utf8');
  if (/all rights reserved/i.test(license)) assert.ok(!/open[- ]source/i.test(readme), 'LICENSE is "all rights reserved", so the README must not say open-source');
});

test('CEFR level ranges are formatted as ranges only when contiguous', () => {
  assert.equal(levelRange(['A1', 'A2', 'B1']), 'A1–B1');
  assert.equal(levelRange(['A1', 'B1']), 'A1, B1');
  assert.equal(levelRange(['B2']), 'B2');
});
