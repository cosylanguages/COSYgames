const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('PART C1 - i18n.js vm sandbox unit tests', () => {
  const rootDir = path.resolve(__dirname, '..');
  const i18nPath = path.join(rootDir, 'shared', 'js', 'i18n.js');
  const i18nCode = fs.readFileSync(i18nPath, 'utf8');

  const sandbox = {
    console: { warn: () => {} },
    localStorage: {
      getItem: () => null
    },
    document: {
      querySelectorAll: () => [],
      addEventListener: () => {}
    }
  };
  sandbox.window = sandbox;

  vm.createContext(sandbox);
  vm.runInContext(i18nCode, sandbox);

  const { window } = sandbox;

  // tOr('definitely_missing_key','X') === 'X'
  assert.strictEqual(window.tOr('definitely_missing_key', 'X'), 'X');

  // tOr('keep_learning_drills','X') !== 'X' and equals the English text
  assert.notStrictEqual(window.tOr('keep_learning_drills', 'X'), 'X');
  assert.strictEqual(window.tOr('keep_learning_drills', 'X'), 'Quick practice drills');

  // tOr('keep_learning_drills','X','fr') equals the French text
  assert.strictEqual(window.tOr('keep_learning_drills', 'X', 'fr'), 'Exercices rapides');

  // hasI18n('keep_learning_drills') is true; hasI18n('nope_nope') is false
  assert.strictEqual(window.hasI18n('keep_learning_drills'), true);
  assert.strictEqual(window.hasI18n('nope_nope'), false);

  // t('definitely_missing_key') still returns 'definitely_missing_key' (documented legacy behaviour)
  assert.strictEqual(window.t('definitely_missing_key'), 'definitely_missing_key');
});

test('PART C2 - i18n usage and dictionary key coverage scan', () => {
  const rootDir = path.resolve(__dirname, '..');
  const i18nPath = path.join(rootDir, 'shared', 'js', 'i18n.js');
  const i18nCode = fs.readFileSync(i18nPath, 'utf8');

  // Extract keys of en block from shared/js/i18n.js
  const enBlockMatch = i18nCode.match(/en:\s*\{([\s\S]*?)\n\s*\},/);
  assert.ok(enBlockMatch, 'Must find en translations block in i18n.js');

  const enBlockText = enBlockMatch[1];
  const enKeys = new Set([...enBlockText.matchAll(/^\s*([a-zA-Z0-9_]+):/gm)].map(m => m[1]));
  assert.ok(enKeys.size > 0, 'English translation keys set must not be empty');

  // Find all .js and .html files outside excluded directories
  function getAllFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
      const stat = fs.statSync(filePath);

      if (stat && stat.isDirectory()) {
        if (
          file === 'data' ||
          file === 'docs' ||
          file === 'tests' ||
          file === 'node_modules' ||
          file === 'decks' ||
          file.startsWith('.')
        ) {
          return;
        }
        results = results.concat(getAllFiles(filePath));
      } else {
        if (
          relativePath === 'shared/js/i18n.js' ||
          relativePath.includes('/decks/')
        ) {
          return;
        }
        if (file.endsWith('.js') || file.endsWith('.html')) {
          results.push({ filePath, relativePath });
        }
      }
    });
    return results;
  }

  const filesToScan = getAllFiles(rootDir);
  assert.ok(filesToScan.length > 0, 'Should find files to scan for i18n checks');

  const fallbackPattern = /(?:window\.)?\b(?:t|getI18nText)\s*\([^)]*\)\s*\|\|/;
  const keyCallPattern = /(?:window\.)?\b(?:t|getI18nText)\s*\(\s*(['"])(.*?)\1/g;

  filesToScan.forEach(({ filePath, relativePath }) => {
    const content = fs.readFileSync(filePath, 'utf8');

    // Assert no occurrence of window.t(...) || or getI18nText(...) ||
    assert.ok(
      !fallbackPattern.test(content),
      `File ${relativePath} contains forbidden fallback pattern window.t(...) || or getI18nText(...) ||`
    );

    // Assert every key passed to window.t( or getI18nText( exists in English dictionary
    const keyMatches = [...content.matchAll(keyCallPattern)];
    keyMatches.forEach(m => {
      const keyPassed = m[2];
      assert.ok(
        enKeys.has(keyPassed),
        `Key '${keyPassed}' passed to t/getI18nText in ${relativePath} does not exist in English dictionary`
      );
    });
  });
});
