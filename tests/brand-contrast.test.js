'use strict';
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { checkBrandContrast, contrastRatio, parseColor } = require('../scripts/lib/contrast');

const root = path.join(__dirname, '..');

test('contrast math matches the WCAG reference values', () => {
  assert.ok(Math.abs(contrastRatio(parseColor('#000000'), parseColor('#ffffff')) - 21) < 0.01);
  assert.ok(Math.abs(contrastRatio(parseColor('#ffffff'), parseColor('#ffffff')) - 1) < 0.01);
});

test('every brand text/background pair meets its WCAG AA threshold', () => {
  for (const result of checkBrandContrast(root)) {
    assert.ok(result.ratio !== null, `${result.mode} ${result.label}: ${result.error}`);
    assert.ok(
      result.ratio >= result.min,
      `${result.mode} ${result.label}: ${result.ratio.toFixed(2)}:1 is below ${result.min}:1`
    );
  }
});
