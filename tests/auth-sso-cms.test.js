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

test('Ecosystem SSO: loadExistingSession retrieves current session from client', async () => {
  global.window = {};
  let listener = null;

  global.window.supabase = {
    createClient: () => ({
      auth: {
        getSession: () => Promise.resolve({
          data: {
            session: {
              access_token: 'existing_acc',
              refresh_token: 'existing_ref',
              user: { email: 'founder@cosylanguages.com', role: 'founder' }
            }
          }
        }),
        onAuthStateChange: (cb) => {
          listener = cb;
        }
      }
    })
  };

  COSYAuth.loadExistingSession();
  await new Promise(resolve => setTimeout(resolve, 20));

  assert.strictEqual(global.window.COSY_SESSION.access_token, 'existing_acc');
  assert.strictEqual(global.window.COSY_USER.email, 'founder@cosylanguages.com');

  if (listener) {
    listener('SIGNED_IN', {
      access_token: 'new_acc',
      refresh_token: 'new_ref',
      user: { email: 'founder@cosylanguages.com', role: 'admin' }
    });
    assert.strictEqual(global.window.COSY_SESSION.access_token, 'new_acc');
    assert.strictEqual(global.window.COSY_USER.role, 'admin');
  }

  delete global.window;
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
