import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import Inicio from "../views/inicio.vue";
import Movil from "../views/movil.vue";
import Web from "../views/web.vue";
import Branding from "../views/branding.vue";
import Marketing from "../views/marketing.vue";
import Works from "../views/works.vue";
import AboutUs from "../views/aboutUs.vue";
import Contact from "../views/contact.vue";
import Desktop from "../views/desktop.vue";

// Detecta si estamos en un entorno de SSR/SSG
const isSSR = typeof window === "undefined";

// Usa `createMemoryHistory` si estamos en SSR/SSG, y `createWebHistory` si estamos en el navegador
const router = createRouter({
  history: isSSR ? createMemoryHistory() : createWebHistory(),
  routes: [
    { path: "/", name: "Inicio", component: Inicio },
    { path: "/movil", name: "Movil", component: Movil },
    { path: "/web", name: "web", component: Web },
    { path: "/desktop", name: "Desktop", component: Desktop },
    { path: "/branding", name: "Branding", component: Branding },
    { path: "/marketing", name: "Marketing", component: Marketing },
    { path: "/our-work", name: "Trabajos", component: Works },
    { path: "/about-us", name: "Sobre Nosotros", component: AboutUs },
    { path: "/contact", name: "Contacto", component: Contact },
  ],
});

export default router;
