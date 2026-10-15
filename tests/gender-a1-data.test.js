const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('A1 family concepts use accurate translations and grammatical genders', () => {
  const sourcePath = path.join(__dirname, '..', 'data', 'gender', 'a1.js');
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(sourcePath, 'utf8'), context);

  const concepts = context.window.genderGameData.starter;
  const mum = concepts.find(item => item.concept === 'Mum');
  const dad = concepts.find(item => item.concept === 'Dad');

  assert.ok(mum, 'A1 data should include Mum');
  assert.ok(dad, 'A1 data should include Dad');

  const expectedMum = {
    fr: ['maman', 'feminine'],
    es: ['mamá', 'feminine'],
    it: ['mamma', 'feminine'],
    de: ['Mutter', 'feminine'],
    ru: ['мама', 'feminine'],
    el: ['μαμά', 'feminine'],
    br: ['mamm', 'feminine']
  };
  const expectedDad = {
    fr: ['papa', 'masculine'],
    es: ['papá', 'masculine'],
    it: ['papà', 'masculine'],
    de: ['Vater', 'masculine'],
    ru: ['папа', 'masculine'],
    el: ['μπαμπάς', 'masculine'],
    br: ['tad', 'masculine']
  };

  for (const [lang, [word, gender]] of Object.entries(expectedMum)) {
    assert.equal(mum.translations[lang]?.word, word, 'Mum translation for ' + lang);
    assert.equal(mum.translations[lang]?.gender, gender, 'Mum grammatical gender for ' + lang);
  }
  for (const [lang, [word, gender]] of Object.entries(expectedDad)) {
    assert.equal(dad.translations[lang]?.word, word, 'Dad translation for ' + lang);
    assert.equal(dad.translations[lang]?.gender, gender, 'Dad grammatical gender for ' + lang);
  }
});
