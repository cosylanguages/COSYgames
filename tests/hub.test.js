const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('Hub drift and integrity tests', () => {
  const rootDir = path.resolve(__dirname, '..');
  const indexPath = path.join(rootDir, 'index.html');
  const i18nPath = path.join(rootDir, 'shared', 'js', 'i18n.js');

  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  const i18nJs = fs.readFileSync(i18nPath, 'utf8');

  // Match card opening tags where "gc" is an exact space-delimited class name
  const cardOpeningTagRegex = /<div\s+[^>]*class="(?:\w+\s+)*gc(?:\s+[^"]*)?"[^>]*>/g;
  const cardOpeningTags = [...indexHtml.matchAll(cardOpeningTagRegex)];

  const N = cardOpeningTags.length;
  assert.equal(N, 20, 'Card count N should be exactly 20');

  // Load translations from i18n.js
  let transObj = {};
  const transMatch = i18nJs.match(/const\s+translations\s*=\s*(\{[\s\S]*?\n  \});/);
  if (transMatch) {
    transObj = eval('(' + transMatch[1] + ')');
  }

  // PART F - Assertion a:
  // Check each card for href, onclick, data-tags, data-players, data-skill
  cardOpeningTags.forEach((match, idx) => {
    const fullTag = match[0];

    // Check no onclick on card
    assert.ok(!/onclick\s*=/i.test(fullTag), `Card ${idx} should not have onclick attribute`);

    // Check no data-tags
    assert.ok(!/data-tags\s*=/i.test(fullTag), `Card ${idx} should not have data-tags attribute`);

    // Extract data-players
    const playersMatch = fullTag.match(/data-players="([^"]+)"/);
    assert.ok(playersMatch, `Card ${idx} must have data-players attribute: ${fullTag}`);
    const playersTokens = playersMatch[1].trim().split(/\s+/);
    assert.ok(playersTokens.length > 0, `Card ${idx} data-players must be non-empty`);
    playersTokens.forEach(token => {
      assert.ok(['solo', 'group'].includes(token), `Card ${idx} player token '${token}' must be 'solo' or 'group'`);
    });

    // Extract data-skill
    const skillMatch = fullTag.match(/data-skill="([^"]+)"/);
    assert.ok(skillMatch, `Card ${idx} must have data-skill attribute: ${fullTag}`);
    const skill = skillMatch[1].trim();
    assert.ok(['speaking', 'mystery', 'vocab'].includes(skill), `Card ${idx} data-skill '${skill}' must be speaking, mystery, or vocab`);
  });

  // Check card links and hrefs on disk
  const cardLinkMatches = [...indexHtml.matchAll(/<a\s+class="gc-link"\s+href="([^"]+)">([^<]+)<\/a>/g)];
  assert.equal(cardLinkMatches.length, N, `There must be exactly ${N} a.gc-link elements (one per card)`);

  cardLinkMatches.forEach((linkMatch, idx) => {
    const href = linkMatch[1];
    const pathOnly = href.split('?')[0].split('#')[0];
    const targetFilePath = path.join(rootDir, pathOnly);
    assert.ok(fs.existsSync(targetFilePath), `Card link target file '${pathOnly}' for card ${idx} must exist on disk`);
  });

  // PART F - Assertion b:
  const nStr = String(N);
  const langs = Object.keys(transObj);
  assert.ok(langs.length >= 7, 'i18n should support at least 7 languages');

  langs.forEach(lang => {
    const heroTitle = transObj[lang].hero_title;
    assert.ok(heroTitle, `Language ${lang} should have hero_title`);
    assert.ok(heroTitle.startsWith(nStr), `Language ${lang} hero_title '${heroTitle}' must start with '${nStr}'`);
  });

  // Check <title>, meta description, og:title, og:description in index.html contain String(N)
  const titleMatch = indexHtml.match(/<title>([\s\S]*?)<\/title>/);
  assert.ok(titleMatch && titleMatch[1].includes(nStr), `<title> must contain '${nStr}'`);

  const metaDescMatch = indexHtml.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  assert.ok(metaDescMatch && metaDescMatch[1].includes(nStr), `meta description must contain '${nStr}'`);

  const ogTitleMatch = indexHtml.match(/<meta\s+property="og:title"\s+content="([^"]+)"/);
  assert.ok(ogTitleMatch && ogTitleMatch[1].includes(nStr), `og:title must contain '${nStr}'`);

  const ogDescMatch = indexHtml.match(/<meta\s+property="og:description"\s+content="([^"]+)"/);
  assert.ok(ogDescMatch && ogDescMatch[1].includes(nStr), `og:description must contain '${nStr}'`);

  // PART F - Assertion c:
  // Each .sec-count initial number equals the number of cards in its section
  const sectionGrids = [
    { id: 'grid-speaking', countRegex: /<div\s+class="sec-title\s+fi">[\s\S]*?<span\s+class="sec-count">(\d+)\s+games<\/span><\/div>\s*<div\s+class="game-grid\s+fi"\s+id="grid-speaking">/ },
    { id: 'grid-mystery', countRegex: /<div\s+class="sec-title\s+fi">[\s\S]*?<span\s+class="sec-count">(\d+)\s+games<\/span><\/div>\s*<div\s+class="game-grid\s+fi"\s+id="grid-mystery">/ },
    { id: 'grid-vocab', countRegex: /<div\s+class="sec-title\s+fi">[\s\S]*?<span\s+class="sec-count">(\d+)\s+games<\/span><\/div>\s*<div\s+class="game-grid\s+fi"\s+id="grid-vocab">/ }
  ];

  sectionGrids.forEach(sec => {
    const match = indexHtml.match(sec.countRegex);
    assert.ok(match, `Section count header before ${sec.id} should match expected HTML structure`);
    const countNumber = parseInt(match[1], 10);

    // Count .gc cards inside this specific grid
    const gridBlockMatch = indexHtml.match(new RegExp(`<div\\s+class="game-grid\\s+fi"\\s+id="${sec.id}">([\\s\\S]*?)(?=<div\\s+class="sec-title|<\\/div>\\s*<\\/div>\\s*<!-- Footer -->)`));
    assert.ok(gridBlockMatch, `Grid element with id ${sec.id} must exist`);
    const cardsInGrid = [...gridBlockMatch[1].matchAll(/<div\s+[^>]*class="(?:\w+\s+)*gc(?:\s+[^"]*)?"[^>]*>/g)].length;

    assert.equal(countNumber, cardsInGrid, `Initial .sec-count for ${sec.id} (${countNumber}) must equal number of cards in grid (${cardsInGrid})`);
  });

  // PART F - Assertion d:
  // Every data-i18n key used in index.html exists in all 7 languages
  const i18nKeys = [...indexHtml.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  assert.ok(i18nKeys.length > 0, 'There should be data-i18n keys in index.html');

  i18nKeys.forEach(key => {
    langs.forEach(lang => {
      assert.ok(
        transObj[lang] && Object.prototype.hasOwnProperty.call(transObj[lang], key),
        `data-i18n key '${key}' missing in language '${lang}'`
      );
    });
  });
});

