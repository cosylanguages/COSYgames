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

// 1. Default context fallback
storageMap.clear();
delete docElement.dataset.context;
global.window.innerWidth = 1024;
assert.strictEqual(ViewContext.determineContext(), 'projector', 'Fallback context should be projector');

// 2. Phone viewport width < 480
global.window.innerWidth = 375;
assert.strictEqual(ViewContext.determineContext(), 'phone', 'Viewport < 480 should return phone');

// 3. Saved localStorage context
global.window.innerWidth = 1024;
ViewContext.setContext('online', true);
assert.strictEqual(docElement.dataset.context, 'online', 'Set context should update documentElement dataset');
assert.strictEqual(localStorage.getItem('cosy_view_context'), 'online', 'Set context should persist to localStorage');
assert.strictEqual(ViewContext.determineContext(), 'online', 'Saved context should override fallback');

// 4. Switch to phone manually
ViewContext.setContext('phone', true);
assert.strictEqual(docElement.dataset.context, 'phone', 'Manual set to phone should work');
assert.strictEqual(localStorage.getItem('cosy_view_context'), 'phone');

// 5. Switch to projector manually
ViewContext.setContext('projector', true);
assert.strictEqual(docElement.dataset.context, 'projector', 'Manual set to projector should work');
assert.strictEqual(localStorage.getItem('cosy_view_context'), 'projector');

console.log('✓ ViewContext unit tests passed successfully!');
