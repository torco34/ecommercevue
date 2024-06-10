

<template>
  <div class="gallery container">
    <div v-for="(image, index) in images" :key="index" :class="[
      'gallery-item',
      { 'item-1': index === 0, 'item-2': index === 1, 'item-3': index === 2 },
    ]">
       <CustomCard
       :id="image.id" 
       :name="image.title"  
       :price="image.price" 
       :showRating="true" 
       :description="image.description" 
       :imageUrl="image.src" 
       :showButton="true" 
       
       :buttonText="'Agregar al carrito'"
       @add-to-cart="addToCart"/>
     
      <!-- <button @click="addToCart(image)">Agregar al carrito</button> -->
    </div>
  </div>
</template>


<script setup>
import { useStore } from 'vuex';

import { ref } from 'vue';
const store = useStore(); 
import img1 from "../assets/Img/producto1.jpg";
import img2 from "../assets/Img/producto2 (1).jpg";
import img3 from "@/assets/Img/producto2.jpg";
import img4 from "@/assets/Img/producto5.jpg";
import CustomCard from './CustomCard.vue';
// const itemId = route.params.id;
const images = ref([
  {
    id: 1,
    src: img1,
    alt: 'Image',
    title: 'Mueble azul ',
    price: 2500,
    description: '  sed et ipsum, itaque animi error, illo molestias doloremque ipsa, ',
    category: 'Categoría 1',
  },
  {
    id: 2,
    src: img2,
    alt: 'Imagen 2',
    title: 'Producto 2',
    price:  1750,
    description: '  sed et ipsum, itaque animi error, illo molestias doloremque ipsa,',
    category: '200 compradas en le mes pasado',
  },
  {
    id: 3,
    src: img3,
    alt: 'Imagen 3',
    title: 'Muebles de madera',
    description: '  sed et ipsum, itaque animi error, illo molestias doloremque ipsa,',
    price:  17.5000,
    category: 'Categoría 3',
  },
  {
    id: 4,
    src: img4,
    alt: 'Imagen 4',
    title: 'Producto 4',
    description: '  sed et ipsum, itaque animi error, illo molestias doloremque ipsa,',
    category: 'Categoría 4',
  },
]);
import { useRouter } from "vue-router";
const router = useRouter()

const addToCart = (product) => {
  
  store.dispatch('addToCart', product); // Envía todo el objeto del producto al carrito
  console.log(`Producto añadido al carrito: ${product.title}`);
  // router.push(`/items/${product.id}`);
  router.push({ name: 'items', params: { id: product.id, name: product.title, price: product.price } });
  alert(`${product.name} añadido al carrito`);
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 50px;
  padding: 10px;
  width: 100%;
  max-width: 1600px;
  margin-top: 120px;
  background-color: #fff;
  border-radius: 10px;
}
</style>

