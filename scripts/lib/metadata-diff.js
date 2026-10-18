'use strict';
// Compares the three game-metadata sources and reports where they differ.
//   games/index.json         -> hub/runtime facts (menu languages, selectable levels, play mode)
//   GAMES_INVENTORY.json     -> which language data files / external deps each game has
//   data/game-taxonomy.json  -> discovery taxonomy (topics, content-tagged levels, formats)
// See docs/GAME_METADATA.md for what each field means.
const fs = require('fs');
const path = require('path');

const REDIRECT_STUBS = ['storytelling']; // folders that only redirect to another game

const read = (root, p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const sorted = (a) => [...(a || [])].sort();
const same = (a, b) => JSON.stringify(sorted(a)) === JSON.stringify(sorted(b));

function load(root) {
  const index = new Map(read(root, 'games/index.json').map((g) => [g.id, g]));
  const inventory = new Map(read(root, 'GAMES_INVENTORY.json').map((g) => [g.game, g]));
  const taxonomy = new Map(read(root, 'data/game-taxonomy.json').games.map((g) => [g.id, g]));
  return { index, inventory, taxonomy };
}

function gameFolders(root) {
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(root, d.name, 'index.html')))
    .map((d) => d.name)
    .filter((n) => !REDIRECT_STUBS.includes(n));
}

// Hard invariants: these must always hold.
function structuralProblems(root) {
  const { index, inventory, taxonomy } = load(root);
  const ids = [...index.keys()].sort();
  const problems = [];
  const check = (label, set) => {
    const other = [...set].sort();
    for (const id of ids) if (!set.has(id)) problems.push(`${id} missing from ${label}`);
    for (const id of other) if (!index.has(id)) problems.push(`${id} is in ${label} but not in games/index.json`);
  };
  check('GAMES_INVENTORY.json', new Set(inventory.keys()));
  check('data/game-taxonomy.json', new Set(taxonomy.keys()));
  const folders = new Set(gameFolders(root));
  for (const id of ids) if (!folders.has(id)) problems.push(`${id} has no folder with index.html`);
  for (const f of folders) if (!index.has(f)) problems.push(`folder ${f}/ is not listed in games/index.json`);
  for (const f of REDIRECT_STUBS) {
    const p = path.join(root, f, 'index.html');
    if (fs.existsSync(p) && !/http-equiv="refresh"/.test(fs.readFileSync(p, 'utf8'))) {
      problems.push(`${f}/ is declared a redirect stub but has no meta refresh`);
    }
  }
  return problems;
}

// Soft differences: legitimate today, but tracked so new drift is noticed.
function computeDifferences(root) {
  const { index, inventory, taxonomy } = load(root);
  const out = { modes: {}, languages: {}, levels: {} };
  for (const id of [...index.keys()].sort()) {
    const ix = index.get(id); const inv = inventory.get(id); const tx = taxonomy.get(id);
    if (tx) {
      const txGroup = (tx.modes || []).some((m) => m !== 'solo');
      const txSolo = (tx.modes || []).includes('solo');
      const ixGroup = (ix.mode || []).includes('group');
      const ixSolo = (ix.mode || []).includes('solo');
      if (txGroup !== ixGroup || txSolo !== ixSolo) out.modes[id] = { index: sorted(ix.mode), taxonomy: sorted(tx.modes) };
      if (!same(ix.cefr_levels, tx.levels)) out.levels[id] = { index: sorted(ix.cefr_levels), taxonomy: sorted(tx.levels) };
    }
    if (inv && !same(ix.learning_languages, inv.languages)) {
      const a = new Set(ix.learning_languages); const b = new Set(inv.languages);
      out.languages[id] = {
        menuOnly: sorted([...a].filter((x) => !b.has(x))),
        dataOnly: sorted([...b].filter((x) => !a.has(x))),
      };
    }
  }
  return out;
}

module.exports = { computeDifferences, structuralProblems, gameFolders, REDIRECT_STUBS };
