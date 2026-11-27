const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('page wiring and script tag ordering tests', async (t) => {
    const rootDir = path.join(__dirname, '..');
    const files = fs.readdirSync(rootDir, { recursive: true });
    const gameJsFiles = files.filter(f => f.endsWith('game.js') && !f.includes('node_modules'));

    const gamesWithForGame = [];

    for (const relGameJs of gameJsFiles) {
        const fullPath = path.join(rootDir, relGameJs);
        const code = fs.readFileSync(fullPath, 'utf8');

        const match = code.match(/COSYGameStrings\.forGame\(['"]([^'"]+)['"]\)/);
        if (match) {
            const gameId = match[1];
            const gameDir = path.dirname(relGameJs);
            gamesWithForGame.push({ gameId, gameDir, fullPath, code });
        }
    }

    const referencedI18nFiles = new Map(); // fileBasename -> [] array of gameDirs

    for (const { gameId, gameDir, code } of gamesWithForGame) {
        await t.test(`check wiring for game ${gameId} in ${gameDir}`, () => {
            const indexPath = path.join(rootDir, gameDir, 'index.html');
            assert.ok(fs.existsSync(indexPath), `index.html must exist in ${gameDir}`);
            const html = fs.readFileSync(indexPath, 'utf8');

            assert.ok(
                html.includes('game-strings.js'),
                `[${gameDir}/index.html] must contain game-strings.js script tag`
            );

            const usesCommonKey = code.includes('common.');
            if (usesCommonKey) {
                assert.ok(
                    html.includes('_common.js'),
                    `[${gameDir}/index.html] uses common. keys in game.js so it must include _common.js`
                );
            }

            const expectedGameI18n = `i18n/games/${gameId}.js`;
            assert.ok(
                html.includes(expectedGameI18n),
                `[${gameDir}/index.html] must contain script tag for ${expectedGameI18n}`
            );

            // Record reference
            const i18nFileName = `${gameId}.js`;
            if (!referencedI18nFiles.has(i18nFileName)) {
                referencedI18nFiles.set(i18nFileName, []);
            }
            referencedI18nFiles.get(i18nFileName).push(gameDir);

            // Order check: i18n.js < game-strings.js < _common.js (if present) < i18n/games/<id>.js < game.js
            const posI18n = html.indexOf('shared/js/i18n.js');
            const posGameStrings = html.indexOf('shared/js/game-strings.js');
            const posCommon = html.indexOf('i18n/games/_common.js');
            const posGameI18n = html.indexOf(expectedGameI18n);
            const posGameJs = html.indexOf('src="game.js"');

            assert.ok(posI18n !== -1, `[${gameDir}/index.html] must include shared/js/i18n.js`);
            assert.ok(posGameStrings !== -1, `[${gameDir}/index.html] must include shared/js/game-strings.js`);
            assert.ok(posGameI18n !== -1, `[${gameDir}/index.html] must include ${expectedGameI18n}`);
            assert.ok(posGameJs !== -1, `[${gameDir}/index.html] must include src="game.js"`);

            assert.ok(
                posI18n < posGameStrings,
                `[${gameDir}/index.html] shared/js/i18n.js must appear before shared/js/game-strings.js`
            );

            if (usesCommonKey && posCommon !== -1) {
                assert.ok(
                    posGameStrings < posCommon,
                    `[${gameDir}/index.html] shared/js/game-strings.js must appear before i18n/games/_common.js`
                );
                assert.ok(
                    posCommon < posGameI18n,
                    `[${gameDir}/index.html] i18n/games/_common.js must appear before ${expectedGameI18n}`
                );
            } else {
                assert.ok(
                    posGameStrings < posGameI18n,
                    `[${gameDir}/index.html] shared/js/game-strings.js must appear before ${expectedGameI18n}`
                );
            }

            assert.ok(
                posGameI18n < posGameJs,
                `[${gameDir}/index.html] ${expectedGameI18n} must appear before game.js`
            );

            // Verify i18n file on disk and its table definition
            const i18nFilePath = path.join(rootDir, 'i18n', 'games', `${gameId}.js`);
            assert.ok(fs.existsSync(i18nFilePath), `i18n/games/${gameId}.js must exist on disk`);
            const i18nCode = fs.readFileSync(i18nFilePath, 'utf8');
            assert.ok(
                i18nCode.includes(`COSYGameStrings['${gameId}']`) || i18nCode.includes(`COSYGameStrings["${gameId}"]`),
                `i18n/games/${gameId}.js must define COSYGameStrings['${gameId}']`
            );
        });
    }

    await t.test('check converse mapping for all files in i18n/games/', () => {
        const i18nGamesDir = path.join(rootDir, 'i18n', 'games');
        const i18nFiles = fs.readdirSync(i18nGamesDir).filter(f => f.endsWith('.js') && f !== '_common.js');

        for (const file of i18nFiles) {
            const refs = referencedI18nFiles.get(file) || [];
            assert.strictEqual(
                refs.length,
                1,
                `i18n/games/${file} should be referenced by exactly 1 game page, but found: ${JSON.stringify(refs)}`
            );
        }
    });
});
