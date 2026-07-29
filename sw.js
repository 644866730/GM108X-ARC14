const CACHE_NAME = "maya-static-v20260729-5";
const PRECACHE_URLS = [
    "./test.html",
    "./test-start.html",
    "./test-quiz.html",
    "./test-result.html",
    "./style.css",
    "./daily-tarot.js",
    "./test.js",
    "./cache-register.js",
    "./images/test-new-pc.webp",
    "./images/test-new-mobile.webp",
    "./images/vx3-qr.webp"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
                return Promise.resolve();
            })))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
                    return response;
                })
                .catch(() => caches.match(request).then(cached => cached || caches.match("./test.html")))
        );
        return;
    }

    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) {
                return cached;
            }

            return fetch(request).then(response => {
                const copy = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
                return response;
            });
        })
    );
});
