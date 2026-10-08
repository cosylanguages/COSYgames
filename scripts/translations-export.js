#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function parseArgs() {
  const args = process.argv.slice(2);
  let lang = null;
  let game = null;
  let all = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--game' && i + 1 < args.length) {
      game = args[++i];
    } else if (args[i] === '--all') {
      all = true;
    } else if (!lang && !args[i].startsWith('--')) {
      lang = args[i].toLowerCase();
    }
  }

  if (!lang) {
    console.error('Usage: node scripts/translations-export.js <lang> [--game <id>] [--all]');
    process.exit(1);
  }

  return { lang, game, all };
}

function loadAllGameStrings() {
  const gamesDir = path.join(__dirname, '..', 'i18n', 'games');
  if (!fs.existsSync(gamesDir)) return {};
  const files = fs.readdirSync(gamesDir).filter(f => f.endsWith('.js'));
  const context = { window: {} };
  vm.createContext(context);
  for (const f of files) {
    const code = fs.readFileSync(path.join(gamesDir, f), 'utf8');
    vm.runInContext(code, context);
  }
  return context.window.COSYGameStrings || {};
}

function escapeCsvField(val) {
  if (val === undefined || val === null) val = '';
  val = String(val);
  if (val.includes('"') || val.includes(',') || val.includes('\n') || val.includes('\r')) {
    return '"' + val.replace(/"/g, '""') + '"';
  }
  return val;
}

function main() {
  const { lang, game, all } = parseArgs();
  const gameStringsMap = loadAllGameStrings();

  const rows = [];
  rows.push(['game', 'key', 'english', 'translation', 'status', 'notes']);

  const gameIds = Object.keys(gameStringsMap).sort();

  for (const gId of gameIds) {
    if (game && gId !== game) continue;
    const gameObj = gameStringsMap[gId];
    const strings = gameObj.strings || {};
    const statuses = (gameObj.status && gameObj.status[lang]) || {};

    const keys = Object.keys(strings);
    for (const key of keys) {
      const entry = strings[key] || {};
      const english = entry.en || '';
      const translation = entry[lang] || '';
      const status = statuses[key] || '';

      if (!all) {
        if (status && status !== 'machine') {
          continue;
        }
      }

      rows.push([gId, key, english, translation, status, '']);
    }
  }

  const csvContent = '\uFEFF' + rows.map(r => r.map(escapeCsvField).join(',')).join('\r\n') + '\r\n';

  const exportDir = path.join(__dirname, '..', 'translations', 'export');
  fs.mkdirSync(exportDir, { recursive: true });

  const fileName = game ? `${lang}-${game}.csv` : `${lang}.csv`;
  const filePath = path.join(exportDir, fileName);

  fs.writeFileSync(filePath, csvContent, 'utf8');
  console.log(`Exported ${rows.length - 1} rows to ${filePath}`);
}

main();
