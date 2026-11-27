const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('lucky-numbers mode list and COSYdata integration tests', async (t) => {
    const gameJsPath = path.join(__dirname, '..', 'lucky-numbers', 'game.js');
    const content = fs.readFileSync(gameJsPath, 'utf8');

    await t.test('a. Setup offers exactly the 4 allowed modes', () => {
        const modes = [...content.matchAll(/<option value="([^"]+)" data-gs="setup\.type_/g)].map(m => m[1]);
        const expected = ['Alphabet (A-Z)', 'Numbers 0-9', 'Numbers 0-19', 'Numbers 0-99'];
        assert.deepStrictEqual(modes, expected, `Setup modes should be ${JSON.stringify(expected)}`);
    });

    await t.test('b. COSYdata numbers endpoint path is correctly referenced', () => {
        assert.ok(content.includes('a0_a1/numbers.json'), 'lucky-numbers/game.js should fetch COSYdata a0_a1/numbers.json');
    });
});
