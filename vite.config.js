import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets',
          dest: '' // Copy vào public/assets/
        }
      ]
    })
  ],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})
