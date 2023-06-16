import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      manifestFilename: 'manifest.webmanifest',
      manifest: {
        name: 'Cosmetics Express Price Calculator',
        short_name: 'Price Calculator',
        icons: [
          {
            src: '/price-calculator/icons/android-launchericon-512-512.png',
            sizes: '512x512',
            purpose: 'maskable',
          },
          {
            src: '/price-calculator/icons/android-launchericon-192-192.png',
            sizes: '192x192',
          },
          {
            src: '/price-calculator/icons/android-launchericon-144-144.png',
            sizes: '144x144',
          },
          {
            src: '/price-calculator/icons/android-launchericon-96-96.png',
            sizes: '96x96',
          },
          {
            src: '/price-calculator/icons/android-launchericon-72-72.png',
            sizes: '72x72',
          },
          {
            src: '/price-calculator/icons/android-launchericon-48-48.png',
            sizes: '48x48',
          },
        ],
        start_url: './price-calculator/',
        display: 'standalone',
        background_color: 'white',
        theme_color: 'white',
        orientation: 'portrait',
        lang: 'he',
      },
    }),
  ],
  base: '/price-calculator/',
});
