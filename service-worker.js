/* Wetter & Kalender PWA Service Worker
 * Cachet nur die lokale App-Shell. Externe Wetter-, Warnungs- und Radar-APIs
 * werden absichtlich nicht gecacht; das ist fuer Stufe 2 vorgesehen.
 */
const CACHE_PREFIX = 'wetter-pwa-';
const CACHE_NAME = 'wetter-pwa-shell-v1';
const APP_ROOT = new URL('./', self.location.href);
const APP_FILES = [
  '',
  'index.html',
  'Wetter.html',
  'Kalender.html',
  'Regenradar.html',
  'offline.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png'
].map(path => new URL(path, APP_ROOT).href);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_FILES);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Keine Kontrolle ueber externe API- oder Embed-Anfragen.
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          await cache.put(request, response.clone());
        }
        return response;
      } catch (_) {
        // Suchparameter ignorieren: Regenradar.html?lat=... nutzt offline
        // die lokale HTML-Datei; die Suchparameter bleiben in der Navigations-URL.
        const cachedPage = await cache.match(request, {ignoreSearch:true});
        if (cachedPage) return cachedPage;

        const rootPath = new URL(APP_ROOT).pathname;
        if (url.pathname === rootPath || url.pathname.endsWith('/index.html')) {
          const weatherPage = await cache.match(new URL('Wetter.html', APP_ROOT).href);
          if (weatherPage) return weatherPage;
        }

        const offlinePage = await cache.match(new URL('offline.html', APP_ROOT).href);
        if (offlinePage) return offlinePage;
        return new Response('Offline: Die angeforderte Seite ist nicht im lokalen Cache.', {
          status:503,
          headers:{'Content-Type':'text/plain; charset=utf-8'}
        });
      }
    })());
    return;
  }

  // Lokale statische Dateien: Cache first, danach Netzwerk.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok && response.type === 'basic') {
        await cache.put(request, response.clone());
      }
      return response;
    } catch (_) {
      return new Response('', {status:504, statusText:'Gateway Timeout'});
    }
  })());
});
