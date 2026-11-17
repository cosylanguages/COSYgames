#!/usr/bin/env node
'use strict';
// Usage: node scripts/sync-pwa.js           inject the PWA manifest link + service-worker
//                                            registration into every page head
//        node scripts/sync-pwa.js --check   exit 1 if any page is out of date
//
// Every page gets a `<link rel="manifest">` (relative to the repo root) and a small
// service-worker registration snippet, inserted right after the charset meta tag.
// Pages that already carry the region are left alone; the region is delimited by
// `<!-- cosy:pwa:start -->` / `<!-- cosy:pwa:end -->`.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const check = process.argv.includes('--check');
const SKIP_DIRS = new Set(['.git', 'node_modules', 'tests', 'docs', '.github', 'shared', 'native']);
const START = '<!-- cosy:pwa:start -->';
const END = '<!-- cosy:pwa:end -->';
const BLOCK = new RegExp(`[ \\t]*${START}[\\s\\S]*?${END}\\n?`, 'g');

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) yield* walk(p); }
    else if (e.name.endsWith('.html')) yield p;
  }
}

function snippet(root) {
  return `${START}
    <link rel="manifest" href="${root}manifest.json">
    <script>
      if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('${root}sw.js').catch(() => {});
        });
      }
    </script>
    ${END}`;
}

const changed = [];
const missing = [];

for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file);
  const original = fs.readFileSync(file, 'utf8');
  const depth = path.relative(path.dirname(file), ROOT).split(path.sep).filter(Boolean).length;
  const root = '../'.repeat(depth);
  const had = BLOCK.test(original);
  BLOCK.lastIndex = 0;

  const cleaned = had ? original.replace(BLOCK, '') : original;
  if (!/<meta charset=/i.test(cleaned)) {
    missing.push(rel);
    continue;
  }
  const updated = cleaned.replace(/(<meta charset=[^>]*>\s*\n)/i, (m) => `${m}    ${snippet(root)}\n`);

  if (updated !== original) {
    changed.push(rel);
    if (!check) fs.writeFileSync(file, updated);
  }
}

if (missing.length) {
  for (const f of missing) console.error(`No <meta charset> in ${f}; cannot place PWA tags`);
}
if (changed.length) {
  console.log(`${check ? 'Out of date' : 'Updated'}: ${changed.join(', ')}`);
} else if (!missing.length) {
  console.log('PWA tags are up to date');
}
process.exit(missing.length || (check && changed.length) ? 1 : 0);
