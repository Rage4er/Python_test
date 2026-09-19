import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { githubPagesSpa } from '@sctg/vite-plugin-github-pages-spa';

export default defineConfig({
  base: '/Python_test/',
  plugins: [
    react(),
    githubPagesSpa(),
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  worker: {
    format: 'es',
  },
  optimizeDeps: {
    include: ['three', 'three-bvh-csg', 'three-mesh-bvh'],
  },
});
