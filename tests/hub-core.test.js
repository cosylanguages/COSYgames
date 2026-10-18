'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const core = require('../shared/js/hub-core.js');

const root = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const games = JSON.parse(read('games/index.json'));
const taxonomy = JSON.parse(read('data/game-taxonomy.json'));
const html = read('index.html');
const LEGACY_MAP = JSON.parse(read('tests/fixtures/hub-legacy-game-path-map.json')); // the alias map the hub used to hard-code

// ---- Frozen copies of the behaviour before the refactor (do not "improve" these: they are the reference) ----
function legacyMatches(card, st) {
  const pAttr = (card.players || '').split(/\s+/);
  const categories = (card.categories || '').split(/\s+/).filter(Boolean);
  const subcategories = JSON.parse(card.subcategories || '[]');
  const modes = (card.modes || '').split(/\s+/).filter(Boolean);
  const formats = (card.formats || '').split(/\s+/).filter(Boolean);
  const levels = (card.levels || '').split(/\s+/).filter(Boolean);
  const audiences = (card.audiences || '').split(/\s+/).filter(Boolean);
  return (st.players === 'all' || pAttr.includes(st.players)) &&
    (st.skill === 'all' || (card.skill || '') === st.skill) &&
    (st.category === 'all' || categories.includes(st.category)) &&
    (st.subcategory === 'all' || subcategories.includes(st.subcategory)) &&
    (st.level === 'all' || levels.includes(st.level)) &&
    (st.audience === 'all' || audiences.includes(st.audience)) &&
    (st.mode === 'all' || modes.includes(st.mode)) &&
    (st.format === 'all' || formats.includes(st.format));
}
function legacyQuery(search, rememberedLang) {
  const params = new URLSearchParams(search);
  const pass = new URLSearchParams();
  const topicVal = params.get('topic') || params.get('theme') || params.get('deck');
  if (topicVal) pass.set('topic', topicVal);
  ['lang', 'level', 'teacher'].forEach((key) => {
    if (params.has(key)) pass.set(key, params.get(key));
    else if (key === 'lang' && rememberedLang) pass.set('lang', rememberedLang);
  });
  return pass.toString();
}

// Real cards: static attributes from index.html + taxonomy attributes, as the page assembles them at runtime.
function realCards() {
  const byId = new Map(taxonomy.games.map((g) => [g.id, g]));
  const cards = [];
  for (const m of html.matchAll(/<div class="gc [^"]*"([^>]*)>[\s\S]*?<a class="gc-link" href="([^"]+)\/index\.html">/g)) {
    const players = (m[1].match(/data-players="([^"]*)"/) || [])[1];
    const skill = (m[1].match(/data-skill="([^"]*)"/) || [])[1];
    const attrs = core.taxonomyCardAttributes(byId.get(m[2]));
    cards.push({ id: m[2], players, skill, ...attrs });
  }
  return cards;
}

test('hub has the 20 real cards and each maps to a game in games/index.json', () => {
  const cards = realCards();
  assert.equal(cards.length, 20);
  const ids = new Set(games.map((g) => g.id));
  for (const c of cards) assert.ok(ids.has(c.id), c.id);
});

test('taxonomyCardAttributes reproduces the attributes the page used to assign by hand', () => {
  const g = taxonomy.games[0];
  const a = core.taxonomyCardAttributes(g);
  assert.equal(a.gameId, g.id);
  assert.equal(a.categories, g.categories.join(' '));
  assert.equal(a.levels, g.levels.join(' '));
  assert.equal(a.subcategories, JSON.stringify(Array.from(new Set(Object.values(g.subcategoryMappings || {}).flat()))));
});

test('filtering: new cardMatches equals the pre-refactor logic on every single filter and 4000 random combinations', () => {
  const cards = realCards();
  const subs = [...new Set(taxonomy.games.flatMap((g) => Object.values(g.subcategoryMappings || {}).flat()))];
  const dims = {
    players: ['all', 'solo', 'group'],
    skill: ['all', 'speaking', 'mystery', 'vocab'],
    category: ['all', ...taxonomy.categories.map((x) => x.id)],
    subcategory: ['all', ...subs],
    level: ['all', ...taxonomy.cefrLevels.map((x) => x.id)],
    audience: ['all', ...taxonomy.audiences.map((x) => x.id)],
    mode: ['all', ...taxonomy.playModes.map((x) => x.id)],
    format: ['all', ...taxonomy.playFormats.map((x) => x.id)],
  };
  const base = Object.fromEntries(Object.keys(dims).map((k) => [k, 'all']));
  const selections = [];
  for (const [k, values] of Object.entries(dims)) for (const v of values) selections.push({ ...base, [k]: v });
  let seed = 12345;
  const rnd = (n) => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed % n; };
  for (let i = 0; i < 4000; i++) {
    const s = { ...base };
    for (const [k, values] of Object.entries(dims)) if (rnd(3) === 0) s[k] = values[rnd(values.length)];
    selections.push(s);
  }
  let shown = 0;
  for (const sel of selections) {
    for (const card of cards) {
      const expected = legacyMatches(card, sel);
      const actual = core.cardMatches(core.cardFromAttributes({ ...card, subcategories: card.subcategories }), sel);
      assert.equal(actual, expected, `${card.id} with ${JSON.stringify(sel)}`);
      if (expected) shown++;
    }
  }
  assert.ok(shown > 1000, 'the comparison must include plenty of visible cards, not only empty results');
});

