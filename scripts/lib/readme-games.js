'use strict';
// Builds the games table of README.md from games/index.json and the hub's English card descriptions.
// Format required by tests/languages.test.js (b3): | Game | What you do | Players | CEFR levels | Languages | Folder |
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const START = '<!-- cosy:readme:games -->';
const END = '<!-- /cosy:readme:games -->';
const CEFR = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function englishDescriptions(root) {
  const sb = { localStorage: { getItem: () => 'en' }, document: { readyState: 'complete', addEventListener() {} } };
  sb.window = sb;
  vm.createContext(sb);
  vm.runInContext(fs.readFileSync(path.join(root, 'shared', 'js', 'i18n.js'), 'utf8'), sb);
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const out = {};
  for (const m of html.matchAll(/<a class="gc-link" href="([^"/]+)\/index\.html[^"]*">[^<]*<\/a>[\s\S]*?<div class="gc-desc" data-i18n="([^"]+)"/g)) {
    out[m[1]] = sb.window.getI18nText(m[2], 'en');
  }
  return out;
}

function levelRange(levels) {
  const idx = levels.map((l) => CEFR.indexOf(l)).sort((a, b) => a - b);
  const contiguous = idx.every((v, i) => i === 0 || v === idx[i - 1] + 1);
  return contiguous && idx.length > 1 ? `${CEFR[idx[0]]}–${CEFR[idx[idx.length - 1]]}` : levels.join(', ');
}

const cell = (s) => String(s).replace(/\|/g, '/').replace(/\s+/g, ' ').trim();

function table(root) {
  const games = JSON.parse(fs.readFileSync(path.join(root, 'games', 'index.json'), 'utf8'));
  const desc = englishDescriptions(root);
  const rows = games.map((g) => {
    const players = g.mode.includes('solo') && g.mode.includes('group') ? 'Solo or group' : g.mode.includes('group') ? 'Group' : 'Solo';
    if (!desc[g.id]) throw new Error(`No hub card description found for ${g.id}`);
    return `| [${cell(g.display_name)}](${g.folder_path}) | ${cell(desc[g.id])} | ${players} | ${levelRange(g.cefr_levels)} | ${g.learning_languages.map((c) => c.toUpperCase()).join(', ')} | \`${g.folder_path}\` |`;
  });
  return ['| Game | What you do | Players | CEFR levels | Languages | Folder |', '| :--- | :--- | :--- | :--- | :--- | :--- |', ...rows].join('\n');
}

// Returns { updated, changed }; writes only if opts.write.
function syncReadme(root, opts = {}) {
  const file = path.join(root, 'README.md');
  const text = fs.readFileSync(file, 'utf8');
  const a = text.indexOf(START); const b = text.indexOf(END);
  if (a === -1 || b === -1 || b < a) throw new Error(`README.md needs ${START} ... ${END} markers`);
  const updated = text.slice(0, a + START.length) + '\n' + table(root) + '\n' + text.slice(b);
  if (opts.write && updated !== text) fs.writeFileSync(file, updated);
  return { updated, changed: updated !== text };
}

module.exports = { syncReadme, table, levelRange };
