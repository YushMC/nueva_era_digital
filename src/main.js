import { ViteSSG } from "vite-ssg";
import { createHead } from "@unhead/vue";
// import "./styles/style.css";
import { head } from "./../vite-ssg.config.js"; // Importar la configuración de head
import App from "./App.vue";
import router from "./router";

// Función para crear la app con Vite SSG
export const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  ({ app }) => {
    app.use(head);
  }
);
