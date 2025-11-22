import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ESTA LÍNEA ES CRUCIAL PARA GITHUB PAGES
  base: '/API-Consumer/', 
});
