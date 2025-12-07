import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: 'examples', // Racine du serveur de dev
  server: {
    port: 3001,
    open: true,
    host: true
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
        aurora: path.resolve(__dirname, 'src/aurora.css'),
        'aurora-js': path.resolve(__dirname, 'src/aurora.js')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'aurora.css') return 'aurora.min.css';
          return '[name][extname]';
        },
        entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'aurora-js') return 'aurora.js';
            return '[name].js';
        }
      }
    }
  }
});
