import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  base: "/app/", // Cambia esto según tu ruta de despliegue
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Esto configura el alias @ para apuntar a la carpeta src
    },
  },
});
