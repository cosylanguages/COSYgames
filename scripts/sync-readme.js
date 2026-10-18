#!/usr/bin/env node
'use strict';
// Usage: node scripts/sync-readme.js           regenerate the games table in README.md
//        node scripts/sync-readme.js --check   exit 1 if the table is out of date
const path = require('path');
const { syncReadme } = require('./lib/readme-games');

const check = process.argv.includes('--check');
const { changed } = syncReadme(path.join(__dirname, '..'), { write: !check });
console.log(changed ? (check ? 'README games table is out of date: run node scripts/sync-readme.js' : 'README games table updated') : 'README games table is up to date');
process.exit(check && changed ? 1 : 0);
