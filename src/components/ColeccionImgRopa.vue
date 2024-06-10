<template>
  <div class="main-container">
    <div class="header text-center">
      <h2 class="fw-bold display-2">Tienda Muebles</h2>
    </div>
    <div class="text-center p-5 fw-bold">
      <h1 class="fw-bold">Categorías de Productos</h1>
    </div>
    <div class="categories-container">
      <div class="column-1">
        <CustomCard
          v-for="category in categoriesColumn1"
          :key="category.id"
          :title="category.title"
          :imageUrl="category.src"
          :alt="category.alt"
          :price="category.price"
          :description="category.description"
        />
      </div>
      <div class="column-2">
        <CustomCard
          v-for="category in categoriesColumn2"
          :key="category.id"
          :title="category.title"
          :imageUrl="category.src"
          :alt="category.alt"
          :price="category.price"
          :description="category.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import CategoryCard from '@/components/CategoryCard.vue';
import CustomCard from './CustomCard.vue';
import img1 from "../assets/Img/galeria_01.jpg";
import img2 from "../assets/Img/galeria_02.jpg";
import img3 from "../assets/Img/galeria_03.jpg";
import img4 from "../assets/Img/galeria_04.jpg";
import img5 from "../assets/Img/producto5.jpg";
import img6 from "../assets/Img/producto6.jpg";
import img7 from "../assets/Img/producto6.jpg";
import img8 from "../assets/Img/categoria11.jpg"


const categories = ref([
  {
    id: 1,
    src: img1,
    alt: 'Imagen 1',
    title: 'Producto 1',
    price: 2500,
    description: 'Descripción del producto 1',
  },
  {
    id: 2,
    src: img2,
    alt: 'Imagen 2',
    title: 'Producto 2',
    price: 1750,
    description: 'Descripción del producto 2',
  },
  {
    id: 3,
    src: img3,
    alt: 'Imagen 3',
    title: 'Producto 3',
    price: 17500,
    description: 'Descripción del producto 3',
  },
  {
    id: 4,
    src: img4,
    alt: 'Imagen 4',
    title: 'Producto 4',
    price: 2000,
    description: 'Descripción del producto 4',
  },
  {
    id: 5,
    src: img5,
    alt: 'Imagen 5',
    title: 'Producto 5',
    price: 2500,
    description: 'Descripción del producto 5',
  },
  {
    id: 6,
    src: img6,
    alt: 'Imagen 6',
    title: 'Producto 6',
    price: 1750,
    description: 'Descripción del producto 6',
  },
  {
    id: 7,
    src: img7,
    alt: 'Imagen 7',
    title: 'Producto 7',
    price: 17500,
    description: 'Descripción del producto 7',
  },
  {
    id: 8,
    src: img8,
    alt: 'Imagen 8',
    title: 'Producto 8',
    price: 2000,
    description: 'Descripción del producto 8',
  },
]);

const categoriesColumn1 = categories.value.slice(0, Math.ceil(categories.value.length / 2));
const categoriesColumn2 = categories.value.slice(Math.ceil(categories.value.length / 2));
</script>

<style scoped>
.main-container {
  /* background-image: url('@/assets/Img/producto5.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.header {
  padding: 50px 0;
}

.display-2 {
  font-size: 3rem;
}

.categories-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
}

.column-1, .column-2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
}

.text-center {
  text-align: center;
}
</style>
