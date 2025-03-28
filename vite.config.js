import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import sitemap from "vite-plugin-sitemap";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: "https://nuevaeradigital.mx",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Esto configura el alias @ para apuntar a la carpeta src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/style.scss" as *;`, // Cambié @use por @import aquí
      },
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
  },
});
