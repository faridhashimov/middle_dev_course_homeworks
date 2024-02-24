const staticCache = 'notes-static_site-v1'
const dynamicCache = 'notes-dynamic-site-v1'
const ASSETS = [
    '/',
    '/index.html',
    '/src/index.css',
    '/src/App.css',
    '/src/App.tsx',
    '/src/main.tsx',
]

// install event
self.addEventListener('install', async () => {
    const cache = await caches.open(staticCache)
    await cache.addAll(ASSETS)
})

// activate event
self.addEventListener('activate', async () => {
    const cacheKeysArr = await caches.keys()
    await Promise.all(
        cacheKeysArr
            .filter((key) => key !== staticCache && key !== dynamicCache)
            .map((key) => caches.delete(key))
    )
})

// fetch evenet
self.addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith(catcheFirst(event.request))
})

async function catcheFirst(request: Request) {
    const cached = await caches.match(request)
    try {
        return (
            cached ??
            (await fetch(request).then(() => {
                return networkFirst(request)
            }))
        )
    } catch (error) {
        return networkFirst(request)
    }
}

async function networkFirst(request: Request) {
    const cache = await caches.open(dynamicCache)
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (error) {
        const cached = await cache.match(request)
        return cached ?? (await caches.match('/offline'))
    }
}
