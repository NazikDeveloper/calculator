// const CACHE_NAME = "price-calculator-v3";

// const FILES_TO_CACHE = [
//   "./",
//   "./index.html",
//   "./css/style.css",
//   "./manifest.json",
//   "./image/icon-180.png",
//   "./image/icon-192.png",
//   "./image/icon-512.png",
//   "./fonts/poppins-v24-latin-regular.woff2",
//   "./fonts/poppins-v24-latin-800.woff2",
// ];

// self.addEventListener("install", event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => {
//       return cache.addAll(FILES_TO_CACHE);
//     })
//   );
// });

// self.addEventListener("fetch", event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });

const CACHE_NAME = "price-calculator-v4";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./manifest.json",
  "./image/icon-180.png",
  "./image/icon-192.png",
  "./image/icon-512.png",
  "./fonts/poppins-v24-latin-regular.woff2",
  "./fonts/poppins-v24-latin-800.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});






















