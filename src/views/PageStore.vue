<template>
  <div class="container mt-5">
    <BreadCrumbsNav />
    <h3 class="text-center  display-4 fw-bold">Tienda de muebles</h3>
    <hr>
    
    <ProductGalleryStore />

  </div>
</template>

<script setup>
import ProductGalleryStore from '@/components/ProductGalleryStore.vue';
import BreadCrumbsNav from '@/components/BreadCrumbsNav.vue';

</script>

<style lang="scss">
/* Estilos */
</style>