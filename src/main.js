import { ViteSSG } from "vite-ssg";
import { createHead } from "@unhead/vue";
// import "./styles/style.css";
import App from "./App.vue";
import router from "./router";

// Función para crear la app con Vite SSG
export const createApp = ViteSSG(
  App,
  { routes: router.options.routes }, // Asegura que use las rutas definidas en Vue Router
  ({ app, router }) => {
    const head = createHead();
    app.use(router);
    app.use(head); // Agrega el gestor de meta tags
  }
);
