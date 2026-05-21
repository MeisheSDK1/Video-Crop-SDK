// vite.config.js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    vue(),
    // 参考地址 https://github.com/vitejs/vite/issues/3909
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
          next();
        });
      },
    },
  ],
  server: {
    port: 8080,
    host: '0.0.0.0'
  }
})
