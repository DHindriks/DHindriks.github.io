import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { globSync } from 'glob' // Built into modern Node environments

// Automatically finds all HTML files
const htmlFiles = globSync('**/*.html', { 
  ignore: ['node_modules/**', 'dist/**', '**/~$*'] 
}).reduce((entries, file) => {
  // Creates a clean entry name for Vite
  const entryName = file.replace(/\.html$/, '').replace(/\//g, '_')
  entries[entryName] = resolve(__dirname, file)
  return entries
}, {})

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/',
  build: {
    sourcemap: false,
    rollupOptions: {
      input: htmlFiles, 
    },
  },
})
