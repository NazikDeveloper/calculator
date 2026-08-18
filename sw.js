const CACHE_NAME = "price-calculator-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./manifest.json",
  "./image/icon-192.png",
  "./image/icon-512.png",
  "./fonts/poppins-v24-latin-regular.woff2",
  "./fonts/poppins-v24-latin-500.woff2",
  "./fonts/poppins-v24-latin-600.woff2",
  "./fonts/poppins-v24-latin-800.woff2",
  "./fonts/poppins-v24-latin-900.woff2",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});























// const CACHE_NAME = "price-calculator-v2";

// const FILES_TO_CACHE = [
//   "./",
//   "./index.html",
//   "./css/style.css",
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