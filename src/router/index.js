import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("../views/inicio.vue"),
  },
  {
    path: "/movil",
    name: "Movil",
    component: () => import("../views/movil.vue"),
  },
  {
    path: "/web",
    name: "web",
    component: () => import("../views/web.vue"),
  },
  {
    path: "/branding",
    name: "Branding",
    component: () => import("../views/branding.vue"),
  },
  {
    path: "/marketing",
    name: "Marketing",
    component: () => import("../views/marketing.vue"),
  },
  {
    path: "/our-work",
    name: "Trabajos",
    component: () => import("../views/works.vue"),
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
