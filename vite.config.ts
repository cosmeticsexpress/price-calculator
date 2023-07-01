import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

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
      manifestFilename: 'manifest.json',
      manifest: manifest as Partial<ManifestOptions>,
    }),
  ],
  base: '/price-calculator/',
});
