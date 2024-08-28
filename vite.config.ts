import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url))
    }
  },
  server: {
    port: 15_173,
    open: true,
    proxy: {
        "/http": "http://geth.coin.ramwin.com",
    },
  },
})
