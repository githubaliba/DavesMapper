var CACHE_NAME="my-site-cache-v1";var urlsToCache=["/","/assets/css/compiled.css","/assets/css/compiled_print.css","/assets/icons/sprites.png","/assets/icons/sprites.svg","/assets/js/compiled_app.js","/assets/js/global.js"];self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE_NAME).then(function(b){console.log("Opened cache");return b.addAll(urlsToCache)}))});self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){if(b){return b}return fetch(a.request)}))});