const CACHE_NAME = 'cache-v3';

const urlsToCache = [
  '/',
  'js/PostRenderer.js',
  'js/PostSender.js',
  'js/PostErrorHandler.js',
  'js/app.js',
  'styles/styles.css'
];

self.addEventListener('install', (event) => {
  // event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
  //   return cache.addAll(urlsToCache);
  // }));
});

self.addEventListener('fetch', (event) => {

  // event.respondWith(caches.match(event.request).then((response) => {
  //   return response ? response : fetch(event.request);
  // }));

});