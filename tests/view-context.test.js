const assert = require('assert');

// Mock browser globals for testing ViewContext in Node.js environment
const mockWindow = {
  innerWidth: 1024,
  location: { search: '' },
  addEventListener: () => {},
  dispatchEvent: () => true
};
mockWindow.self = mockWindow;
mockWindow.top = mockWindow;
global.window = mockWindow;

const storageMap = new Map();
global.localStorage = {
  getItem: (k) => storageMap.get(k) || null,
  setItem: (k, v) => storageMap.set(k, String(v)),
  removeItem: (k) => storageMap.delete(k),
  clear: () => storageMap.clear()
};

const docElement = { dataset: {} };
global.document = {
  documentElement: docElement,
  querySelectorAll: () => [],
  querySelector: () => null,
  createElement: (tag) => ({
    tagName: tag,
    className: '',
    setAttribute: () => {},
    appendChild: () => {},
    addEventListener: () => {}
  }),
  readyState: 'complete',
  addEventListener: () => {}
};

const ViewContext = require('../_engine/view_context.js');

console.log('Running ViewContext tests...');

// 1. Default context fallback when teacher mode is off
storageMap.clear();
mockWindow.location.search = '';
delete docElement.dataset.context;
global.window.innerWidth = 1024;
assert.strictEqual(ViewContext.determineContext(), 'projector', 'Fallback context should be projector');

// 2. Phone viewport width < 480
global.window.innerWidth = 375;
assert.strictEqual(ViewContext.determineContext(), 'phone', 'Viewport < 480 should return phone');

// 3. (a) Saved context is ignored and removed when teacher mode is off
global.window.innerWidth = 1024;
mockWindow.location.search = '';
storageMap.set('cosy_view_context', 'online');
storageMap.delete('cosy_teacher_mode');
assert.strictEqual(ViewContext.determineContext(), 'projector', 'Saved context should be ignored when teacher mode is off');
assert.strictEqual(localStorage.getItem('cosy_view_context'), null, 'Saved context should be deleted when teacher mode is off');

// 4. (b) Saved context is honoured when teacher mode is on
storageMap.set('cosy_teacher_mode', '1');
ViewContext.setContext('online', true);
assert.strictEqual(docElement.dataset.context, 'online', 'Set context should update documentElement dataset');
assert.strictEqual(localStorage.getItem('cosy_view_context'), 'online', 'Set context should persist to localStorage');
assert.strictEqual(ViewContext.determineContext(), 'online', 'Saved context should be honoured when teacher mode is on');

// Also test teacher mode via ?teacher=1 URL query parameter
storageMap.delete('cosy_teacher_mode');
mockWindow.location.search = '?teacher=1';
storageMap.set('cosy_view_context', 'phone');
assert.strictEqual(ViewContext.determineContext(), 'phone', 'Saved context should be honoured when ?teacher=1 URL parameter is present');

// 5. (c) ?data-context= still works with teacher mode off
mockWindow.location.search = '?data-context=phone';
storageMap.delete('cosy_teacher_mode');
storageMap.delete('cosy_view_context');
assert.strictEqual(ViewContext.determineContext(), 'phone', '?data-context= should override even when teacher mode is off');

mockWindow.location.search = '?data-context=online';
assert.strictEqual(ViewContext.determineContext(), 'online', '?data-context=online should work with teacher mode off');

// Reset search parameter
mockWindow.location.search = '';

// 6. Switch context manually when teacher mode is on
storageMap.set('cosy_teacher_mode', '1');
ViewContext.setContext('phone', true);
assert.strictEqual(docElement.dataset.context, 'phone', 'Manual set to phone should work');
assert.strictEqual(localStorage.getItem('cosy_view_context'), 'phone');

ViewContext.setContext('projector', true);
assert.strictEqual(docElement.dataset.context, 'projector', 'Manual set to projector should work');
assert.strictEqual(localStorage.getItem('cosy_view_context'), 'projector');

console.log('✓ ViewContext unit tests passed successfully!');
