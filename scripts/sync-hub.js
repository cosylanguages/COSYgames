#!/usr/bin/env node
'use strict';
// Usage: node scripts/sync-hub.js           regenerate the game sections in index.html
//        node scripts/sync-hub.js --check   exit 1 if index.html is out of date
//
// The static cards stay in index.html for SEO and no-JS users. This script
// keeps them in sync with games/index.json, so adding or deleting a game is a
// registry edit followed by one command.

const fs = require('fs');
const path = require('path');
const {
  SECTIONS,
  loadGames,
  loadI18n,
  sectionFor,
  tagFor,
  descriptionFor,
  escapeHtml,
  escapeAttr,
} = require('./lib/game-content');

const START = '        <!-- cosy:hub:start -->';
const END = '        <!-- /cosy:hub:end -->';

function renderCard(game, section, i18n) {
  const tag = tagFor(game);
  return [
    `          <div class="gc ${section.cardClass}" data-players="${escapeAttr((game.mode || []).join(' '))}" data-skill="${section.skill}">`,
    `            <div class="gc-top"><div class="gc-icon">${game.icon || '🎮'}</div><div class="gc-name"><a class="gc-link" href="${game.folder_path}index.html">${escapeHtml(game.display_name)}</a></div></div>`,
    `            <div class="gc-desc" data-i18n="${game.description_key}">${escapeHtml(descriptionFor(i18n, game))}</div>`,
    `            <div class="gc-foot"><div class="gc-tags"><span class="gtag ${tag.cls}" data-i18n="${tag.key}">${tag.text}</span></div><span class="gc-play" aria-hidden="true" data-i18n="btn_play">► Play</span></div>`,
    '          </div>',
  ].join('\n');
}

function renderSection(section, games, i18n) {
  const list = games.filter((game) => game.category === section.category);
  const title = i18n.getI18nText(section.titleKey, 'en');
  const count = `${list.length} game${list.length === 1 ? '' : 's'}`;
  return [
    `        <div class="sec-title fi"><span class="cosy-icon ${section.icon} sec-title-icon" aria-hidden="true"></span><span class="sec-title-text" data-i18n="${section.titleKey}">${escapeHtml(title)}</span> <span class="sec-count">${count}</span></div>`,
    `        <div class="game-grid fi" id="${section.id}">`,
    ...list.map((game) => renderCard(game, section, i18n)),
    '        </div>',
  ].join('\n');
}

function renderHub(games, i18n) {
  for (const game of games) sectionFor(game.category);
  return SECTIONS.map((section) => renderSection(section, games, i18n)).join('\n\n');
}

function syncHub(root, opts = {}) {
  const file = path.join(root, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1 || end < start) {
    throw new Error('index.html is missing the cosy:hub:start / cosy:hub:end markers');
  }
  const games = loadGames(root);
  const i18n = loadI18n(root);
  const body = renderHub(games, i18n);
  const updated = html.slice(0, start + START.length) + '\n' + body + '\n' + html.slice(end);
  const changed = updated !== html;
  if (changed && opts.write) fs.writeFileSync(file, updated);
  return { changed, file, updated };
}

if (require.main === module) {
  const root = path.join(__dirname, '..');
  const check = process.argv.includes('--check');
  try {
    const { changed, file } = syncHub(root, { write: !check });
    if (check && changed) {
      console.error('index.html game sections are out of date. Run: node scripts/sync-hub.js');
      process.exit(1);
    }
    console.log(changed ? `Updated: ${path.relative(root, file)}` : 'Hub game sections are up to date');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { syncHub, renderHub, renderSection, renderCard };
