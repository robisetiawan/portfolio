import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // [1] Impor plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() as unknown as PluginOption, // [2] Tambahkan ke array plugins
  ],
})
