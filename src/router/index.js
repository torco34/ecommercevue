import { createRouter, createWebHistory } from "vue-router";
import PagesHome from "@/views/PagesHome.vue";
import PagesHogar from "@/views/PagesHogar.vue";
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
      component: PageStore,
      meta: { title: "Tienda" }
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
      meta: { title: "Mujer" }
    },

    {
      path: "/hogar",
      name: "Hogar",
      component: PagesHogar,
      meta: { title: "Hogar" }
    },
  
    {
      path: "/items/:id",
      name: "ItemDetails",
      component: () => import("../components/CartPreview.vue"),
      meta: { title: "Seleccion de talla" }
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
