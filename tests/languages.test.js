const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const repoRoot = path.resolve(__dirname, '..');
const indexJsonPath = path.join(repoRoot, 'games', 'index.json');
const i18nPath = path.join(repoRoot, 'shared', 'js', 'i18n.js');

const wiredGames = [
  'fluency-flow',
  'opinion-arena',
  'action-hero',
  'identity-mystery',
  'word-linker',
  'story-chain',
  'critics-corner'
];

const gameKeyMap = {
  'fluency-flow': 'fluency',
  'opinion-arena': 'opinions',
  'action-hero': 'action',
  'identity-mystery': 'identity',
  'word-linker': 'wordlinker',
  'story-chain': 'storychain',
  'critics-corner': 'critic'
};

test('a. Every games/index.json entry has a non-empty learning_languages array of unique lowercase codes', () => {
  const games = JSON.parse(fs.readFileSync(indexJsonPath, 'utf8'));
  assert.ok(Array.isArray(games) && games.length > 0, 'games/index.json must be a non-empty array');

  games.forEach(game => {
    assert.ok(
      Array.isArray(game.learning_languages),
      `Game ${game.id} must have a learning_languages array`
    );
    assert.ok(
      game.learning_languages.length > 0,
      `Game ${game.id} learning_languages array must not be empty`
    );

    const uniqueSet = new Set();
    game.learning_languages.forEach(code => {
      assert.strictEqual(typeof code, 'string', `Code in ${game.id} must be a string`);
      assert.strictEqual(
        code,
        code.toLowerCase(),
        `Code "${code}" in ${game.id} must be lowercase`
      );
      assert.ok(
        !uniqueSet.has(code),
        `Code "${code}" in ${game.id} must be unique within learning_languages`
      );
      uniqueSet.add(code);
    });
  });
});

test('b. For the 7 wired games, game.js contains cosyLanguageLabels([...]) whose codes equal learning_languages', () => {
  const games = JSON.parse(fs.readFileSync(indexJsonPath, 'utf8'));
  const gameMap = new Map(games.map(g => [g.id, g]));

  wiredGames.forEach(gameId => {
    const gameEntry = gameMap.get(gameId);
    assert.ok(gameEntry, `Game ${gameId} must exist in games/index.json`);

    const gameJsPath = path.join(repoRoot, gameEntry.folder_path, 'game.js');
    assert.ok(fs.existsSync(gameJsPath), `File ${gameJsPath} must exist`);

    const code = fs.readFileSync(gameJsPath, 'utf8');
    const match = code.match(/cosyLanguageLabels\(\s*(\[[^\]]+\])\s*\)/);
    assert.ok(
      match,
      `${gameJsPath} must contain a call to cosyLanguageLabels([...])`
    );

    const parsedCodes = JSON.parse(match[1]);
    assert.deepStrictEqual(
      parsedCodes,
      gameEntry.learning_languages,
      `${gameJsPath} cosyLanguageLabels codes must equal learning_languages in games/index.json`
    );
  });
});

test('b2. Menu codes derived from game.js equal games/index.json learning_languages for every game', () => {
  const games = JSON.parse(fs.readFileSync(indexJsonPath, 'utf8'));
  const allowList = ['100-questions', 'what-gender-is-it', 'this-or-that']; // These games use their own custom selects or deck structures

  const loaderPath = path.join(repoRoot, '_engine', 'loader.js');
  const loaderCode = fs.readFileSync(loaderPath, 'utf8');
  const sandbox = { window: {}, console: console };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(loaderCode, sandbox);
  const COSYLoader = sandbox.COSYLoader;

  games.forEach(gameEntry => {
    if (allowList.includes(gameEntry.id)) {
      return; // Skip allow-listed games with own selects
    }

    const gameJsPath = path.join(repoRoot, gameEntry.folder_path, 'game.js');
    assert.ok(fs.existsSync(gameJsPath), `File ${gameJsPath} must exist for ${gameEntry.id}`);

    const code = fs.readFileSync(gameJsPath, 'utf8');
    let menuCodes = [];

    const cosyMatch = code.match(/cosyLanguageLabels\(\s*(\[[^\]]+\])\s*\)/);
    if (cosyMatch) {
      menuCodes = JSON.parse(cosyMatch[1]);
    } else {
      const langOptsMatch = code.match(/LANG_OPTS\s*=\s*(\[[^\]]+\])/s);
      assert.ok(langOptsMatch, `LANG_OPTS or cosyLanguageLabels must exist in ${gameJsPath}`);

      const parsedOpts = vm.runInContext(langOptsMatch[1], sandbox);
      menuCodes = Array.from(parsedOpts).map(opt => {
        if (typeof opt === 'object' && opt !== null && opt.code) {
          return String(opt.code);
        }
        return String(COSYLoader.getLangCode(opt));
      });
    }

    assert.deepStrictEqual(
      Array.from(menuCodes),
      Array.from(gameEntry.learning_languages),
      `Menu codes in ${gameJsPath} [${menuCodes.join(', ')}] must equal learning_languages [${gameEntry.learning_languages.join(', ')}] in games/index.json for ${gameEntry.id}`
    );
  });
});

