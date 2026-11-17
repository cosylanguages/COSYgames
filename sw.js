/* COSYgames PWA Offline Service Worker */
const CACHE_NAME = 'cosygames-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './shared/css/tokens.css',
  './shared/css/fonts.css',
  './shared/css/games.css',
  './shared/css/hub.css',
  './shared/css/nav.css',
  './shared/css/cosy-icons.css',
  './shared/css/motion.css',
  './shared/styles/game-styles.css',
  './shared/images/cosygames-logo.png',
  './shared/images/cosylanguages.png',
  './shared/js/nav.js',
  './shared/js/i18n.js',
  './shared/js/game-strings.js',
  './shared/js/game-taxonomy.js',
  './shared/js/hub-core.js',
  './shared/js/hub.js',
  './shared/utils/game-utils.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key.startsWith('cosygames-') && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  // Only same-origin requests are cached; third-party calls fall through to the network.
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request).then((cached) => {
        if (cached) return cached;
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      }))
  );
});
