import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/products': {
        target: 'https://fakestoreapi.com',  
        changeOrigin: true,                  
        secure: false,                       
        rewrite: (path) => path.replace(/^\/products/, '/products') // Rewrite the path
      },
    },
  },
})
