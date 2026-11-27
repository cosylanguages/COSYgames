'use strict';
// Keeps every absolute link to a COSY site consistent with site.config.json.
//  - rewrites URLs that start with a site's `legacy` base to its current `base`
//  - reports URLs on *.github.io/COSY* that match no configured base ("unknown")
const fs = require('fs');
const path = require('path');

const SCAN_EXT = new Set(['.html', '.xml', '.txt', '.js']);
const SKIP_DIRS = new Set(['.git', 'node_modules', 'tests', 'docs', '.github']);
const END = '(?![A-Za-z0-9_-])'; // so ".../COSYlanguages" never matches ".../COSYlanguagesss"
const ANY_COSY_URL = /https?:\/\/[a-z0-9.-]+\.github\.io\/COSY[A-Za-z0-9_-]*/g;

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function loadConfig(root) {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'site.config.json'), 'utf8'));
  const sites = Object.entries(cfg.sites || {});
  if (!sites.length) throw new Error('site.config.json has no sites');
  for (const [key, s] of sites) {
    if (!/^https?:\/\/[^\s/]+(\/[^\s]*)?$/.test(s.base) || s.base.endsWith('/')) {
      throw new Error(`site "${key}": base must be an absolute URL without trailing slash (got ${s.base})`);
    }
  }
  return cfg;
}

function* walk(dir, root = dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) yield* walk(p, root); }
    else if (SCAN_EXT.has(path.extname(e.name)) || (dir === root && e.name === 'README.md')) yield p;
  }
}

// Returns { changes: [{file, count}], unknown: [{file, url}] }; writes only if opts.write.
function sync(root, opts = {}) {
  const cfg = loadConfig(root);
  const bases = new Set(Object.values(cfg.sites).map((s) => s.base));
  const rewrites = [];
  for (const s of Object.values(cfg.sites)) {
    for (const old of s.legacy || []) {
      if (old !== s.base) rewrites.push({ re: new RegExp(esc(old) + END, 'g'), to: s.base });
    }
  }
  const changes = []; const unknown = [];
  for (const file of walk(root)) {
    const rel = path.relative(root, file);
    let text = fs.readFileSync(file, 'utf8');
    let count = 0;
    for (const r of rewrites) text = text.replace(r.re, () => { count++; return r.to; });
    if (count) {
      changes.push({ file: rel, count });
      if (opts.write) fs.writeFileSync(file, text);
    }
    for (const m of text.match(ANY_COSY_URL) || []) {
      if (!bases.has(m)) unknown.push({ file: rel, url: m });
    }
  }
  return { changes, unknown, config: cfg };
}

module.exports = { sync, loadConfig };
