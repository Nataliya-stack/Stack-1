import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { globSync } from 'glob' // Viene incluido en Node.js moderno

// Buscamos todos los archivos .html en la raíz o subcarpetas 
// (ignorando node_modules y dist)
const htmlFiles = globSync('**/*.html', { 
  ignore: ['node_modules/**', 'dist/**'] 
}).reduce((entries, file) => {
  // Creamos un nombre amigable para cada archivo 
  // (ej: "about" para "pages/about.html")
  const name = file.replace(/\.html$/, '').replace(/\\/g, '/');
  entries[name] = resolve(__dirname, file);
  return entries;
}, {});

export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: htmlFiles // ✨ ¡Vite se configura solo con todos tus HTML!
    }
  }
})