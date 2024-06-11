<template>
  <div>
    <nav>
      <ol class="breadcrumb">
        <!-- Siempre visible enlace a Inicio -->
        <li class="breadcrumb-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
         
        </li>
        <!-- Enlace condicionalmente visible a Compras -->
        <li v-if="PagesHogar" class="breadcrumb-item">
          <router-link :to="`/hogar/${$route.params.id}`" class="nav-link">Compras</router-link>
        </li>
        <!-- Enlace condicionalmente visible para Crear -->
        <li v-if="isCreatePage" class="breadcrumb-item">
          <router-link to="/create" class="nav-link">Crear</router-link>
        </li>
        <!-- Enlace condicionalmente visible para Actualizar -->
        <li v-if="isUpdatePage" class="breadcrumb-item">
          <router-link :to="`/update/${$route.params.id}`" class="nav-link">Actualizar</router-link>
        </li>
        <!-- Enlace condicionalmente visible para Eliminar -->
        <li v-if="isDeletePage" class="breadcrumb-item">
          <router-link :to="`/delete/${$route.params.id}`" class="nav-link">Eliminar</router-link>
        </li>
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

    // Comprueba si la ruta actual corresponde a la página de Compras en la sección de Hogar
    const PagesHogar = computed(() => {
      return route.path.startsWith('/hogar/') && route.params.id !== undefined;
    });

    // Comprueba si la ruta actual es la página de Crear
    const isCreatePage = computed(() => {
      return route.path === '/create';
    });

    // Comprueba si la ruta actual corresponde a la página de Actualizar
    const isUpdatePage = computed(() => {
      return route.path.startsWith('/update/') && route.params.id !== undefined;
    });

    // Comprueba si la ruta actual corresponde a la página de Eliminar
    const isDeletePage = computed(() => {
      return route.path.startsWith('/delete/') && route.params.id !== undefined;
    });

    return {
      isCreatePage,
      isUpdatePage,
      isDeletePage,
      PagesHogar,
    };
  },
};
</script>

<style scoped>
/* Estilos personalizados */
</style>
