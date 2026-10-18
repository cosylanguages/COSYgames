#!/usr/bin/env node
'use strict';
// Usage: node scripts/sync-site-urls.js           rewrite legacy URLs to the bases in site.config.json
//        node scripts/sync-site-urls.js --check   exit 1 if anything would change or a URL is unknown
const path = require('path');
const { sync } = require('./lib/site-urls');

const check = process.argv.includes('--check');
const { changes, unknown } = sync(path.join(__dirname, '..'), { write: !check });
const total = changes.reduce((n, c) => n + c.count, 0);

if (changes.length) console.log(`${check ? 'Would rewrite' : 'Rewrote'} ${total} URL(s) in ${changes.length} file(s)`);
for (const u of unknown) console.error(`Unknown COSY URL in ${u.file}: ${u.url} (add it to site.config.json)`);
if (!changes.length && !unknown.length) console.log('All site URLs match site.config.json');
process.exit(check && (changes.length || unknown.length) ? 1 : unknown.length ? 1 : 0);
