'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { syncGameManifests } = require('../scripts/sync-game-manifests');
const { loadGames } = require('../scripts/lib/game-content');

const root = path.join(__dirname, '..');
const SKIP_DIRS = new Set(['.git', 'node_modules']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function globToRegex(pattern) {
  const escaped = pattern
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '§§')
    .replace(/\*/g, '[^/]*')
    .replace(/§§/g, '.*');
  return new RegExp(`^${escaped}$`);
}

function exists(rootDir, pattern) {
  const clean = pattern.split('?')[0];
  if (!clean.includes('*')) return fs.existsSync(path.join(rootDir, clean));
  const re = globToRegex(clean);
  return walk(rootDir).some((file) => re.test(path.relative(rootDir, file)));
}

test('game manifests and README metadata are generated from the registry', () => {
  const { changed } = syncGameManifests(root, { write: false });
  assert.strictEqual(changed, false, 'Run: node scripts/sync-game-manifests.js');
});

test('every game has a valid manifest.json and a generated README block', () => {
  for (const game of loadGames(root)) {
    const gameDir = path.join(root, game.folder_path);
    const manifestPath = path.join(gameDir, 'manifest.json');
    assert.ok(fs.existsSync(manifestPath), `${game.id} needs manifest.json`);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    assert.strictEqual(manifest.id, game.id);
    assert.strictEqual(manifest.displayName, game.display_name);
    assert.strictEqual(manifest.category, game.category);
    assert.ok(Array.isArray(manifest.cefrLevels), `${game.id} cefrLevels must be an array`);
    assert.ok(Array.isArray(manifest.learningLanguages), `${game.id} learningLanguages must be an array`);
    assert.ok(Array.isArray(manifest.modes), `${game.id} modes must be an array`);
    assert.strictEqual(manifest.entry, 'index.html');
    assert.ok(fs.existsSync(path.join(gameDir, manifest.entry)), `${game.id} entry point must exist`);
    assert.ok(manifest.description, `${game.id} needs a description`);
    for (const file of manifest.dataFiles) {
      const base = file.scope === 'game' ? gameDir : root;
      assert.ok(exists(base, file.path), `${game.id} data file does not exist: ${file.path}`);
    }
    assert.ok(Array.isArray(manifest.externalDependencies), `${game.id} externalDependencies must be an array`);

    const readme = fs.readFileSync(path.join(gameDir, 'README.md'), 'utf8');
    assert.ok(readme.includes('<!-- cosy:manifest:start -->'), `${game.id} README needs the generated block`);
    assert.ok(readme.includes('**At a glance**'), `${game.id} README needs the at-a-glance table`);
    assert.ok(readme.includes('**Contract**'), `${game.id} README needs the isolation contract`);
  }
});