test('Hub cross-check with games/index.json', () => {
  const rootDir = path.resolve(__dirname, '..');
  const indexPath = path.join(rootDir, 'index.html');
  const gamesJsonPath = path.join(rootDir, 'games', 'index.json');

  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  const gamesJson = JSON.parse(fs.readFileSync(gamesJsonPath, 'utf8'));

  const cardBlockRegex = /<div\s+[^>]*class="(?:\w+\s+)*gc(?:\s+[^"]*)?"[^>]*>[\s\S]*?(?=<div\s+[^>]*class="(?:\w+\s+)*gc(?:\s+[^"]*)?"|<div\s+class="sec-title|<\/div>\s*<\/div>\s*<!-- Footer -->)/g;
  const blocks = indexHtml.match(cardBlockRegex) || [];

  const hubCards = blocks.map((block, idx) => {
    const tagMatch = block.match(/<div\s+[^>]*class="(?:\w+\s+)*gc(?:\s+[^"]*)?"([^>]*)>/);
    const tagAttrs = tagMatch ? tagMatch[1] : '';
    const playersMatch = tagAttrs.match(/data-players="([^"]+)"/);
    const skillMatch = tagAttrs.match(/data-skill="([^"]+)"/);
    const hrefMatch = block.match(/<a\s+class="gc-link"\s+href="([^"]+)"/);

    assert.ok(hrefMatch, `Card ${idx} must have an a.gc-link href`);
    const href = hrefMatch[1];
    const folder = href.split('/')[0];

    return {
      folder,
      href,
      players: playersMatch ? playersMatch[1].trim().split(/\s+/).sort() : [],
      skill: skillMatch ? skillMatch[1].trim() : ''
    };
  });

  // a. The set of game folders linked from hub cards equals set of ids in games/index.json
  const hubFolderSet = new Set(hubCards.map(c => c.folder));
  const jsonIdSet = new Set(gamesJson.map(g => g.id));
  assert.deepStrictEqual(hubFolderSet, jsonIdSet, 'Hub linked game folders set must equal games/index.json ids set');

  // d. Every entry has non-empty cefr_levels array and valid folder_path with index.html
  gamesJson.forEach(entry => {
    assert.ok(
      Array.isArray(entry.cefr_levels) && entry.cefr_levels.length > 0,
      `Entry '${entry.id}' must have a non-empty cefr_levels array`
    );
    const indexPathOnDisk = path.join(rootDir, entry.folder_path, 'index.html');
    assert.ok(
      fs.existsSync(indexPathOnDisk),
      `Entry '${entry.id}' folder_path '${entry.folder_path}' must exist on disk with index.html`
    );
  });

  // Skill category mapping
  const skillToCategory = {
    speaking: 'Speaking & Fluency',
    mystery: 'Mystery & Guesses',
    vocab: 'Vocab & Puzzles'
  };

  const jsonMap = new Map(gamesJson.map(g => [g.id, g]));

  hubCards.forEach(card => {
    const entry = jsonMap.get(card.folder);
    assert.ok(entry, `Entry for card folder '${card.folder}' must exist in games/index.json`);

    // b. hub section (data-skill) maps to entry category
    const expectedCategory = skillToCategory[card.skill];
    assert.strictEqual(
      entry.category,
      expectedCategory,
      `Game '${card.folder}' hub skill '${card.skill}' mapped category '${expectedCategory}' must match index.json category '${entry.category}'`
    );

    // c. hub's data-players set equals entry's mode set
    const hubModeSet = card.players.sort();
    const entryModeSet = [...entry.mode].sort();
    assert.deepStrictEqual(
      hubModeSet,
      entryModeSet,
      `Game '${card.folder}' hub data-players ${JSON.stringify(hubModeSet)} must equal index.json mode ${JSON.stringify(entryModeSet)}`
    );
  });
});