test('b3. README.md Languages cell equals upper-cased learning_languages joined with ", " for every game', () => {
  const games = JSON.parse(fs.readFileSync(indexJsonPath, 'utf8'));
  const readmePath = path.join(repoRoot, 'README.md');
  const readmeLines = fs.readFileSync(readmePath, 'utf8').split('\n');

  games.forEach(gameEntry => {
    const expectedCell = gameEntry.learning_languages.map(c => c.toUpperCase()).join(', ');
    const folderTag = `\`${gameEntry.folder_path}\``;

    const row = readmeLines.find(line => line.startsWith('|') && line.includes(folderTag));
    assert.ok(row, `README.md must contain a table row for game folder \`${gameEntry.folder_path}\``);

    const parts = row.split('|').map(p => p.trim());
    // Table format: | Game | What you do | Players | CEFR levels | Languages | Folder |
    // parts[0] is '', parts[5] is Languages, parts[6] is Folder
    const actualCell = parts[5];

    assert.strictEqual(
      actualCell,
      expectedCell,
      `README.md Languages cell for ${gameEntry.id} must equal "${expectedCell}"`
    );
  });
});

test('c. Helper unit test in a node:vm sandbox for cosyLanguageLabels', () => {
  const i18nCode = fs.readFileSync(i18nPath, 'utf8');
  const sandbox = {
    localStorage: { getItem: () => 'en' },
    window: {},
    document: { readyState: 'complete', addEventListener: () => {} }
  };
  sandbox.window = sandbox;

  vm.createContext(sandbox);
  vm.runInContext(i18nCode, sandbox);

  assert.strictEqual(
    typeof sandbox.window.cosyLanguageLabels,
    'function',
    'window.cosyLanguageLabels must be defined as a function'
  );

  const labels = sandbox.window.cosyLanguageLabels(['en', 'es', 'de']);
  assert.deepStrictEqual(
    labels,
    ['English 🇬🇧', 'Español 🇪🇸', 'Deutsch 🇩🇪'],
    'cosyLanguageLabels(["en","es","de"]) must return English, Español, Deutsch display strings'
  );

  const unknownResult = sandbox.window.cosyLanguageLabels(['en', 'xyz', 'es']);
  assert.deepStrictEqual(
    unknownResult,
    ['English 🇬🇧', 'xyz', 'Español 🇪🇸'],
    'Unknown language codes must be returned unchanged'
  );
});

test('d. For each wired game and code in learning_languages, data/<code>/<key>.js exists', () => {
  const games = JSON.parse(fs.readFileSync(indexJsonPath, 'utf8'));
  const gameMap = new Map(games.map(g => [g.id, g]));

  wiredGames.forEach(gameId => {
    const gameEntry = gameMap.get(gameId);
    assert.ok(gameEntry, `Game ${gameId} must exist in games/index.json`);

    const dataKey = gameKeyMap[gameId];
    assert.ok(dataKey, `Data key for ${gameId} must be defined`);

    gameEntry.learning_languages.forEach(code => {
      const dataFilePath = path.join(repoRoot, 'data', code, `${dataKey}.js`);
      assert.ok(
        fs.existsSync(dataFilePath),
        `Data file ${dataFilePath} must exist for ${gameId} in language ${code}`
      );
    });
  });
});
