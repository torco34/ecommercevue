import { createRouter, createWebHistory } from "vue-router";
import PagesHome from "@/views/PagesHome.vue";
import PagesHombre from "@/views/PagesHombre.vue";
import PageStore from "@/views/PageStore.vue";
import ProductDetails from  "@/components/ProductDetails.vue"
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Inicio",
      component: PagesHome
    },
    {
      path: "/store",
      name: "tienda",
      component: PageStore
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
      component: PagesHombre
      
    },
    {
      path: "/items/:id",
      name: "items",
      component: () => import("../components/CartPreview.vue"),
    },

    {
      path: "/product/:id",
      name: "product",
      component: ProductDetails,
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
