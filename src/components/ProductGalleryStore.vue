<template>
  <div class="gallery">
    <div v-for="(image, index) in images" :key="index" :class="[
      'gallery-item',
      { 'item-1': index === 0, 'item-2': index === 1, 'item-3': index === 2 },
    ]">
       <CustomCard
       :id="image.id"         :name="image.title"     :description="image.description"  :imageUrl="image.src"   :showButton="true"      :buttonText="image.buttonText" />
      <!-- <img :src="image.src" :alt="image.alt" />
      <div v-if="index === 0" class="info">
        <h2>{{ image.title }}</h2>
        <p>{{ image.description }}</p>
        <button @click="addToCart(image)">Agregar al carrito</button>
      </div> -->
      <button @click="addToCart(image)">Agregar al carrito</button>
    </div>
  </div>
</template>

<script setup>
  import img1 from "../assets/Img/producto1.jpg";
  import img2 from "../assets/Img/producto2 (1).jpg";
  import {  defineEmits } from 'vue';
  import CustomCard from './CustomCard.vue';

  
  const emit = defineEmits(['add-to-cart']);
  
  const addToCart = (image) => {
    emit('add-to-cart', image);
  };
  const images = [
    {
      src: img1,
      alt: 'Imagen 1',
      title: 'Producto 1',
      description: 'Descripción del Producto 1'

    },
    {
      src: img2,
      alt: 'Imagen 2',
      title: 'Producto 2',
      description: 'Descripción del Producto 2'
    },
    {
      src: img1,
      alt: 'Imagen 1',
      title: 'Producto 1',
      description: 'Descripción del Producto 1'

    }
  ];
  // const images = props.images;
</script>

<style scoped>
.gallery {
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1600px;
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
 
}








</style>
