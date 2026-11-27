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

const GENDER_FILES = ['a1.js', 'a2.js', 'b1.js', 'b2.js', 'c1.js', 'c2.js'];
const VALID_GENDERS = new Set(['masculine', 'feminine', 'neuter', 'both']);
const NEUTER_LANGUAGES = new Set(['de', 'ru', 'el']);
const GENDER_LANGUAGES = new Set(['fr', 'es', 'it', 'de', 'ru', 'el', 'br']);

test('every gender concept has a real word and a gender the UI can render', () => {
  for (const file of GENDER_FILES) {
    const sourcePath = path.join(__dirname, '..', 'data', 'gender', file);
    const context = { window: {} };
    vm.runInNewContext(fs.readFileSync(sourcePath, 'utf8'), context);

    for (const [level, concepts] of Object.entries(context.window.genderGameData)) {
      const seen = new Set();
      for (const concept of concepts) {
        const label = `${file}/${level}/${concept.concept}`;
        assert.ok(concept.concept, `${label}: missing concept name`);
        assert.ok(!seen.has(concept.concept), `${label}: duplicate concept`);
        seen.add(concept.concept);
        assert.ok(
          concept.translations && Object.keys(concept.translations).length > 0,
          `${label}: no translations`
        );

        for (const [lang, trans] of Object.entries(concept.translations)) {
          const where = `${label}/${lang}`;
          assert.ok(GENDER_LANGUAGES.has(lang), `${where}: unknown language code`);
          assert.ok(
            typeof trans.word === 'string' && trans.word.trim() !== '',
            `${where}: empty word`
          );
          assert.ok(
            VALID_GENDERS.has(trans.gender),
            `${where}: invalid gender "${trans.gender}"`
          );
          if (trans.gender === 'neuter') {
            assert.ok(
              NEUTER_LANGUAGES.has(lang),
              `${where}: neuter gender is not available in ${lang}`
            );
          }
          assert.notEqual(trans.article, trans.word, `${where}: article equals word`);
        }
      }
    }
  }
});
