'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { syncChrome, renderTemplate } = require('../scripts/lib/site-chrome');

const repoRoot = path.join(__dirname, '..');
const CONFIG = {
  repository: 'https://github.com/o/R',
  sites: { languages: { base: 'https://x.github.io/L' }, tools: { base: 'https://x.github.io/T' } },
  chrome: { uiLanguages: [{ code: 'en', flag: 'E', label: 'EN' }, { code: 'fr', flag: 'F', label: 'FR' }], customPages: ['tool/custom.html'] },
};

function fixture(files, config = CONFIG) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-'));
  fs.writeFileSync(path.join(dir, 'site.config.json'), JSON.stringify(config));
  fs.mkdirSync(path.join(dir, 'shared', 'chrome'), { recursive: true });
  for (const [name, body] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    fs.writeFileSync(path.join(dir, name), body);
  }
  return dir;
}
const NAV_TPL = '<nav class="cg-nav">\n  <a href="{{root}}index.html">Home</a>\n  <a href="{{site.tools}}/">T</a>\n  <select>\n    {{uiLanguageOptions}}\n  </select>\n</nav>\n';
const page = (body) => `<body>\n    <!-- cosy:chrome:nav-game -->\n${body}\n    <!-- /cosy:chrome:nav-game -->\n</body>\n`;

test('repository pages are up to date with shared/chrome templates, and none has a hand-copied nav/footer', () => {
  const { changed, unmanaged, errors } = syncChrome(repoRoot);
  assert.deepStrictEqual(errors, []);
  assert.deepStrictEqual(changed, [], 'Run: node scripts/sync-site-chrome.js');
  assert.deepStrictEqual(unmanaged, [], 'Wrap the nav/footer in <!-- cosy:chrome:... --> markers or list the page in site.config.json chrome.customPages');
});

test('every page uses the same nav-game and footer-game output (single source)', () => {
  const games = fs.readdirSync(repoRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(repoRoot, d.name, 'index.html')))
    .map((d) => fs.readFileSync(path.join(repoRoot, d.name, 'index.html'), 'utf8'))
    .filter((t) => t.includes('cosy:chrome:nav-game'));
  assert.ok(games.length >= 20, 'expected the game pages to use nav-game');
  const blocks = (t, n) => t.match(new RegExp(`<!-- cosy:chrome:${n} -->[\\s\\S]*?<!-- /cosy:chrome:${n} -->`))[0];
  for (const n of ['nav-game', 'footer-game']) {
    assert.strictEqual(new Set(games.map((t) => blocks(t, n))).size, 1, `${n} must be identical on every game page`);
  }
});

test('placeholders: root, site.*, repository and language options (with indentation) are rendered', () => {
  const out = renderTemplate(NAV_TPL, { root: '../', sites: CONFIG.sites, repository: CONFIG.repository, uiLanguages: CONFIG.chrome.uiLanguages }, 'nav-game');
  assert.deepStrictEqual(out, [
    '<nav class="cg-nav">',
    '  <a href="../index.html">Home</a>',
    '  <a href="https://x.github.io/T/">T</a>',
    '  <select>',
    '    <option value="en">E EN</option>',
    '    <option value="fr">F FR</option>',
    '  </select>',
    '</nav>',
  ]);
});

test('sync rewrites a stale block, keeps marker indentation, uses the right relative root, then is a no-op', () => {
  const dir = fixture({
    'shared/chrome/nav-game.tpl': NAV_TPL,
    'game/index.html': page('<nav class="cg-nav">old</nav>'),
    'a/b/index.html': page('<nav class="cg-nav">old</nav>'),
  });
  assert.deepStrictEqual(syncChrome(dir).changed.sort(), ['a/b/index.html'.split('/').join(path.sep), 'game/index.html']);
  syncChrome(dir, { write: true });
  const g = fs.readFileSync(path.join(dir, 'game/index.html'), 'utf8');
  assert.ok(g.includes('    <nav class="cg-nav">\n      <a href="../index.html">Home</a>'), 'indented under the marker, root is ../');
  assert.ok(fs.readFileSync(path.join(dir, 'a/b/index.html'), 'utf8').includes('href="../../index.html"'), 'root is ../../');
  assert.deepStrictEqual(syncChrome(dir).changed, []);
});

test('a hand-copied nav outside markers is reported unless the page is listed as custom', () => {
  const dir = fixture({
    'shared/chrome/nav-game.tpl': NAV_TPL,
    'new-game/index.html': '<body><nav class="cg-nav">copied</nav></body>',
    'tool/custom.html': '<body><nav class="cg-nav">editor</nav></body>',
  });
  assert.deepStrictEqual(syncChrome(dir).unmanaged, ['new-game/index.html'.split('/').join(path.sep)]);
});

test('unknown placeholders and missing templates are errors, not silent output', () => {
  const dir = fixture({
    'shared/chrome/nav-game.tpl': '<nav class="cg-nav">{{site.nope}}</nav>\n',
    'p/index.html': page('x'),
    'q/index.html': '<!-- cosy:chrome:footer-x -->\nx\n<!-- /cosy:chrome:footer-x -->\n',
  });
  const { errors, changed } = syncChrome(dir, { write: true });
  assert.strictEqual(errors.length, 2);
  assert.ok(errors.some((e) => e.includes('unknown site "nope"')));
  assert.deepStrictEqual(changed, [], 'pages with errors are left untouched');
  assert.throws(() => renderTemplate('{{bogus}}', { sites: {}, uiLanguages: [], root: '' }, 'n'), /unknown placeholder/);
});
