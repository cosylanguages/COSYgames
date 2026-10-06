const test = require('node:test');
const assert = require('node:assert');
const COSYAuth = require('../shared/js/auth-sso.js');
const CMSEditor = require('../shared/js/cms-editor.js');

test('Ecosystem SSO: parseHashParams parses access_token and refresh_token correctly', () => {
  const hash = '#access_token=test_access_123&refresh_token=test_refresh_456&token_type=bearer';
  const parsed = COSYAuth.parseHashParams(hash);
  assert.strictEqual(parsed.access_token, 'test_access_123');
  assert.strictEqual(parsed.refresh_token, 'test_refresh_456');
  assert.strictEqual(parsed.token_type, 'bearer');
});

test('Ecosystem SSO: parseHashParams handles empty hash gracefully', () => {
  const parsed = COSYAuth.parseHashParams('');
  assert.deepStrictEqual(parsed, {});
});

test('Founder CMS Editor: role authorization detection', () => {
  global.window = {
    COSY_USER: { role: 'admin' }
  };
  assert.strictEqual(CMSEditor.isAuthorized(), true);

  global.window.COSY_USER = { role: 'founder' };
  assert.strictEqual(CMSEditor.isAuthorized(), true);

  global.window.COSY_USER = { role: 'owner' };
  assert.strictEqual(CMSEditor.isAuthorized(), true);

  global.window.COSY_USER = { role: 'student' };
  assert.strictEqual(CMSEditor.isAuthorized(), false);

  delete global.window;
});

test('Founder CMS Editor: applyOverrides updates target elements in DOM', () => {
  const elements = {};
  global.document = {
    querySelector: (selector) => {
      return elements[selector] || null;
    }
  };

  const dummyEl = { innerHTML: '' };
  elements['[data-cms-key="hero_title"]'] = dummyEl;

  CMSEditor.applyOverrides({ hero_title: 'New Hero Title' });
  assert.strictEqual(dummyEl.innerHTML, 'New Hero Title');

  delete global.document;
});
