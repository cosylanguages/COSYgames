'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const os = require('os');
const { spawnSync } = require('child_process');

const root = path.join(__dirname, '..');
const SKIP = new Set(['.git', 'node_modules', 'tests', 'docs']);

function* jsFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { if (!SKIP.has(entry.name)) yield* jsFiles(full); }
    else if (entry.name.endsWith('.js')) yield full;
  }
}

test('every browser JavaScript file in the repository parses (a typo in a game must fail CI, not the player)', () => {
  const broken = [];
  let count = 0;
  for (const file of jsFiles(root)) {
    const source = fs.readFileSync(file, 'utf8');
    // scripts/ are Node CommonJS (may start with a shebang); browser files are classic scripts, except ES modules
    const code = source.replace(/^#!.*\n/, '\n');
    const rel = path.relative(root, file);
    if (/^\s*(export|import)\s/m.test(code)) {
      const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'esm-')), 'module.mjs');
      fs.writeFileSync(tmp, code);
      const result = spawnSync(process.execPath, ['--check', tmp], { encoding: 'utf8' });
      if (result.status === 0) count++; else broken.push(`${rel}: ${result.stderr.split('\n').find((l) => /Error/.test(l)) || 'module does not parse'}`);
      continue;
    }
    try { new vm.Script(code, { filename: rel }); count++; }
    catch (e) { broken.push(`${rel}: ${e.message}`); }
  }
  assert.deepEqual(broken, []);
  assert.ok(count > 150, `expected to check the whole repo, checked ${count}`);
});
