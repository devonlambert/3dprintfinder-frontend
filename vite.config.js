import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'  // Add this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      name: 'log-request',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          console.log(`Request: ${req.url}`);
          next();
        });
      },
    },
  ],
  assetsInclude: ['**/*.svg', '**/*.ico', '**/*.png'],
  publicDir: 'public',
  build: {
    sourcemap: true,
  },
  server: {
    fs: {
      strict: false,
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})