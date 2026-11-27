#!/usr/bin/env node
'use strict';
// Usage: node scripts/sync-game-manifests.js           write manifest.json + README metadata
//        node scripts/sync-game-manifests.js --check   exit 1 if anything is out of date
//
// Each game gets a manifest.json describing its metadata and a generated
// "At a glance" block inside README.md. Existing README prose is preserved;
// only the block between the cosy:manifest markers is replaced.

const fs = require('fs');
const path = require('path');
const {
  loadGames,
  loadInventory,
  loadTaxonomy,
  loadI18n,
  tagFor,
  descriptionFor,
} = require('./lib/game-content');

const START = '<!-- cosy:manifest:start -->';
const END = '<!-- cosy:manifest:end -->';
const ALL_CEFR = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function formatLevels(levels) {
  if (!levels || levels.length === 0) return 'Not CEFR-assessed (uses difficulty modes)';
  const contiguous = levels.every((level, index) => index === 0 || ALL_CEFR.indexOf(level) === ALL_CEFR.indexOf(levels[index - 1]) + 1);
  return contiguous && levels.length > 2 ? `${levels[0]}–${levels[levels.length - 1]}` : levels.join(', ');
}

function formatModes(game) {
  return tagFor(game).text;
}

function formatLanguages(i18n, game) {
  const labels = i18n.cosyLanguageLabels(game.learning_languages || []);
  return labels.length ? labels.join(', ') : 'None listed';
}

function dataFileEntries(root, game, inventory) {
  const prefix = `${game.id}/`;
  return (inventory.dataFiles || []).map((file) => {
    const owned = file.startsWith(prefix);
    return { path: owned ? file.slice(prefix.length) : file, scope: owned ? 'game' : 'shared' };
  });
}

function renderDataList(entries) {
  if (!entries.length) return '- None listed in `GAMES_INVENTORY.json`.';
  const gameFiles = entries.filter((entry) => entry.scope === 'game').map((entry) => `\`${entry.path}\``);
  const sharedFiles = entries.filter((entry) => entry.scope === 'shared').map((entry) => `\`${entry.path}\``);
  const lines = [];
  if (gameFiles.length) lines.push(`- **Game data:** ${gameFiles.join(', ')}`);
  if (sharedFiles.length) lines.push(`- **Shared data:** ${sharedFiles.join(', ')}`);
  return lines.join('\n');
}

function renderManifestBlock(game, context) {
  const { i18n, inventory, taxonomy } = context;
  const entries = dataFileEntries(context.root, game, inventory);
  const deps = inventory.externalDeps || [];
  const discovery = taxonomy ? {
    topics: taxonomy.categories || [],
    audiences: taxonomy.audiences || [],
    formats: taxonomy.formats || [],
    levelAvailability: taxonomy.levelAvailability || 'cefr',
    contentSetCount: (taxonomy.contentSets || []).length,
  } : null;
  const depText = deps.length ? deps.map((dep) => `\`${dep}\``).join(', ') : 'None listed';
  return [
    START,
    '**At a glance**',
    '',
    '| Field | Value |',
    '| --- | --- |',
    `| Category | ${game.category} |`,
    `| Skill focus | ${game.skill_focus || 'Not listed'} |`,
    `| CEFR levels | ${formatLevels(game.cefr_levels)} |`,
    `| Learning languages | ${formatLanguages(i18n, game)} |`,
    `| Modes | ${formatModes(game)} |`,
    `| Duration | Varies by round settings; the setup screen shows the available modes. |`,
    `| Entry point | [\`index.html\`](index.html) |`,
    '',
    '**Data and dependencies**',
    '',
    renderDataList(entries),
    `- **External dependencies:** ${depText}`,
    discovery ? `- **Discovery topics:** ${discovery.topics.join(', ') || 'None listed'}` : '- **Discovery topics:** Not listed',
    '',
    '**Contract**',
    '',
    'This game does not import code or assets from another game. It may use the shared shell, the COSY turquoise brand layer, and shared COSYdata loaders.',
    'See [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) for the isolation contract and the design system.',
    '',
    `*Generated from \`games/index.json\`, \`GAMES_INVENTORY.json\`, and \`data/game-taxonomy.json\` by \`node scripts/sync-game-manifests.js\`.*`,
    END,
  ].join('\n');
}

