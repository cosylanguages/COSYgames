'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { sync, loadConfig } = require('../scripts/lib/site-urls');

const repoRoot = path.join(__dirname, '..');

function fixture(config, files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'siteurls-'));
  fs.writeFileSync(path.join(dir, 'site.config.json'), JSON.stringify(config));
  for (const [name, body] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    fs.writeFileSync(path.join(dir, name), body);
  }
  return dir;
}

test('repository URLs all match site.config.json (no legacy or unknown COSY URLs)', () => {
  const { changes, unknown } = sync(repoRoot);
  assert.deepStrictEqual(changes, [], 'Run: node scripts/sync-site-urls.js');
  assert.deepStrictEqual(unknown, [], 'Unknown COSY URLs found; add the site to site.config.json');
});

test('site.config.json bases are absolute URLs without trailing slash', () => {
  const cfg = loadConfig(repoRoot);
  for (const [key, s] of Object.entries(cfg.sites)) {
    assert.match(s.base, /^https:\/\//, `${key} must be https`);
    assert.ok(!s.base.endsWith('/'), `${key} must not end with /`);
  }
});

test('legacy bases are rewritten to the new base, including sitemap and robots', () => {
  const old = 'https://cosylanguages.github.io/COSYgames';
  const dir = fixture(
    { sites: { games: { base: 'https://new.github.io/COSYgames2', legacy: [old] } } },
    {
      'index.html': `<link rel="canonical" href="${old}/">`,
      'a/index.html': `<meta property="og:url" content="${old}/a/"><a href="${old}/b/">b</a>`,
      'sitemap.xml': `<loc>${old}/</loc>`,
      'robots.txt': `Sitemap: ${old}/sitemap.xml`,
    }
  );
  const dry = sync(dir);
  assert.strictEqual(dry.changes.reduce((n, c) => n + c.count, 0), 5);
  assert.ok(fs.readFileSync(path.join(dir, 'index.html'), 'utf8').includes(old), 'dry run must not write');
  sync(dir, { write: true });
  for (const f of ['index.html', 'a/index.html', 'sitemap.xml', 'robots.txt']) {
    const t = fs.readFileSync(path.join(dir, f), 'utf8');
    assert.ok(!t.includes(old) && t.includes('https://new.github.io/COSYgames2'), f);
  }
  assert.deepStrictEqual(sync(dir).changes, [], 'second run is a no-op');
});

test('a base that is a prefix of another repo name is not touched and the other is reported unknown', () => {
  const dir = fixture(
    { sites: { languages: { base: 'https://x.github.io/COSYlanguages', legacy: [] } } },
    { 'index.html': '<a href="https://x.github.io/COSYlanguagesss/">typo</a><a href="https://x.github.io/COSYlanguages/">ok</a>' }
  );
  const { unknown } = sync(dir);
  assert.deepStrictEqual(unknown.map((u) => u.url), ['https://x.github.io/COSYlanguagesss']);
});

test('tests, docs and .github folders are not scanned or rewritten', () => {
  const old = 'https://o.github.io/COSYgames';
  const dir = fixture(
    { sites: { games: { base: 'https://n.github.io/COSYgames', legacy: [old] } } },
    { 'tests/t.js': old, 'docs/x.html': old, 'page.html': old }
  );
  assert.deepStrictEqual(sync(dir).changes.map((c) => c.file), ['page.html']);
});

test('the root README.md is scanned too (its public links follow the config)', () => {
  const old = 'https://o.github.io/COSYgames';
  const dir = fixture(
    { sites: { games: { base: 'https://n.github.io/COSYgames', legacy: [old] } } },
    { 'README.md': `[Live](${old}/)`, 'docs/NOTES.md': old, 'sub/README.md': old }
  );
  assert.deepStrictEqual(sync(dir).changes.map((c) => c.file), ['README.md']);
});
