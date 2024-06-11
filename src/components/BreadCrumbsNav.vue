<template>
  <div>
    <nav>
      <ol class="breadcrumb">
        <!-- Siempre visible enlace a Inicio -->
        <li class="breadcrumb-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <!-- Enlace condicionalmente visible a Compras -->
        <li v-if="isHogarPage" class="breadcrumb-item">
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
        <!-- Nombre de la página actual -->
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

  
    const pageTitle = computed(() => {
      return route.meta.title;
    });


    const isHogarPage = computed(() => {
      return route.path.startsWith('/hogar/') && route.params.id !== undefined;
    });


    const isCreatePage = computed(() => {
      return route.path === '/create';
    });

    // Check if the current route corresponds to the 'Update' page
    const isUpdatePage = computed(() => {
      return route.path.startsWith('/update/') && route.params.id !== undefined;
    });

    // Check if the current route corresponds to the 'Delete' page
    const isDeletePage = computed(() => {
      return route.path.startsWith('/delete/') && route.params.id !== undefined;
    });

    return {
      isHogarPage,
      isCreatePage,
      isUpdatePage,
      isDeletePage,
      pageTitle
    };
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-item .router-link-active {
  color: $tarracota; 
}
.breadcrumb-item .active-link.formLogin {
  color: blue; /* Cambia este color según tu preferencia */
}
</style>
