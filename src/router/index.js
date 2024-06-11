import { createRouter, createWebHistory } from "vue-router";
import PagesHome from "@/views/PagesHome.vue";
import PagesHogar from "@/views/PagesHogar.vue";
import PageStore from "@/views/PageStore.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import PagesColeccion from "@/views/PagesColeccion.vue";
import LoginStore from "@/components/auth/LoginStore.vue";
import FormStore from "@/components/auth/FormStore.vue";

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
      name: "Tienda",
      component: PageStore,
      meta: { title: "Tienda" }
    },
    {
      path: "/coleccion",
      name: "Coleccion",
      component: PagesColeccion,
      meta: { title: "Colección" }
    },
    {
      path: "/mujer",
      name: "Mujer",
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
      meta: { title: "Selección de talla" }
    },
    {
      path: "/product/:id",
      name: "Product",
      component: ProductDetails,
    },
    {
      path: "/cardElement",
      name: "CardElement",
      component: () => import("../components/CardElements.vue"),
      meta: { title: "Carrito " }
    },
    {
      path: "/login",
      name: "Login",
      component: LoginStore,
    },
    {
      path: "/form",
      name: "Form",
      component: FormStore,
      meta: { title: "Login" }
    },
  ],
});

export default router;
