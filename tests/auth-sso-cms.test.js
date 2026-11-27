const test = require('node:test');
const assert = require('node:assert');
const COSYAuth = require('../shared/js/auth-sso.js');
const CMSEditor = require('../shared/js/cms-editor.js');

test.beforeEach(() => {
  COSYAuth._resetStateForTesting();
});

test('a. unconfigured and placeholder values: no script created, no createClient, no fetch, no toolbar, no throw', async () => {
  global.window = {};
  let scriptCreated = false;
  let clientCreated = false;

  global.document = {
    createElement: (tag) => {
      if (tag === 'script') scriptCreated = true;
      if (tag === 'div') return { id: '', style: {}, innerHTML: '', appendChild: () => {} };
      return {};
    },
    head: { appendChild: () => {} },
    body: { appendChild: () => {} },
    querySelectorAll: () => [],
    getElementById: () => null
  };

  global.window.supabase = {
    createClient: () => {
      clientCreated = true;
      return {};
    }
  };

  assert.strictEqual(COSYAuth.isConfigured(), false);

  const client = await COSYAuth.getClient();
  assert.strictEqual(client, null);
  assert.strictEqual(scriptCreated, false);
  assert.strictEqual(clientCreated, false);

  const overrides = await CMSEditor.fetchAndApplyOverrides();
  assert.strictEqual(overrides, null);

  CMSEditor.renderToolbar();
  assert.strictEqual(global.document.getElementById('cosy-cms-toolbar'), null);

  delete global.window;
  delete global.document;
});

test('b. isConfigured true/false cases', () => {
  global.window = {};

  // Default / unconfigured
  assert.strictEqual(COSYAuth.isConfigured(), false);

  // 'xyzcompany' or 'public-anon-key'
  global.window.COSY_SUPABASE_URL = 'https://xyzcompany.supabase.co';
  global.window.COSY_SUPABASE_ANON_KEY = 'public-anon-key';
  assert.strictEqual(COSYAuth.isConfigured(), false);

  // http:// URL
  global.window.COSY_SUPABASE_URL = 'http://myproject.supabase.co';
  global.window.COSY_SUPABASE_ANON_KEY = 'valid-key';
  assert.strictEqual(COSYAuth.isConfigured(), false);

  // Non-supabase host
  global.window.COSY_SUPABASE_URL = 'https://myproject.example.com';
  global.window.COSY_SUPABASE_ANON_KEY = 'valid-key';
  assert.strictEqual(COSYAuth.isConfigured(), false);

  // Valid configuration
  global.window.COSY_SUPABASE_URL = 'https://validproject.supabase.co';
  global.window.COSY_SUPABASE_ANON_KEY = 'valid-anon-key-123';
  assert.strictEqual(COSYAuth.isConfigured(), true);

  delete global.window;
});

test('c. getUserRole/isAuthorized: app_metadata.role founder -> true; user_metadata or top-level -> false', () => {
  global.window = {};

  // app_metadata.role 'founder' -> true
  global.window.COSY_USER = { app_metadata: { role: 'founder' } };
  assert.strictEqual(CMSEditor.getUserRole(), 'founder');
  assert.strictEqual(CMSEditor.isAuthorized(), true);

  // app_metadata.role 'admin' -> true
  global.window.COSY_USER = { app_metadata: { role: 'admin' } };
  assert.strictEqual(CMSEditor.isAuthorized(), true);

  // app_metadata.role 'owner' -> true
  global.window.COSY_USER = { app_metadata: { role: 'owner' } };
  assert.strictEqual(CMSEditor.isAuthorized(), true);

  // user_metadata.role 'founder' -> false
  global.window.COSY_USER = { user_metadata: { role: 'founder' } };
  assert.strictEqual(CMSEditor.getUserRole(), null);
  assert.strictEqual(CMSEditor.isAuthorized(), false);

  // top-level role 'admin' -> false
  global.window.COSY_USER = { role: 'admin' };
  assert.strictEqual(CMSEditor.getUserRole(), null);
  assert.strictEqual(CMSEditor.isAuthorized(), false);

  delete global.window;
});

