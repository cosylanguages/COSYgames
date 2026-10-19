'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const core = require('../shared/js/hub-core.js');

const root = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const taxonomy = JSON.parse(read('data/game-taxonomy.json'));
const labels = JSON.parse(read('data/game-taxonomy-labels.json'));
const LANGS = ['fr', 'es', 'de', 'it', 'ru', 'el'];

const KINDS = { categories: 'categories', cefrLevels: 'cefrLevels', audiences: 'audiences', playModes: 'playModes', playFormats: 'playFormats' };
const subcategories = () => [...new Set(taxonomy.categories.flatMap((c) => c.subcategories))];

test('every taxonomy item has a non-empty label in all 6 languages, and nothing is left over', () => {
  assert.deepEqual(labels.languages, LANGS);
  for (const kind of Object.keys(KINDS)) {
    assert.deepEqual(Object.keys(labels[kind]).sort(), taxonomy[kind].map((x) => x.id).sort(), `${kind}: ids must match the taxonomy`);
  }
  assert.deepEqual(Object.keys(labels.subcategories).sort(), subcategories().sort(), 'subcategories must match the taxonomy labels');
  for (const kind of [...Object.keys(KINDS), 'subcategories']) {
    for (const [key, entry] of Object.entries(labels[kind])) {
      for (const l of LANGS) {
        assert.ok(typeof entry[l] === 'string' && entry[l].trim() === entry[l] && entry[l].length > 0, `${kind}/${key}/${l} missing or has stray spaces`);
        assert.ok(!entry[l].includes("'"), `${kind}/${key}/${l}: use the typographic apostrophe ’`);
      }
    }
  }
});

test('translations are real: at least 70% of labels differ from English in every language', () => {
  const pairs = [];
  for (const kind of Object.keys(KINDS)) for (const x of taxonomy[kind]) pairs.push([labels[kind][x.id], x.label]);
  for (const s of subcategories()) pairs.push([labels.subcategories[s], s]);
  for (const l of LANGS) {
    const differing = pairs.filter(([entry, en]) => entry[l] !== en).length;
    assert.ok(differing / pairs.length >= 0.7, `${l}: only ${differing}/${pairs.length} labels differ from English`);
  }
});

test('taxonomyLabel returns the interface-language label and falls back to English', () => {
  assert.equal(core.taxonomyLabel(labels, 'playFormats', 'online', 'fr', 'Online'), 'En ligne');
  assert.equal(core.taxonomyLabel(labels, 'playFormats', 'online', 'FR-ca', 'Online'), 'En ligne');
  assert.equal(core.taxonomyLabel(labels, 'playFormats', 'online', 'en', 'Online'), 'Online');
  assert.equal(core.taxonomyLabel(labels, 'categories', 'does-not-exist', 'fr', 'Fallback'), 'Fallback');
  assert.equal(core.taxonomyLabel(null, 'categories', 'everyday-life', 'fr', 'Everyday Life'), 'Everyday Life');
  assert.equal(core.taxonomyLabel(labels, 'subcategories', 'Would you rather?', 'it', 'x'), 'Cosa preferiresti?');
});

function i18n() {
  const sb = { localStorage: { getItem: () => 'en' }, document: { readyState: 'complete', addEventListener() {}, querySelectorAll: () => [], getElementById: () => null } };
  sb.window = sb;
  vm.createContext(sb);
  vm.runInContext(read('shared/js/i18n.js'), sb);
  return sb.window;
}

test('the hub filter text uses translation keys that exist in all 7 languages and differ from English', () => {
  const html = read('index.html');
  const keys = [
    ...[...html.matchAll(/<label class="fl"[^>]*data-i18n="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/<option value="all" data-i18n="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/<p [^>]*id="(?:level-filter-note|taxonomy-load-error|taxonomy-empty-state)"[^>]*data-i18n="([^"]+)"/g)].map((m) => m[1]),
  ];
  assert.equal(keys.length, 15, 'six labels, six "all" options, three messages');
  const w = i18n();
  for (const k of keys) for (const l of ['en', ...LANGS]) {
    assert.ok(w.hasI18n(k, l), `${l}:${k} missing`);
    if (l !== 'en') assert.notEqual(w.getI18nText(k, l), w.getI18nText(k, 'en'), `${l}:${k} is still English`);
  }
});

test('game counters use the plural form each language needs', () => {
  const w = i18n();
  const t = (n, l) => w.cosyCountText('games', n, l);
  assert.deepEqual([0, 1, 2, 5].map((n) => t(n, 'en')), ['0 games', '1 game', '2 games', '5 games']);
  assert.deepEqual([0, 1, 2].map((n) => t(n, 'fr')), ['0 jeu', '1 jeu', '2 jeux']);
  assert.deepEqual([1, 2, 4, 5, 11, 21, 22, 25].map((n) => t(n, 'ru')), ['1 игра', '2 игры', '4 игры', '5 игр', '11 игр', '21 игра', '22 игры', '25 игр']);
  assert.equal(t(3, 'xx'), '3 games', 'unknown language falls back to English');
});

test('the taxonomy script cannot start a translation feedback loop', () => {
  const src = read('shared/js/game-taxonomy.js');
  // i18n.js re-applies translations when a node with data-i18n is added and then fires cosy:languagechange; the filters must neither
  // add such nodes while relabelling nor react to a language event when the language did not change.
  assert.ok(!/setAttribute\('data-i18n'/.test(src), 'do not create data-i18n nodes in game-taxonomy.js');
  assert.ok(!/replaceChildren/.test(src), 'keep the existing "All subtopics" option instead of replacing the children');
  assert.ok(src.includes('lastLang'), 'relabel must ignore events that do not change the language');
  assert.ok(read('shared/js/i18n.js').includes("'cosy:languagechange'"), 'i18n.js announces language changes');
});
