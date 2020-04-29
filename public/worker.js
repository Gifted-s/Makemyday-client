/* eslint-disable no-restricted-globals */
const cachename = 'planna';
const urlsToCache = [
    '/',
    '/about',
    '/getstarted',
    '/signup',
    '/contact'
]
//register service worker
self.addEventListener('install', (event)=>{
event.waitUntil(caches.open(cachename).then(cache=>{
    cache.addAll(urlsToCache)
}))
})

self.addEventListener('fetch', (event)=>{
    event.respondWith(caches.match(event.request).then(response=>{
        if(response){
            return response
        }
        return fetch(event.request)
    }))
})