test('d. sanitizeHtml tests', () => {
  // <script> neutralized
  assert.strictEqual(CMSEditor.sanitizeHtml('<script>alert(1)</script>'), 'alert(1)');

  // <img src=x onerror=...> neutralized
  assert.strictEqual(CMSEditor.sanitizeHtml('<img src=x onerror=alert(1)>Hi <b>there</b>'), 'Hi <b>there</b>');

  // javascript: link neutralized
  assert.strictEqual(CMSEditor.sanitizeHtml('<a href="javascript:alert(1)">link</a>'), '<a>link</a>');

  // padded JaVaScript link neutralized
  assert.strictEqual(CMSEditor.sanitizeHtml('<a href="  JaVaScript:alert(1)">link</a>'), '<a>link</a>');

  // style/on* attributes stripped
  assert.strictEqual(CMSEditor.sanitizeHtml('<p style="color:red" onclick="alert(1)">text</p>'), '<p>text</p>');

  // nested/unclosed tags properly closed
  assert.strictEqual(CMSEditor.sanitizeHtml('<b><i>nested</b>'), '<b><i>nested</i></b>');

  // entities handled
  assert.strictEqual(CMSEditor.sanitizeHtml('text &amp; test'), 'text &amp; test');
  assert.strictEqual(CMSEditor.sanitizeHtml('text & test'), 'text &amp; test');

  // comments removed
  assert.strictEqual(CMSEditor.sanitizeHtml('<!-- comment -->text'), 'text');

  // <svg onload=...> neutralized
  assert.strictEqual(CMSEditor.sanitizeHtml('<svg onload=alert(1)>'), '');

  // plain https link keeps href and gains rel/target
  assert.strictEqual(
    CMSEditor.sanitizeHtml('<a href="https://example.com">x</a>'),
    '<a href="https://example.com" rel="noopener noreferrer" target="_blank">x</a>'
  );

  // <b>bold</b> survives
  assert.strictEqual(CMSEditor.sanitizeHtml('<b>bold</b>'), '<b>bold</b>');
});

test('e. applyOverrides tests', () => {
  const elements = [
    {
      attrs: { 'data-cms-key': 'valid_key' },
      getAttribute: function(a) { return this.attrs[a]; },
      hasAttribute: function(a) { return a in this.attrs; },
      innerHTML: ''
    },
    {
      attrs: { 'data-cms-key': 'i18n_key', 'data-i18n': 'title' },
      getAttribute: function(a) { return this.attrs[a]; },
      hasAttribute: function(a) { return a in this.attrs; },
      innerHTML: 'original i18n text'
    }
  ];

  global.document = {
    querySelectorAll: (selector) => {
      if (selector === '[data-cms-key]') return elements;
      return [];
    }
  };

  const invalidKeys = {};
  invalidKeys['#go-body'] = 'pwned';
  invalidKeys['.hero'] = 'pwned';
  invalidKeys['body'] = 'pwned';
  invalidKeys['"] x[a="'] = 'pwned';
  invalidKeys['a'.repeat(65)] = 'pwned';
  invalidKeys['i18n_key'] = 'pwned';
  invalidKeys['valid_key'] = '<img src=x onerror=alert(1)>Hi <b>there</b>';

  CMSEditor.applyOverrides(invalidKeys);

  // Valid data-cms-key receives sanitized content
  assert.strictEqual(elements[0].innerHTML, 'Hi <b>there</b>');

  // Element with data-i18n is skipped
  assert.strictEqual(elements[1].innerHTML, 'original i18n text');

  delete global.document;
});

test('f. link interception: exact ssoOrigins match', () => {
  global.window = {
    location: { href: 'https://cosylanguages.github.io/COSYgames/', origin: 'https://cosylanguages.github.io' },
    COSY_SUPABASE_URL: 'https://validproject.supabase.co',
    COSY_SUPABASE_ANON_KEY: 'valid-key',
    COSY_SSO_ORIGINS: ['https://app.example.org'],
    COSY_SESSION: { access_token: 'acc_123', refresh_token: 'ref_456' }
  };

  let listener = null;
  global.document = {
    addEventListener: (event, cb) => {
      if (event === 'click') listener = cb;
    }
  };

  COSYAuth.attachEcosystemLinkInterceptor();
  assert.ok(listener, 'Click listener should be registered');

  function makeLink(href) {
    return {
      nodeName: 'A',
      href: href,
      getAttribute: (attr) => attr === 'href' ? href : null,
      parentNode: null
    };
  }

  // 1. Exact matched origin -> receives tokens
  const target1 = makeLink('https://app.example.org/dashboard');
  listener({ target: target1 });
  assert.strictEqual(
    target1.href,
    'https://app.example.org/dashboard#access_token=acc_123&refresh_token=ref_456'
  );

  // 2. github COSYtools link -> gets none
  const target2 = makeLink('https://github.com/cosylanguages/COSYtools');
  listener({ target: target2 });
  assert.strictEqual(target2.href, 'https://github.com/cosylanguages/COSYtools');

  // 3. Evil domain -> gets none
  const target3 = makeLink('https://notcosy.evil.com');
  listener({ target: target3 });
  assert.strictEqual(target3.href, 'https://notcosy.evil.com');

  // 4. HTTP protocol -> gets none
  const target4 = makeLink('http://app.example.org/dashboard');
  listener({ target: target4 });
  assert.strictEqual(target4.href, 'http://app.example.org/dashboard');

  // 5. Same origin link -> gets none
  const target5 = makeLink('https://cosylanguages.github.io/COSYgames/word-linker/');
  listener({ target: target5 });
  assert.strictEqual(target5.href, 'https://cosylanguages.github.io/COSYgames/word-linker/');

  delete global.window;
  delete global.document;
});

test('g. parseHashParams("#a=%E0%A4%A&b=1") does not throw and returns {b:"1"}', () => {
  const parsed = COSYAuth.parseHashParams('#a=%E0%A4%A&b=1');
  assert.strictEqual(parsed.b, '1');
  assert.strictEqual(parsed.a, undefined);
});
