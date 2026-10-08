'use strict';

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function setupVmContext(gameStringsJs, initialUiLang = 'en', pathname = '/last-letter/index.html') {
  const elements = [];
  const queryAll = (selector) => {
    if (selector === '[data-gs]') {
      return elements.filter(el => el.hasAttribute('data-gs'));
    }
    return [];
  };

  const documentStub = {
    querySelectorAll: queryAll
  };

  const localStorageStore = { cosy_ui_lang: initialUiLang };
  const localStorageStub = {
    getItem(key) { return localStorageStore[key] || null; },
    setItem(key, val) { localStorageStore[key] = String(val); }
  };

  const locationStub = {
    pathname: pathname
  };

  const context = {
    window: {},
    document: documentStub,
    localStorage: localStorageStub,
    location: locationStub
  };
  context.window = context;

  vm.createContext(context);
  vm.runInContext(gameStringsJs, context);

  return { context, elements, localStorageStore, locationStub };
}

function createElement(tagName, attrs = {}, textContent = '') {
  const attributes = { ...attrs };
  return {
    tagName: tagName.toUpperCase(),
    textContent: textContent,
    getAttribute(name) { return attributes[name] || null; },
    setAttribute(name, val) { attributes[name] = String(val); },
    hasAttribute(name) { return Object.prototype.hasOwnProperty.call(attributes, name); }
  };
}

test('game-strings.js in node:vm tests', async (t) => {
  const gsPath = path.join(__dirname, '..', 'shared', 'js', 'game-strings.js');
  const gsCode = fs.readFileSync(gsPath, 'utf8');

  await t.test('a. lookup chain lang -> en -> fallback -> key', () => {
    const { context, localStorageStore } = setupVmContext(gsCode, 'fr', '/last-letter/index.html');
    context.COSYGameStrings['last-letter'] = {
      strings: {
        'key.fr_only': { fr: 'Bonjour', en: 'Hello' },
        'key.en_fallback': { en: 'Hello English' },
        'key.missing': {}
      }
    };

    const T = context.COSYGameStrings.forGame('last-letter');

    assert.strictEqual(T('key.fr_only', null, 'FB'), 'Bonjour');

    localStorageStore.cosy_ui_lang = 'de';
    assert.strictEqual(T('key.en_fallback', null, 'FB'), 'Hello English');

    assert.strictEqual(T('key.missing', null, 'Fallback Text'), 'Fallback Text');

    assert.strictEqual(T('key.missing', null, null), 'key.missing');
  });

  await t.test('b. {param} substitution incl. repeated and missing params', () => {
    const { context } = setupVmContext(gsCode, 'en', '/last-letter/index.html');
    context.COSYGameStrings['last-letter'] = {
      strings: {
        'key.params': { en: 'Hello {name}! Welcome to {place}, {name}. Unused: {other}.' }
      }
    };

    const T = context.COSYGameStrings.forGame('last-letter');
    const result = T('key.params', { name: 'Alice', place: 'Paris' });
    assert.strictEqual(result, 'Hello Alice! Welcome to Paris, Alice. Unused: {other}.');
  });

  await t.test('c. uiLang read on each call', () => {
    const { context, localStorageStore } = setupVmContext(gsCode, 'en', '/last-letter/index.html');
    context.COSYGameStrings['last-letter'] = {
      strings: {
        'key.test': { en: 'English', fr: 'Français', es: 'Español' }
      }
    };

    const T = context.COSYGameStrings.forGame('last-letter');
    assert.strictEqual(T('key.test'), 'English');

    localStorageStore.cosy_ui_lang = 'fr';
    assert.strictEqual(T('key.test'), 'Français');

    localStorageStore.cosy_ui_lang = 'es';
    assert.strictEqual(T('key.test'), 'Español');
  });

  await t.test('d. applyGameStrings updates elements with data-gs, ignores unknown keys, detects game id from pathname', () => {
    const { context, elements, localStorageStore, locationStub } = setupVmContext(gsCode, 'fr', '/lucky-numbers/index.html');

    context.COSYGameStrings['lucky-numbers'] = {
      strings: {
        'btn.start': { en: 'Start', fr: 'Démarrer' },
        'btn.stop': { en: 'Stop', fr: 'Arrêter' }
      }
    };

    const el1 = createElement('button', { 'data-gs': 'btn.start' }, 'Start Initial');
    const el2 = createElement('span', { 'data-gs': 'btn.unknown' }, 'Unknown Initial');
    elements.push(el1, el2);

    context.applyGameStrings();

    assert.strictEqual(el1.textContent, 'Démarrer');
    assert.strictEqual(el2.textContent, 'Unknown Initial');

    locationStub.pathname = '/nonexistent-game/index.html';
    el1.textContent = 'Reset';
    context.applyGameStrings();
    assert.strictEqual(el1.textContent, 'Reset');
  });
});
