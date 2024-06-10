<template>
  <div class="containers">
    <div class="header text-center">
      <h2 class="fw-bold display-2">Tienda Muebles</h2>
    </div>
  </div>
    <div class="text-center p-5 fw-bold">
      <h1 class="fw-bold colorCategoria">Categorías de Productos</h1>
      <hr>
    </div>
    <div class="categories-containe">
      <ColeccionHombre/>
    </div>
 

</template>


<script setup>
// import CategoryCard from "@/components/CustomCard.vue"
import ColeccionHombre from "@/components/ColeccionHombre.vue";
// import categories from '@/service/data/categories';
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
.colorCategoria{
  color: #555;
}
// .header {
//   padding: 50px 0;
// }

// .display-2 {
//   font-size: 3rem;
// }

.categories-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;

}

.text-center {
  text-align: center;
}
</style>
