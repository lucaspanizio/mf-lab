import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'shell',
      remotes: {
        angularApp: 'mfLabAngular@http://localhost:4200/remoteEntry.js',
        vueApp: 'mfLabVue@http://localhost:5174/remoteEntry.js',
      },
    }),
  ],
  server: {
    port: 5173,
  },
  build: {
    target: 'esnext',
  },
});
