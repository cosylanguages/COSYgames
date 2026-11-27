#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

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

function main() {
  const gameStringsMap = loadAllGameStrings();
  const gameIds = Object.keys(gameStringsMap).sort();
  const langs = ['fr', 'es', 'de', 'it', 'ru', 'el'];

  console.log('Translation Status Report:');
  console.log('==========================');

  const header = ['Game', ...langs.map(l => l.toUpperCase())];
  console.log(header.map(h => h.padEnd(12)).join(' | '));
  console.log('-'.repeat(header.length * 15));

  for (const gId of gameIds) {
    const gameObj = gameStringsMap[gId];
    const strings = gameObj.strings || {};
    const totalKeys = Object.keys(strings).length;

    const row = [gId.padEnd(12)];

    for (const lang of langs) {
      const statuses = (gameObj.status && gameObj.status[lang]) || {};
      let reviewedCount = 0;
      let translatedCount = 0;

      for (const key of Object.keys(strings)) {
        const trans = strings[key] && strings[key][lang];
        if (trans && trans !== '') {
          translatedCount++;
        }
        if (statuses[key] === 'reviewed') {
          reviewedCount++;
        }
      }

      const cell = `${reviewedCount}/${translatedCount}/${totalKeys}`;
      row.push(cell.padEnd(12));
    }

    console.log(row.join(' | '));
  }
}

main();
