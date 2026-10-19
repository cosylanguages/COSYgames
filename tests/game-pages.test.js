'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { syncChrome, gameContext } = require('../scripts/lib/site-chrome');

const root = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const games = JSON.parse(read('games/index.json'));
const LANGS = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];

function i18n() {
  const sb = { localStorage: { getItem: () => 'en' }, document: { readyState: 'complete', addEventListener() {}, querySelectorAll: () => [], getElementById: () => null } };
  sb.window = sb;
  vm.createContext(sb);
  vm.runInContext(read('shared/js/i18n.js'), sb);
  return sb.window;
}

test('every game page generates its top bar and scoreboard from games/index.json, and has a main landmark', () => {
  for (const g of games) {
    const html = read(`${g.id}/index.html`);
    assert.ok(html.includes(`<!-- cosy:chrome:game-topbar game="${g.id}" -->`), `${g.id}: game-topbar marker`);
    assert.ok(html.includes(`<!-- cosy:chrome:game-scoreboard game="${g.id}" -->`), `${g.id}: game-scoreboard marker`);
    assert.ok(/id="go-body"[^>]*role="main"/.test(html), `${g.id}: role="main" on the play area`);
    assert.ok(/<h1 class="go-title" id="go-title">/.test(html) && html.includes(`>${g.display_name}</h1>`), `${g.id}: title from index.json`);
  }
  assert.ok(read('index.html').includes('<div class="page" role="main">'), 'hub has a main landmark');
});

test('page generation is in sync (a stale top bar or scoreboard fails here)', () => {
  const { changed, errors, unmanaged } = syncChrome(root);
  assert.deepStrictEqual([changed, errors, unmanaged], [[], [], []]);
});

test('the game meta line is translated in all 7 languages and matches the English fallback in the page', () => {
  const w = i18n();
  for (const g of games) {
    const c = gameContext(g);
    const english = w.cosyGameMetaText(c.category_key, c.mode_key, c.levels, 'en');
    assert.equal(english, `${c.category} · ${c.mode_label} · CEFR ${c.levels}`, `${g.id}: English text`);
    assert.ok(read(`${g.id}/index.html`).includes(`>${english}</div>`), `${g.id}: page fallback text equals English`);
    for (const l of LANGS.filter((x) => x !== 'en')) {
      assert.notEqual(w.cosyGameMetaText(c.category_key, c.mode_key, c.levels, l), english, `${g.id}/${l}: still English`);
    }
  }
});

test('Report Issue opens a prefilled form that exists, and its field ids match the query', () => {
  const html = read('scene-match/index.html');
  const m = html.match(/issues\/new\?template=([\w.]+)&amp;game=([^"]+)"/);
  assert.ok(m, 'report link has template and game parameters');
  assert.equal(decodeURIComponent(m[2].replace(/\+/g, ' ')), games.find((g) => g.id === 'scene-match').display_name);
  const form = read(`.github/ISSUE_TEMPLATE/${m[1]}`);
  assert.match(form, /^\s*id: game$/m, 'the form needs a field with id "game" for the prefill to work');
  assert.ok(fs.existsSync(path.join(root, '.github/ISSUE_TEMPLATE/content_correction.yml')));
});

test('generator: game placeholders render, need a game attribute, and reject unknown games', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gp-'));
  fs.mkdirSync(path.join(dir, 'shared', 'chrome'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'games'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'site.config.json'), JSON.stringify({ repository: 'https://github.com/o/R', sites: { languages: { base: 'https://x.github.io/L' } } }));
  fs.writeFileSync(path.join(dir, 'games', 'index.json'), JSON.stringify([{ id: 'a-b', display_name: "Critic's Corner", category: 'Vocab & Puzzles', mode: ['solo', 'group'], cefr_levels: ['A1', 'B2'] }]));
  fs.writeFileSync(path.join(dir, 'shared', 'chrome', 'bar.tpl'), '<i data-k="{{game.category_key}}/{{game.mode_key}}">{{game.display_name}} {{game.levels}} {{game.name_param}}</i>\n');
  fs.mkdirSync(path.join(dir, 'a-b'));
  const page = (attr) => `<body>\n  <!-- cosy:chrome:bar${attr} -->\n  x\n  <!-- /cosy:chrome:bar -->\n</body>\n`;
  fs.writeFileSync(path.join(dir, 'a-b', 'index.html'), page(' game="a-b"'));
  assert.deepStrictEqual(syncChrome(dir, { write: true }).errors, []);
  const out = fs.readFileSync(path.join(dir, 'a-b', 'index.html'), 'utf8');
  assert.ok(out.includes(`<i data-k="vocab/solo_group">Critic's Corner A1–B2 Critic's+Corner</i>`) || out.includes('Critic%27s+Corner'), out);
  assert.ok(out.includes('<!-- cosy:chrome:bar game="a-b" -->'), 'marker attributes are preserved');
  fs.writeFileSync(path.join(dir, 'a-b', 'index.html'), page(''));
  assert.match(syncChrome(dir).errors[0], /needs a game="<id>" attribute/);
  fs.writeFileSync(path.join(dir, 'a-b', 'index.html'), page(' game="nope"'));
  assert.match(syncChrome(dir).errors[0], /unknown game "nope"/);
});
