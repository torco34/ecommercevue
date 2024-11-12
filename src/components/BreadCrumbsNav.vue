<template>
  <div>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="nav-link" :class="{'active-link': isHomePage}">Inicio</router-link>
        </li>
        <li v-if="isHogarPage" class="breadcrumb-item">
          <router-link :to="`/hogar/${$route.params.id}`" class="nav-link" :class="{'active-link': isHogarPage}">Compras</router-link>
        </li>
        <li v-if="isCreatePage" class="breadcrumb-item">
          <router-link to="/create" class="nav-link" :class="{'active-link': isCreatePage}">Crear</router-link>
        </li>
        <li v-if="isUpdatePage" class="breadcrumb-item">
          <router-link :to="`/update/${$route.params.id}`" class="nav-link" :class="{'active-link': isUpdatePage}">Actualizar</router-link>
        </li>
        <li v-if="isDeletePage" class="breadcrumb-item">
          <router-link :to="`/delete/${$route.params.id}`" class="nav-link" :class="{'active-link': isDeletePage}">Eliminar</router-link>
        </li>
        <li v-if="isLoginPage" class="breadcrumb-item">
          <router-link to="/formLogin" class="nav-link" :class="{'active-link': isLoginPage}">Iniciar Sesión</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ pageTitle }}</li>
      </ol>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const route = useRoute();

    const pageTitle = computed(() => route.meta.title);

    const isHomePage = computed(() => route.path === '/');
    const isHogarPage = computed(() => route.path.startsWith('/hogar/') && route.params.id !== undefined);
    const isCreatePage = computed(() => route.path === '/create');
    const isUpdatePage = computed(() => route.path.startsWith('/update/') && route.params.id !== undefined);
    const isDeletePage = computed(() => route.path.startsWith('/delete/') && route.params.id !== undefined);
    const isLoginPage = computed(() => route.path === '/formLogin');

    return {
      isHomePage,
      isHogarPage,
      isCreatePage,
      isUpdatePage,
      isDeletePage,
      isLoginPage,
      pageTitle
    };
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-item .active-link {
  color: $terracotta !important; /* Default active link color */
}

.breadcrumb-item .active-link.isHomePage {
  color: #F76B8A; /* Color for Home page link */
}

.breadcrumb-item .active-link.isHogarPage {
  color: #FFA500; /* Color for Hogar page link */
}

.breadcrumb-item .active-link.isCreatePage {
  color: #008000; /* Color for Create page link */
}

.breadcrumb-item .active-link.isUpdatePage {
  color: #0000FF; /* Color for Update page link */
}

.breadcrumb-item .active-link.isDeletePage {
  color: #FF0000; /* Color for Delete page link */
}

.breadcrumb-item .active-link.isLoginPage {
  color: #000080; /* Color for Login page link */
}
</style>
