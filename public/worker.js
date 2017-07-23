const CACHE_NAME = 'app-cache';

const urlsToCache = [
  '/',
  'js/PostRenderer.js',
  'js/PostService.js',
  'js/PostErrorHandler.js',
  'js/app.js',
  'styles/styles.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    return cache.addAll(urlsToCache);
  }));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => {
    return response ? response : fetch(event.request);
  }));
});