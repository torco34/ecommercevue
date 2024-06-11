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

<style scoped>

.breadcrumb-item .active-link {
  color: pink; 
}


.breadcrumb-item .active-link.formLogin {
  color: blue; 
}
</style>
