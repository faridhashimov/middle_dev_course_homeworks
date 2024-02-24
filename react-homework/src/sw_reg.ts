if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.ts')
        .then((reg) => console.log('Service Worker registered', reg))
        .catch((err) => console.log('Service Worker not registered', err))
}
