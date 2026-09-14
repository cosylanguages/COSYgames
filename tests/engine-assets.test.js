const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('Engine scripts export expected globals and module exports', () => {
  const COSYGame = require('../_engine/game_session.js');
  const COSYScores = require('../_engine/scores.js');
  const ViewContext = require('../_engine/view_context.js');

  assert.ok(COSYGame, 'COSYGame should be exported');
  assert.strictEqual(typeof COSYGame.init, 'function', 'COSYGame.init should be a function');

  assert.ok(COSYScores, 'COSYScores should be exported');
  assert.strictEqual(typeof COSYScores.save, 'function', 'COSYScores.save should be a function');

  assert.ok(ViewContext, 'ViewContext should be exported');
  assert.strictEqual(typeof ViewContext.getContext, 'function', 'ViewContext.getContext should be a function');
});

test('All relative CSS and JS links in HTML files exist on disk', () => {
  function findHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const fullPath = path.join(dir, file);
      if (file === 'node_modules' || file === '.git') return;
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        results = results.concat(findHtmlFiles(fullPath));
      } else if (file.endsWith('.html')) {
        results.push(fullPath);
      }
    });
    return results;
  }

  const htmlFiles = findHtmlFiles('.');
  const brokenLinks = [];

  htmlFiles.forEach(htmlFile => {
    // Ignore template files (_template.html and templates/game-template.html) as they are uninstantiated templates
    if (htmlFile === '_template.html' || htmlFile.startsWith('templates/')) return;

    const content = fs.readFileSync(htmlFile, 'utf8');
    const htmlDir = path.dirname(htmlFile);

    const regex = /(?:href|src)=["']([^"']+)["']/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const ref = match[1];
      if (
        ref.startsWith('http://') ||
        ref.startsWith('https://') ||
        ref.startsWith('#') ||
        ref.startsWith('data:') ||
        ref.startsWith('javascript:') ||
        ref.startsWith('mailto:') ||
        ref.startsWith('<!--')
      ) {
        continue;
      }
      const cleanRef = ref.split('?')[0].split('#')[0];
      if (!cleanRef) continue;

      const targetPath = path.join(htmlDir, cleanRef);
      if (!fs.existsSync(targetPath)) {
        brokenLinks.push(`${htmlFile}: "${ref}" -> resolved to "${targetPath}" does not exist`);
      }
    }
  });

  assert.deepStrictEqual(brokenLinks, [], `Found broken links in HTML files:\n${brokenLinks.join('\n')}`);
});
