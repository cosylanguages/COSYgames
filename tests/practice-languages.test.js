'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const games = JSON.parse(fs.readFileSync(path.join(root, 'games', 'index.json'), 'utf8'));
// Games whose prompts come from data/<lang>/<key>.js. Story Chain and Word Linker are left out on purpose:
// they fall back to COSYdata vocabulary when a language has no static items.
const DATA_KEY = {
  'action-hero': 'action', 'battle-of-wits': 'battle', 'critics-corner': 'critic', 'etymology-explorer': 'etymology',
  'fluency-flow': 'fluency', 'identity-mystery': 'identity', 'opinion-arena': 'opinions',
};

function browserLike() {
  const sb = {
    setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame: (f) => setTimeout(f, 0), console,
    localStorage: { getItem: () => 'en' }, navigator: {}, location: { pathname: '/' },
    document: { readyState: 'complete', addEventListener() {}, querySelectorAll: () => [], getElementById: () => null },
  };
  sb.window = sb; sb.self = sb;
  return vm.createContext(sb);
}

test('every practice language offered by any game has a real menu label that maps back to its code', () => {
  const sb = browserLike();
  vm.runInContext(fs.readFileSync(path.join(root, 'shared', 'js', 'i18n.js'), 'utf8'), sb);
  vm.runInContext(fs.readFileSync(path.join(root, '_engine', 'loader.js'), 'utf8'), sb);
  const codes = [...new Set(games.flatMap((g) => g.learning_languages))];
  const labels = sb.window.cosyLanguageLabels(codes);
  codes.forEach((code, i) => {
    assert.notStrictEqual(labels[i], code, `no label for "${code}" in langLabelMap (shared/js/i18n.js)`);
    assert.strictEqual(sb.window.COSYLoader.getLangCode(labels[i]), code, `label "${labels[i]}" must map back to "${code}"`);
  });
});

test('every language a data-driven game offers has content for that game in data/<lang>', () => {
  const sb = browserLike();
  const codes = [...new Set(games.flatMap((g) => g.learning_languages))];
  for (const l of codes) {
    for (const f of fs.readdirSync(path.join(root, 'data', l)).filter((x) => x.endsWith('.js'))) {
      vm.runInContext(fs.readFileSync(path.join(root, 'data', l, f), 'utf8'), sb);
    }
  }
  const count = (v) => (Array.isArray(v) ? v.length : v && typeof v === 'object' ? Object.values(v).reduce((n, x) => n + count(x), 0) : v ? 1 : 0);
  const empty = [];
  for (const g of games.filter((x) => DATA_KEY[x.id])) {
    for (const l of g.learning_languages) {
      const n = count(sb.gameData && sb.gameData[l] && sb.gameData[l][DATA_KEY[g.id]]);
      if (n === 0) empty.push(`${g.id}:${l}`);
    }
  }
  assert.deepStrictEqual(empty, [], 'offered language without any content');
});
