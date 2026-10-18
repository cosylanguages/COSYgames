#!/usr/bin/env node
'use strict';
// Usage: node scripts/sync-site-chrome.js           regenerate the shared nav/footer in every page that has markers
//        node scripts/sync-site-chrome.js --check   exit 1 if any page is out of date or has an unmanaged nav/footer
const path = require('path');
const { syncChrome } = require('./lib/site-chrome');

const check = process.argv.includes('--check');
const { changed, unmanaged, errors } = syncChrome(path.join(__dirname, '..'), { write: !check });
for (const e of errors) console.error('Error: ' + e);
for (const f of unmanaged) console.error(`Unmanaged nav/footer in ${f}: wrap it in <!-- cosy:chrome:... --> markers (see templates/game-template.html)`);
if (changed.length) console.log(`${check ? 'Out of date' : 'Updated'}: ${changed.join(', ')}`);
else if (!errors.length && !unmanaged.length) console.log('Shared nav/footer are up to date');
process.exit(errors.length || unmanaged.length || (check && changed.length) ? 1 : 0);
