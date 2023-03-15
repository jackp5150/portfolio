import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [react(), WindiCSS()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  build: {
    outDir: 'dist',
    publicPath: '/portfolio/dist/assets/',
  },
});
