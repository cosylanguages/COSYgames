'use strict';
// Shared readers for the game registry, inventory, taxonomy and UI strings.
// Used by the hub-card generator and the per-game manifest/README generator.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SECTIONS = [
  { category: 'Speaking & Fluency', id: 'grid-speaking', icon: 'icon-speech', titleKey: 'section_speaking', skill: 'speaking', cardClass: 'gc-teal' },
  { category: 'Mystery & Guesses', id: 'grid-mystery', icon: 'icon-search', titleKey: 'section_mystery', skill: 'mystery', cardClass: 'gc-gold' },
  { category: 'Vocab & Puzzles', id: 'grid-vocab', icon: 'icon-puzzle', titleKey: 'section_vocab', skill: 'vocab', cardClass: 'gc-plum' },
];

const readJson = (root, relative) => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));
const loadGames = (root) => readJson(root, 'games/index.json');
const loadInventory = (root) => readJson(root, 'GAMES_INVENTORY.json');
const loadTaxonomy = (root) => readJson(root, 'data/game-taxonomy.json');

function loadI18n(root) {
  const sandbox = {
    localStorage: { getItem: () => 'en' },
    document: { readyState: 'complete', addEventListener() {}, body: null },
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(root, 'shared/js/i18n.js'), 'utf8'), sandbox);
  return sandbox.window;
}

function sectionFor(category) {
  const section = SECTIONS.find((item) => item.category === category);
  if (!section) throw new Error(`Unknown game category "${category}". Add it to SECTIONS in scripts/lib/game-content.js.`);
  return section;
}

function tagFor(game) {
  const modes = game.mode || [];
  const solo = modes.includes('solo');
  const group = modes.includes('group');
  if (solo && group) return { cls: 'combo', key: 'tag_solo_group', text: 'Solo or Group' };
  if (group) return { cls: 'multi', key: 'tag_group', text: 'Group' };
  return { cls: 'solo', key: 'tag_solo', text: 'Solo' };
}

function descriptionFor(i18n, game) {
  if (!game.description_key) throw new Error(`${game.id}: missing description_key in games/index.json`);
  if (!i18n.hasI18n(game.description_key, 'en')) {
    throw new Error(`${game.id}: description_key "${game.description_key}" is missing from shared/js/i18n.js`);
  }
  return i18n.getI18nText(game.description_key, 'en');
}

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const escapeAttr = (value) => escapeHtml(value).replace(/"/g, '&quot;');

module.exports = {
  SECTIONS,
  loadGames,
  loadInventory,
  loadTaxonomy,
  loadI18n,
  sectionFor,
  tagFor,
  descriptionFor,
  escapeHtml,
  escapeAttr,
};
