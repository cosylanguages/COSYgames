const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

function computeTargetMeta(entry) {
  const cat = entry.category;

  let players = 'Solo';
  const mode = entry.mode || [];
  if (mode.includes('solo') && mode.includes('group')) {
    players = 'Solo or Group';
  } else if (mode.includes('group')) {
    players = 'Group';
  } else if (mode.includes('solo')) {
    players = 'Solo';
  }

  const levels = entry.cefr_levels || [];
  const firstLvl = levels[0];
  const lastLvl = levels[levels.length - 1];

  return `${cat} · ${players} · CEFR ${firstLvl}–${lastLvl}`;
}

const ALL_CEFR = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

test('game-meta.test.js - verify #go-meta formatting, game.js cleanup, and CEFR level integrity', () => {
  const rootDir = path.resolve(__dirname, '..');
  const gamesJsonPath = path.join(rootDir, 'games', 'index.json');
  const gamesJson = JSON.parse(fs.readFileSync(gamesJsonPath, 'utf8'));

  assert.ok(Array.isArray(gamesJson) && gamesJson.length > 0, 'games/index.json must be a non-empty array');

  gamesJson.forEach(entry => {
    const folderPath = path.join(rootDir, entry.folder_path);
    const htmlPath = path.join(folderPath, 'index.html');
    const jsPath = path.join(folderPath, 'game.js');

    assert.ok(fs.existsSync(htmlPath), `HTML file '${htmlPath}' must exist`);
    assert.ok(fs.existsSync(jsPath), `JS file '${jsPath}' must exist`);

    // 1. Assert #go-meta text in {folder_path}/index.html equals target string
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const metaMatch = htmlContent.match(/<div\s+class="go-meta"\s+id="go-meta">(.*?)<\/div>/);
    assert.ok(metaMatch, `#go-meta element must exist in ${entry.folder_path}index.html`);

    const actualMetaText = metaMatch[1].trim();
    const expectedMetaText = computeTargetMeta(entry);
    assert.strictEqual(
      actualMetaText,
      expectedMetaText,
      `#go-meta in ${entry.folder_path}index.html must match expected format`
    );

    // 2. Assert {folder_path}/game.js contains no assignment to go-meta and no GAME_META constant
    const jsContent = fs.readFileSync(jsPath, 'utf8');

    assert.ok(
      !/go-meta[\s\S]*?textContent|textContent[\s\S]*?go-meta/.test(jsContent),
      `${entry.folder_path}game.js must not contain go-meta textContent assignment`
    );

    assert.ok(
      !/\bGAME_META\b/.test(jsContent),
      `${entry.folder_path}game.js must not contain GAME_META constant`
    );

    // 3. Assert cefr_levels is an ordered, gap-free subsequence of A0,A1,A2,B1,B2,C1,C2
    const levels = entry.cefr_levels;
    assert.ok(Array.isArray(levels) && levels.length > 0, `cefr_levels for ${entry.id} must be a non-empty array`);

    const firstIndex = ALL_CEFR.indexOf(levels[0]);
    assert.notStrictEqual(firstIndex, -1, `Level '${levels[0]}' for ${entry.id} is invalid`);

    levels.forEach((lvl, idx) => {
      const expectedLvl = ALL_CEFR[firstIndex + idx];
      assert.strictEqual(
        lvl,
        expectedLvl,
        `cefr_levels for ${entry.id} must be an ordered, gap-free subsequence of ${ALL_CEFR.join(',')} (got ${levels.join(',')})`
      );
    });
  });
});
