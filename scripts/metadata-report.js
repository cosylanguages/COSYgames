#!/usr/bin/env node
'use strict';
// Usage: node scripts/metadata-report.js           print current differences
//        node scripts/metadata-report.js --update  accept them as the new baseline
const fs = require('fs');
const path = require('path');
const { computeDifferences, structuralProblems } = require('./lib/metadata-diff');

const root = path.join(__dirname, '..');
const baselinePath = path.join(root, 'tests', 'fixtures', 'metadata-known-differences.json');
const problems = structuralProblems(root);
const diffs = computeDifferences(root);

if (process.argv.includes('--update')) {
  if (problems.length) { console.error('Fix structural problems first:\n- ' + problems.join('\n- ')); process.exit(1); }
  fs.writeFileSync(baselinePath, JSON.stringify(diffs, null, 2) + '\n');
  console.log('Baseline written to ' + path.relative(root, baselinePath));
} else {
  console.log(problems.length ? 'Structural problems:\n- ' + problems.join('\n- ') : 'Structure OK');
  for (const [kind, entries] of Object.entries(diffs)) {
    console.log(`\n${kind}: ${Object.keys(entries).length} game(s) differ`);
    for (const [id, d] of Object.entries(entries)) console.log(`  ${id}: ${JSON.stringify(d)}`);
  }
}
