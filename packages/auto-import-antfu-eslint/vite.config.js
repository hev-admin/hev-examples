import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'vue-router': [
            'createRouter',
            'createWebHashHistory',
            'createWebHistory',
          ],
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.js',
        globalsPropValue: true,
      },
    }),
  ],

})
