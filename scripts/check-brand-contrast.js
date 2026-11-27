#!/usr/bin/env node
'use strict';
// Usage: node scripts/check-brand-contrast.js
// Exits 1 if a brand text/background pair drops below its WCAG AA threshold.

const path = require('path');
const { checkBrandContrast } = require('./lib/contrast');

const root = path.join(__dirname, '..');
const results = checkBrandContrast(root);
let failed = 0;

for (const result of results) {
  const status = result.pass ? 'PASS' : 'FAIL';
  const ratio = result.ratio === null ? 'n/a' : result.ratio.toFixed(2);
  console.log(`${status}  ${result.mode.padEnd(5)}  ${ratio.padStart(5)}:1  min ${result.min}:1  ${result.label}`);
  if (!result.pass) {
    failed++;
    if (result.error) console.log(`       ${result.error}`);
  }
}

if (failed) {
  console.error(`\n${failed} brand contrast pair(s) failed.`);
  process.exit(1);
}
console.log('\nAll brand contrast pairs pass.');
