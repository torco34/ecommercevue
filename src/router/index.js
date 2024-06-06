import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Inicio",
      component: () => import("../views/PagesHome.vue"),
    },
    {
      path: "/ropa",
      name: "romap",
      component: () => import("../views/PagesRopa.vue"),
    },

    {
      path: "/mujer",
      name: "mujer",
      component: () => import("../views/PagesMujer.vue"),
    },

    {
      path: "/hombre",
      name: "hombres",
      component: () => import("../views/PagesHombre"),
    },
    {
      path: "/items/:id",
      name: "items",
      component: () => import("../components/CartPreview.vue"),
    },
    {
      path: "/cardElement",
      name: "cardElement",
      component: () => import("../components/CardElements.vue"),
    },
    {
      path: "/formLogin",
      name: "formLogin",
      component: () => import("../components/formLogin.vue"),
    },
  ],
});

export default router;