function renderManifestJson(game, context) {
  const { inventory, taxonomy } = context;
  return {
    schemaVersion: 1,
    id: game.id,
    displayName: game.display_name,
    description: descriptionFor(context.i18n, game),
    category: game.category,
    skillFocus: game.skill_focus || null,
    cefrLevels: game.cefr_levels,
    learningLanguages: game.learning_languages,
    modes: game.mode,
    aliases: game.aliases || [],
    entry: 'index.html',
    duration: 'varies-by-round-settings',
    dataFiles: dataFileEntries(context.root, game, inventory),
    externalDependencies: inventory.externalDeps || [],
    discovery: taxonomy ? {
      topics: taxonomy.categories || [],
      audiences: taxonomy.audiences || [],
      formats: taxonomy.formats || [],
      levelAvailability: taxonomy.levelAvailability || 'cefr',
      contentSetCount: (taxonomy.contentSets || []).length,
    } : null,
    generatedBy: 'scripts/sync-game-manifests.js',
  };
}

const normalizeBlankLines = (text) => text.replace(/\n{3,}/g, '\n\n');

function applyReadmeBlock(existing, block) {
  const start = existing.indexOf(START);
  const end = existing.indexOf(END);
  if (start !== -1 && end !== -1 && end > start) {
    const without = normalizeBlankLines(`${existing.slice(0, start)}${existing.slice(end + END.length)}`);
    return applyReadmeBlock(without, block);
  }
  const h1 = existing.match(/^# .+$/m);
  if (!h1) return normalizeBlankLines(`${block}\n\n${existing}`);
  const afterH1 = existing.slice(h1.index + h1[0].length);
  const boundary = afterH1.search(/\n(?:---|##)\s/);
  if (boundary !== -1) {
    const insertAt = h1.index + h1[0].length + boundary;
    return normalizeBlankLines(`${existing.slice(0, insertAt)}\n\n${block}\n${existing.slice(insertAt)}`);
  }
  const insertAt = h1.index + h1[0].length;
  return normalizeBlankLines(`${existing.slice(0, insertAt)}\n\n${block}${existing.slice(insertAt)}`);
}

function syncGameManifests(root, opts = {}) {
  const games = loadGames(root);
  const inventoryList = loadInventory(root);
  const taxonomy = loadTaxonomy(root);
  const i18n = loadI18n(root);
  const inventoryMap = new Map(inventoryList.map((entry) => [entry.game, entry]));
  const taxonomyMap = new Map(taxonomy.games.map((entry) => [entry.id, entry]));
  const changedFiles = [];

  for (const game of games) {
    const gameDir = path.join(root, game.folder_path);
    const inventory = inventoryMap.get(game.id) || { dataFiles: [], externalDeps: [] };
    const context = { root, i18n, inventory, taxonomy: taxonomyMap.get(game.id) };
    const manifest = renderManifestJson(game, context);
    const manifestText = `${JSON.stringify(manifest, null, 2)}\n`;
    const manifestPath = path.join(gameDir, 'manifest.json');
    const previousManifest = fs.existsSync(manifestPath) ? fs.readFileSync(manifestPath, 'utf8') : '';
    if (previousManifest !== manifestText) {
      changedFiles.push(path.relative(root, manifestPath));
      if (opts.write) fs.writeFileSync(manifestPath, manifestText);
    }

    const block = renderManifestBlock(game, context);
    const readmePath = path.join(gameDir, 'README.md');
    const previousReadme = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
    let nextReadme;
    if (!previousReadme) {
      nextReadme = [
        `# ${game.display_name}`,
        '',
        descriptionFor(i18n, game),
        '',
        block,
        '',
        '## Development',
        '',
        'Run the game from a static server, or open `index.html` through the hub. The shared shell loads `shared/css/tokens.css` and `shared/css/brand.css`; this game owns its own CSS, JavaScript, and data.',
        '',
      ].join('\n');
    } else {
      nextReadme = applyReadmeBlock(previousReadme, block);
    }
    if (previousReadme !== nextReadme) {
      changedFiles.push(path.relative(root, readmePath));
      if (opts.write) fs.writeFileSync(readmePath, nextReadme);
    }
  }

  return { changed: changedFiles.length > 0, changedFiles };
}

if (require.main === module) {
  const root = path.join(__dirname, '..');
  const check = process.argv.includes('--check');
  try {
    const { changed, changedFiles } = syncGameManifests(root, { write: !check });
    if (check && changed) {
      console.error(`Game manifests are out of date:\n${changedFiles.map((file) => `  ${file}`).join('\n')}`);
      console.error('Run: node scripts/sync-game-manifests.js');
      process.exit(1);
    }
    console.log(changed ? `Updated ${changedFiles.length} file(s)` : 'Game manifests are up to date');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { syncGameManifests, renderManifestBlock, renderManifestJson, formatLevels };
