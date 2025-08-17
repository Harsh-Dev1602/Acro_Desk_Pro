import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
  ],
   server: {
    port: 3002,
    proxy: {
      "/api": {
        target: "https://acro-desk-pro-up2l.vercel.app/",
        changeOrigin: true,
      },
    },
  }
})