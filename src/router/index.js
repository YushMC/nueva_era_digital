import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/inicio.vue";
import Movil from "../views/movil.vue";
import Web from "../views/web.vue";
import Branding from "../views/branding.vue";
import Marketing from "../views/marketing.vue";
import Works from "../views/works.vue";
import AboutUs from "../views/aboutUs.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/movil",
    name: "Movil",
    component: Movil,
  },
  {
    path: "/web",
    name: "web",
    component: Web,
  },
  {
    path: "/branding",
    name: "Branding",
    component: Branding,
  },
  {
    path: "/marketing",
    name: "Marketing",
    component: Marketing,
  },
  {
    path: "/our-work",
    name: "Trabajos",
    component: Works,
  },
  {
    path: "/about-us",
    name: "Sobre Nosotros",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (ej. al usar el botón de "atrás"), regresa a esa posición
    if (savedPosition) {
      return savedPosition;
    }
    // Si no, desplaza a la parte superior de la página
    return { top: 0 };
  },
});

export default router;
