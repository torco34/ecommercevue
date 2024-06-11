<template>
  <div class="containers">

    <div class="header text-center">
      <h2 class="display-4  fw-bold">Tienda Muebles</h2>
    </div>
  </div>

  <div class="containerText container fw-bold">
    <BreadCrumbsNav />

    <h3 class="fs-1 fw-bold colorCategoria">Categorías de Productos</h3>
    <hr>
  </div>
  <div class="">
    <ColeccionHogar />
  </div>


</template>


<script setup>

import BreadCrumbsNav from "@/components/BreadCrumbsNav.vue";
import ColeccionHogar from "@/components/ColeccionHogar.vue";



</script>

<style lang="scss" scoped>
.containers {
  background-image: url('../assets/Img/galeria_01.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #555;
}

.colorCategoria {
  color: $gray;
}
.containerText{
  color: #555;
  display: grid;
  max-width: 1600px;
  margin-bottom: 5rem;
  margin-top: 50px;
  width: 100%;
}

.categories-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;



}
.router-link-active {
    color: $terracotta !important;
  }
.text-center {
  text-align: center;
}
</style>
