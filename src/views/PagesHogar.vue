<template>
  <div class="containers">

    <div class="header text-center">
      <h2 class="display-4 p-5 fw-bold">Tienda Muebles</h2>
    </div>
  </div>

  <div class="text-center p-5 fw-bold">
    <BreadCrumbsNav />

    <h3 class="fs-1 fw-bold colorCategoria">Categorías de Productos</h3>
    <hr>
  </div>
  <div class="">
    <ColeccionHombre />
  </div>


</template>


<script setup>

import BreadCrumbsNav from "@/components/BreadCrumbsNav.vue";
import ColeccionHombre from "@/components/ColeccionHombre.vue";



</script>

<style lang="scss" scoped>
.containers {
  background-image: url('../assets/Img/galeria_01.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #555;
}

.colorCategoria {
  color: #555;
}


.categories-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
  border: solid red;
  // max-width: 1200px;

}

.text-center {
  text-align: center;
}
</style>
