'use strict';
// Fills the shared header/footer ("chrome") of each page from shared/chrome/<name>.tpl.
// A page opts in with a pair of marker comments around the generated region:
//
//     <!-- cosy:chrome:nav-game -->
//     ...generated, do not edit...
//     <!-- /cosy:chrome:nav-game -->
//
// A marker may carry attributes, e.g. <!-- cosy:chrome:game-topbar game="fluency-flow" -->; `game` makes the game's
// entry from games/index.json available as {{game.*}}.
//
// Placeholders in templates: {{root}} (relative path to the repo root, "../" from a game page),
// {{site.<key>}} and {{repository}} (from site.config.json), {{uiLanguageOptions}}, and for pages with a game attribute:
// {{game.id}}, {{game.display_name}}, {{game.name_param}} (URL-encoded name), {{game.category}}, {{game.category_key}},
// {{game.mode_label}}, {{game.mode_key}} and {{game.levels}}.
const fs = require('fs');
const path = require('path');
const { loadConfig } = require('./site-urls');

const SKIP_DIRS = new Set(['.git', 'node_modules', 'tests', 'docs', '.github', 'shared']);
const BLOCK = /^([ \t]*)<!-- cosy:chrome:([a-z0-9-]+)((?: [a-z]+="[^"]*")*) -->[ \t]*\n([\s\S]*?)\n\1<!-- \/cosy:chrome:\2 -->/gm;
const RAW_NAV = /<nav class="cg-nav">/;
const RAW_FOOTER = /<footer class="cg-footer">/;

const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const CATEGORY_KEYS = { 'Speaking & Fluency': 'speaking', 'Mystery & Guesses': 'mystery', 'Vocab & Puzzles': 'vocab' };

function parseAttrs(text) {
  const out = {};
  for (const m of text.matchAll(/ ([a-z]+)="([^"]*)"/g)) out[m[1]] = m[2];
  return out;
}

// The {{game.*}} values for one entry of games/index.json.
function gameContext(g) {
  const modes = [...g.mode].sort().join('_'); // group | solo | group_solo
  const modeKey = modes === 'group_solo' ? 'solo_group' : modes;
  const modeLabel = { solo_group: 'Solo or Group', group: 'Group', solo: 'Solo' }[modeKey];
  if (!CATEGORY_KEYS[g.category] || !modeLabel) throw new Error(`game ${g.id}: unknown category or mode`);
  return {
    id: g.id, display_name: g.display_name, name_param: encodeURIComponent(g.display_name).replace(/%20/g, '+'),
    category: g.category, category_key: CATEGORY_KEYS[g.category], mode_label: modeLabel, mode_key: modeKey,
    levels: g.cefr_levels[0] + '–' + g.cefr_levels[g.cefr_levels.length - 1],
  };
}

function renderTemplate(template, ctx, name) {
  const out = [];
  for (const line of template.replace(/\n$/, '').split('\n')) {
    const only = line.match(/^(\s*)\{\{uiLanguageOptions\}\}\s*$/);
    if (only) {
      for (const l of ctx.uiLanguages) {
        out.push(`${only[1]}<option value="${escAttr(l.code)}">${l.flag} ${l.label}</option>`);
      }
      continue;
    }
    out.push(line.replace(/\{\{([a-zA-Z0-9_.]+)\}\}/g, (_, key) => {
      if (key === 'root') return ctx.root;
      if (key === 'repository') return ctx.repository;
      if (key.startsWith('game.')) {
        if (!ctx.game) throw new Error(`${name}: {{${key}}} needs a game="<id>" attribute on the marker`);
        if (!(key.slice(5) in ctx.game)) throw new Error(`${name}: unknown placeholder {{${key}}}`);
        return ctx.game[key.slice(5)];
      }
      if (key.startsWith('site.')) {
        const site = ctx.sites[key.slice(5)];
        if (!site) throw new Error(`${name}: unknown site "${key.slice(5)}" in site.config.json`);
        return site.base;
      }
      throw new Error(`${name}: unknown placeholder {{${key}}}`);
    }));
  }
  return out;
}

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) yield* walk(p); }
    else if (e.name.endsWith('.html')) yield p;
  }
}

// Returns { changed: [file], unmanaged: [file], errors: [msg] }; writes only if opts.write.
function syncChrome(root, opts = {}) {
  const cfg = loadConfig(root);
  const base = { sites: cfg.sites, repository: cfg.repository, uiLanguages: (cfg.chrome && cfg.chrome.uiLanguages) || [] };
  const custom = new Set((cfg.chrome && cfg.chrome.customPages) || []);
  let gamesCache = null;
  const games = () => gamesCache || (gamesCache = JSON.parse(fs.readFileSync(path.join(root, 'games', 'index.json'), 'utf8')));
  const changed = []; const unmanaged = []; const errors = [];
  const templates = {};
  for (const file of walk(root)) {
    const rel = path.relative(root, file);
    const original = fs.readFileSync(file, 'utf8');
    const rootPrefix = path.relative(path.dirname(file), root).split(path.sep).filter(Boolean).map(() => '..').join('/');
    const ctx = { ...base, root: rootPrefix ? rootPrefix + '/' : '' };
    const managed = new Set();
    const updated = original.replace(BLOCK, (whole, indent, name, attrText) => {
      managed.add(name);
      try {
        if (!(name in templates)) {
          templates[name] = fs.readFileSync(path.join(root, 'shared', 'chrome', name + '.tpl'), 'utf8');
        }
        const attrs = parseAttrs(attrText);
        const blockCtx = { ...ctx };
        if (attrs.game) {
          const entry = games().find((g) => g.id === attrs.game);
          if (!entry) throw new Error(`unknown game "${attrs.game}" (not in games/index.json)`);
          blockCtx.game = gameContext(entry);
        }
        const lines = renderTemplate(templates[name], blockCtx, name).map((l) => (l.trim() ? indent + l : l));
        return `${indent}<!-- cosy:chrome:${name}${attrText} -->\n${lines.join('\n')}\n${indent}<!-- /cosy:chrome:${name} -->`;
      } catch (e) {
        errors.push(`${rel}: ${e.message}`);
        return whole;
      }
    });
    const outside = original.replace(BLOCK, '');
    const has = (prefix) => [...managed].some((n) => n.startsWith(prefix));
    if (!custom.has(rel.split(path.sep).join('/'))) {
      if (RAW_NAV.test(outside) && !has('nav-')) unmanaged.push(rel);
      else if (RAW_FOOTER.test(outside) && !has('footer-')) unmanaged.push(rel);
    }
    if (updated !== original) {
      changed.push(rel);
      if (opts.write) fs.writeFileSync(file, updated);
    }
  }
  return { changed, unmanaged, errors };
}

module.exports = { syncChrome, renderTemplate, gameContext };
