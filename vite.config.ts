import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite"; // 自动引入
import Components from "unplugin-vue-components/vite"; // 自动引入
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/assets/scss/globalVar.scss";
           @import "/src/assets/scss/globalMixin.scss";`,
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3400",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
