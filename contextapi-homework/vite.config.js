import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
    registerType: 'prompt',
    includeAssets: ['icon.png'],
    manifest: {
        name: 'Rick & Morty',
        short_name: 'Rick&Morty',
        description: 'Rick and Morty app',
        theme_color: '#13D924',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        id: '/',
        start_url: '/',
        icons: [
            {
                src: 'src/assets/icons/icon-48x48.png',
                type: 'image/png',
                sizes: '48x48',
            },
            {
                src: 'src/assets/icons/icon-72x72.png',
                type: 'image/png',
                sizes: '72x72',
            },
            {
                src: 'src/assets/icons/icon-96x96.png',
                type: 'image/png',
                sizes: '96x96',
            },
            {
                src: 'src/assets/icons/icon-128x128.png',
                type: 'image/png',
                sizes: '128x128',
            },
            {
                src: 'src/assets/icons/icon-144x144.png',
                type: 'image/png',
                sizes: '144x144',
                purpose: 'any maskable',
            },
            {
                src: 'src/assets/icons/icon-152x152.png',
                type: 'image/png',
                sizes: '152x152',
            },
            {
                src: 'src/assets/icons/icon-192x192.png',
                type: 'image/png',
                sizes: '192x192',
            },
            {
                src: 'src/assets/icons/icon-284x284.png',
                type: 'image/png',
                sizes: '284x284',
                form_factor: 'narrow',
            },
            {
                src: 'src/assets/icons/icon-512x512.png',
                type: 'image/png',
                sizes: '512x512',
                form_factor: 'wide',
            },
        ],
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic',
        }),
        VitePWA(manifestForPlugin),
    ],
})
