'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const games = JSON.parse(fs.readFileSync(path.join(root, 'games', 'index.json'), 'utf8'));
const gameIds = new Set(games.map((g) => g.id));
const CODE_EXTENSIONS = new Set(['.html', '.js', '.css', '.json']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

// Collect every local reference that could point at another game folder.
function localReferences(file, content) {
  const refs = new Set();
  const ext = path.extname(file);
  const add = (value) => {
    const ref = String(value || '').trim();
    if (!ref || ref.startsWith('#') || ref.startsWith('data:') || ref.startsWith('javascript:') || ref.startsWith('mailto:')) return;
    if (/^(?:https?:)?\/\//i.test(ref) || ref.includes('{{')) return;
    refs.add(ref);
  };

  if (ext === '.html') {
    for (const m of content.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)) add(m[1]);
  } else if (ext === '.css') {
    for (const m of content.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) add(m[1]);
  } else if (ext === '.js' || ext === '.json') {
    for (const m of content.matchAll(/["']([^"']*(?:\.\.\/|\/)[^"']*)["']/g)) add(m[1]);
  }
  return [...refs];
}

test('each game folder owns its code and does not import another game', () => {
  const violations = [];
  for (const game of games) {
    const gameDir = path.join(root, game.folder_path);
    for (const file of walk(gameDir)) {
      if (!CODE_EXTENSIONS.has(path.extname(file))) continue;
      const content = fs.readFileSync(file, 'utf8');
      for (const ref of localReferences(file, content)) {
        const clean = ref.split(/[?#]/)[0];
        if (!clean) continue;
        const target = path.resolve(path.dirname(file), clean);
        const relative = path.relative(root, target);
        if (relative.startsWith('..')) continue;
        const topFolder = relative.split(path.sep)[0];
        if (gameIds.has(topFolder) && topFolder !== game.id) {
          violations.push(`${path.relative(root, file)} -> ${ref}`);
        }
      }
    }
  }
  assert.deepStrictEqual(violations, [], 'Games must not import code or assets from another game folder');
});

test('every registered game has its own entry page and no game is nested in another', () => {
  for (const game of games) {
    const gameDir = path.join(root, game.folder_path);
    assert.ok(fs.existsSync(path.join(gameDir, 'index.html')), `${game.id} must have its own index.html`);
    const segments = game.folder_path.replace(/\/$/, '').split('/');
    assert.strictEqual(segments.length, 1, `${game.id} must live in its own top-level folder`);
  }
});

test('legacy redirect stubs are the only pages allowed to point at another game', () => {
  const redirects = ['action-hero', 'identity-mystery', 'object-quest', 'storytelling'];
  for (const folder of redirects) {
    const file = path.join(root, folder, 'index.html');
    if (!fs.existsSync(file)) continue;
    assert.ok(!gameIds.has(folder), `${folder} must not be registered as a live game`);
  }
});
