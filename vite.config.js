import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  tailwindcss()
],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss')({
          darkMode: 'class', // Strictly enforce dark mode using class
        }),
        require('autoprefixer'),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src'),
    },
  },
});