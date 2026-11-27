'use strict';
// Minimal WCAG contrast helpers for the brand palette.
// Supports hex, rgb(), rgba() and CSS var() indirection. Unsupported values
// (for example color-mix()) are reported instead of silently passing.

const fs = require('fs');
const path = require('path');

const NAMED = { white: '#ffffff', black: '#000000' };

function parseColor(input) {
  if (!input) return null;
  const value = NAMED[String(input).trim().toLowerCase()] || String(input).trim();
  const hex = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hex) {
    const raw = hex[1].length === 3 ? hex[1].split('').map((c) => c + c).join('') : hex[1];
    return { r: parseInt(raw.slice(0, 2), 16), g: parseInt(raw.slice(2, 4), 16), b: parseInt(raw.slice(4, 6), 16), a: 1 };
  }
  const rgb = value.match(/^rgba?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)\s*[, ]\s*([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)$/i);
  if (rgb) {
    return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]), a: rgb[4] === undefined ? 1 : Number(rgb[4]) };
  }
  return null;
}

function flatten(fg, bg) {
  if (fg.a >= 1) return fg;
  return {
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  };
}

function luminance({ r, g, b }) {
  const channel = (value) => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(fg, bg) {
  const light = Math.max(luminance(fg), luminance(bg));
  const dark = Math.min(luminance(fg), luminance(bg));
  return (light + 0.05) / (dark + 0.05);
}

function parseDeclarations(css) {
  const declarations = {};
  for (const match of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    declarations[match[1]] = match[2].trim();
  }
  return declarations;
}

function parseModeTokens(css, selectorSource) {
  const tokens = {};
  const blockRegex = new RegExp(`${selectorSource}\\s*\\{([\\s\\S]*?)\\}`, 'g');
  for (const block of css.matchAll(blockRegex)) {
    Object.assign(tokens, parseDeclarations(block[1]));
  }
  return tokens;
}

function resolveVars(value, tokens, seen = new Set()) {
  let out = '';
  for (let i = 0; i < value.length; i++) {
    if (!value.startsWith('var(', i)) {
      out += value[i];
      continue;
    }
    let depth = 1;
    let j = i + 4;
    while (j < value.length && depth > 0) {
      if (value[j] === '(') depth++;
      else if (value[j] === ')') depth--;
      j++;
    }
    const inner = value.slice(i + 4, j - 1);
    const comma = inner.indexOf(',');
    const name = (comma === -1 ? inner : inner.slice(0, comma)).trim();
    const fallback = comma === -1 ? null : inner.slice(comma + 1).trim();
    if (tokens[name] !== undefined && !seen.has(name)) {
      const next = new Set(seen);
      next.add(name);
      out += resolveVars(tokens[name], tokens, next);
    } else if (fallback) {
      out += resolveVars(fallback, tokens, seen);
    }
    i = j - 1;
  }
  return out.trim();
}

function loadTokens(root) {
  const files = ['shared/css/tokens.css', 'shared/css/brand.css'];
  const css = files.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n');
  const light = parseModeTokens(css, ':root');
  const dark = {
    ...light,
    ...parseModeTokens(css, 'html\\[data-theme="dark"\\][^{]*'),
  };
  return { light, dark };
}

function resolveColor(value, tokens) {
  const raw = value.startsWith('--') ? tokens[value] : value;
  return raw ? parseColor(resolveVars(raw, tokens)) : null;
}

const PAIRS = [
  { mode: 'light', label: 'Brand ink on primary (buttons, active filters)', fg: '--cosy-brand-ink', bg: '--cosy-brand-primary', min: 4.5 },
  { mode: 'light', label: 'White on brand deep (solid controls, footer)', fg: '#ffffff', bg: '--cosy-brand-deep', min: 4.5 },
  { mode: 'light', label: 'Brand deep text on cream', fg: '--cosy-brand-deep', bg: '--cosy-color-cream', min: 4.5 },
  { mode: 'light', label: 'Body ink on cream', fg: '--cosy-color-ink', bg: '--cosy-color-cream', min: 4.5 },
  { mode: 'light', label: 'Footer text on footer background', fg: '--cg-footer-text', bg: '--cg-footer-bg', min: 4.5 },
  { mode: 'dark', label: 'Brand ink on primary (dark mode)', fg: '--cosy-brand-ink', bg: '--cosy-brand-primary', min: 4.5 },
  { mode: 'dark', label: 'Brand primary text on dark surface', fg: '--cosy-brand-primary', bg: '--cosy-color-cream', min: 4.5 },
  { mode: 'dark', label: 'Body ink on dark surface', fg: '--cosy-color-ink', bg: '--cosy-color-cream', min: 4.5 },
  { mode: 'dark', label: 'Footer text on footer background (dark)', fg: '--cg-footer-text', bg: '--cg-footer-bg', min: 4.5 },
];

function checkBrandContrast(root) {
  const tokens = loadTokens(root);
  return PAIRS.map((pair) => {
    const fg = resolveColor(pair.fg, tokens[pair.mode]);
    const bg = resolveColor(pair.bg, tokens[pair.mode]);
    if (!fg || !bg) {
      return { ...pair, ratio: null, pass: false, error: `Could not parse ${!fg ? pair.fg : pair.bg}` };
    }
    const ratio = contrastRatio(flatten(fg, bg), bg);
    return { ...pair, ratio, pass: ratio >= pair.min };
  });
}

module.exports = {
  parseColor,
  luminance,
  contrastRatio,
  flatten,
  resolveVars,
  loadTokens,
  checkBrandContrast,
  PAIRS,
};
