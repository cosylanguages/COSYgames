'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.join(__dirname, '..');
const chromeDir = path.join(repoRoot, 'shared', 'chrome');
const tpl = (n) => fs.readFileSync(path.join(chromeDir, n + '.tpl'), 'utf8');
const LANGS = ['en', 'fr', 'es', 'de', 'it', 'ru', 'el'];

function loadI18n() {
  const sb = { localStorage: { getItem: () => 'en' }, document: { readyState: 'complete', addEventListener() {} } };
  sb.window = sb;
  vm.createContext(sb);
  vm.runInContext(fs.readFileSync(path.join(repoRoot, 'shared', 'js', 'i18n.js'), 'utf8'), sb);
  return sb.window;
}

// Which COSY site does each link point to, in document order? ({{root}}index.html is the games hub.)
function linkedSites(html) {
  return [...html.matchAll(/href="\{\{(?:site\.(\w+)\}\}|root\}\}index\.html)/g)].map((m) => m[1] || 'games');
}
const onlyClass = (html, cls) => html.split('\n').filter((l) => l.includes(cls)).join('\n');

test('every data-i18n key used in shared/chrome templates exists in all 7 languages', () => {
  const w = loadI18n();
  const keys = new Set();
  for (const f of fs.readdirSync(chromeDir).filter((n) => n.endsWith('.tpl'))) {
    for (const m of fs.readFileSync(path.join(chromeDir, f), 'utf8').matchAll(/data-i18n="([^"]+)"/g)) keys.add(m[1]);
  }
  assert.ok(keys.size >= 14, 'expected the nav/footer to use translation keys');
  const missing = [];
  for (const k of keys) for (const l of LANGS) if (!w.hasI18n(k, l)) missing.push(`${l}:${k}`);
  assert.deepStrictEqual(missing, []);
});

test('translated labels differ from English where the language is not English (no copy-pasted fallbacks)', () => {
  const w = loadI18n();
  for (const k of ['nav_all_games', 'nav_data', 'nav_tools', 'nav_events', 'footer_games_hub', 'footer_tagline', 'footer_rights']) {
    for (const l of LANGS.filter((x) => x !== 'en')) {
      assert.notStrictEqual(w.getI18nText(k, l), w.getI18nText(k, 'en'), `${l}:${k} is still the English text`);
    }
  }
});

test('game nav and hub ecosystem bar link the same sites in the same order', () => {
  const nav = linkedSites(onlyClass(tpl('nav-game'), 'cg-nav-eco'));
  const strip = linkedSites(tpl('ecosystem-strip-hub'));
  assert.deepStrictEqual(nav, ['languages', 'games', 'data', 'tools', 'events']);
  assert.deepStrictEqual(strip, nav);
});

test('footers also link every ecosystem site', () => {
  const all = ['languages', 'data', 'tools', 'events'];
  const gameFooter = new Set(linkedSites(tpl('footer-game')));
  const hubFooter = new Set(linkedSites(tpl('footer-hub')));
  for (const s of [...all, 'games']) assert.ok(gameFooter.has(s), `footer-game must link ${s}`);
  for (const s of all) assert.ok(hubFooter.has(s), `footer-hub must link ${s}`);
});

test('ecosystem links are hidden by a dedicated class on narrow screens', () => {
  const css = fs.readFileSync(path.join(repoRoot, 'shared', 'css', 'nav.css'), 'utf8');
  assert.match(css, /@media \(max-width: 860px\)\s*\{\s*\.cg-nav-eco\s*\{\s*display:\s*none/);
});
