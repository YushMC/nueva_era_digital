import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import sitemap from "vite-plugin-sitemap";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: "http://localhost:5173",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Esto configura el alias @ para apuntar a la carpeta src
    },
  },
  base: "https://yushmc.github.io/nueva_era_digital",
});
