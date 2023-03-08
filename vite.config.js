import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['md-linedivider'].includes(tag),
        },
      },
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // eslint-disable-next-line no-undef
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/sass/styles.scss";
        `,
      },
    },
  },
})
