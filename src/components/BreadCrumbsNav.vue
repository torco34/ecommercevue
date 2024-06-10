<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/" class="nav-link">Inicio</router-link>
      </li>
      <li class="breadcrumb-item"><router-link to="/store" class="nav-link">Tienda</router-link></li>
      <!-- Verifica si la ruta actual no es '/store', si no lo es, muestra el enlace 'Compras' -->
      <li v-if="$route.path !== '/store'" class="breadcrumb-item">
        <router-link to="/items/:id" class="nav-link">Compras</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  // Importa $route de Vue Router
  computed: {
    $route() {
      return this.$router.currentRoute.value;
    }
  }
};
</script>
