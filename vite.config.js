import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: transformAssetUrls
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
  // alias: {
  //   '@': path.join(__dirname, 'src')
  // }
})
