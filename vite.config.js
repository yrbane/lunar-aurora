import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'examples', // Racine du serveur de dev
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, 'src') // Permet de résoudre /src depuis examples
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'examples/index.html'),
        aurora: path.resolve(__dirname, 'src/aurora.css')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'aurora.css') return 'aurora.min.css';
          return '[name][extname]';
        }
      }
    }
  }
});
