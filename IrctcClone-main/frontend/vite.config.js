import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// In dev, /api is proxied to the Express server so the browser sees a single origin.
// When backend is down, proxy is disabled and frontend uses mock data.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { 
    port: 5173, 
    proxy: process.env.VITE_NO_PROXY ? {} : { 
      '/api': { 
        target: process.env.VITE_PROXY_TARGET || 'http://localhost:5000', 
        changeOrigin: true 
      } 
    } 
  },
});
