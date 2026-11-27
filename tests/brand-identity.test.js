'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const brandPath = path.join(root, 'shared', 'css', 'brand.css');

function htmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

test('brand stylesheet defines the two COSY logo colours and a dark mode', () => {
  const css = fs.readFileSync(brandPath, 'utf8');
  assert.match(css, /--cosy-brand-primary:\s*#0abbb5/i, 'primary logo colour must be #0abbb5');
  assert.match(css, /--cosy-brand-secondary:\s*#0ca2b0/i, 'secondary colour must be #0ca2b0');
  assert.match(css, /html\[data-theme="dark"\]/, 'brand layer must adapt to dark mode');
  assert.match(css, /--cosy-brand-ink:/, 'brand layer must define readable ink on turquoise');
});

test('every page that uses the design tokens loads the brand layer last', () => {
  const pages = htmlFiles(root).filter((file) => fs.readFileSync(file, 'utf8').includes('shared/css/tokens.css'));
  assert.ok(pages.length >= 20, `expected at least 20 pages, found ${pages.length}`);
  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf8');
    const links = [...html.matchAll(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi)].map((m) => m[0]);
    assert.ok(links.length > 0, `${path.relative(root, file)} has no stylesheet links`);
    assert.ok(links[links.length - 1].includes('shared/css/brand.css'), `${path.relative(root, file)} must load brand.css after every component stylesheet`);
    const tokensPos = html.indexOf('shared/css/tokens.css');
    const brandPos = html.indexOf('shared/css/brand.css');
    assert.ok(tokensPos !== -1 && tokensPos < brandPos, `${path.relative(root, file)} must load tokens.css before brand.css`);
  }
});

test('every page advertises the brand colour to the browser', () => {
  const pages = htmlFiles(root).filter((file) => fs.readFileSync(file, 'utf8').includes('shared/css/tokens.css'));
  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf8');
    assert.match(html, /<meta\s+name="theme-color"\s+content="#0abbb5"/i, `${path.relative(root, file)} must set theme-color to #0abbb5`);
  }
});
