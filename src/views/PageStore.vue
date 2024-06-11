<template>
  <div class="container mt-5">
    <BreadCrumbsNav />
    <h3 class="my-2 colorTextStore fs-1 fw-bold">Tienda de muebles y Detalles</h3>
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