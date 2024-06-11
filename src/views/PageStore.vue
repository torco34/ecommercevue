<template>
  <div class="container mt-5">
    <BreadCrumbsNav />
    <h2 class="text-center colorTextStore display-4 fw-bold">Tienda de muebles y Detalles</h2>
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
.colorTextStore{
color:$gray ;
}
</style>