const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('lucky-numbers mode list and COSYdata integration tests', async (t) => {
    const gameJsPath = path.join(__dirname, '..', 'lucky-numbers', 'game.js');
    const content = fs.readFileSync(gameJsPath, 'utf8');

    await t.test('a. BINGO_LVLS contains exactly the 4 allowed modes', () => {
        const match = content.match(/const BINGO_LVLS = \[(.*?)\];/);
        assert.ok(match, 'BINGO_LVLS array should exist in lucky-numbers/game.js');
        const modes = match[1].split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
        const expected = ['Alphabet (A-Z)', 'Numbers 0-9', 'Numbers 0-19', 'Numbers 0-99'];
        assert.deepStrictEqual(modes, expected, `BINGO_LVLS should be ${JSON.stringify(expected)}`);
    });

    await t.test('b. COSYdata numbers endpoint path is correctly referenced', () => {
        assert.ok(content.includes('a0_a1/numbers.json'), 'lucky-numbers/game.js should fetch COSYdata a0_a1/numbers.json');
    });
});
