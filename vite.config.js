import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  base: '/thomas-vance/' // Change to your repo name
});