test('filtering edge cases: missing selection means all; unknown value hides everything; broken subcategory JSON does not throw', () => {
  const card = core.cardFromAttributes({ players: 'solo', skill: 'vocab', levels: 'A1 A2', subcategories: '[]' });
  assert.equal(core.cardMatches(card, {}), true);
  assert.equal(core.cardMatches(card, { level: 'A1' }), true);
  assert.equal(core.cardMatches(card, { level: 'C2' }), false);
  assert.equal(core.cardMatches(card, { players: 'group' }), false);
  assert.doesNotThrow(() => core.cardFromAttributes({ subcategories: '{not json' }));
});

test('deep links: every key the old hard-coded map accepted resolves to the same page', () => {
  assert.equal(Object.keys(LEGACY_MAP).length, 60);
  for (const [key, expected] of Object.entries(LEGACY_MAP)) assert.equal(core.resolveGamePath(games, key), expected, key);
});

test('deep links: normalization and safety', () => {
  assert.equal(core.resolveGamePath(games, '  Fluency_Flow '), 'fluency-flow/index.html');
  assert.equal(core.resolveGamePath(games, 'storytelling'), 'story-weaver/index.html');
  for (const bad of ['', null, undefined, 'nope', '../index', 'fluency-flow/../x', 'http://evil.example/', 'fluency-flow/index.html']) {
    assert.equal(core.resolveGamePath(games, bad), null, String(bad));
  }
});

test('games/index.json aliases are unique, lower-case kebab-case and never shadow a game id', () => {
  const ids = new Set(games.map((g) => g.id));
  const seen = new Map();
  for (const g of games) for (const a of g.aliases || []) {
    assert.match(a, /^[a-z0-9]+(-[a-z0-9]+)*$/, a);
    assert.ok(!ids.has(a), `alias "${a}" is also a game id`);
    assert.ok(!seen.has(a), `alias "${a}" used by ${seen.get(a)} and ${g.id}`);
    seen.set(a, g.id);
  }
  assert.ok(seen.size >= 20);
});

test('link parameters: new buildGameQuery equals the pre-refactor logic', () => {
  const searches = ['', '?lang=fr', '?lang=fr&level=A2&teacher=1', '?topic=food', '?theme=travel&level=B1', '?deck=civic&lang=ru',
    '?topic=a&theme=b', '?level=C1&foo=bar', '?lang=', '?teacher=&lang=el', '?lang=de&lang=it'];
  for (const s of searches) for (const remembered of [null, 'es']) {
    assert.equal(core.buildGameQuery(s, remembered), legacyQuery(s, remembered), `${s} / ${remembered}`);
  }
  assert.equal(core.appendQuery('fluency-flow/index.html', 'lang=fr'), 'fluency-flow/index.html?lang=fr');
  assert.equal(core.appendQuery('x.html?a=1', 'lang=fr'), 'x.html?a=1&lang=fr');
  assert.equal(core.appendQuery('x.html', ''), 'x.html');
});

test('hub page loads the pure core before the wiring, and no longer hard-codes a game map', () => {
  const core_i = html.indexOf('shared/js/hub-core.js');
  const hub_i = html.indexOf('shared/js/hub.js');
  const tax_i = html.indexOf('shared/js/game-taxonomy.js');
  assert.ok(core_i > 0 && core_i < hub_i && hub_i < tax_i, 'order: hub-core.js, hub.js, game-taxonomy.js');
  assert.ok(!html.includes('GAME_PATH_MAP'), 'alias map must live in games/index.json');
});
