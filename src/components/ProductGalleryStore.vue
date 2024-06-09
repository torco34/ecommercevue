<template>
  <div class="gallery container">
    <div v-for="(image, index) in images" :key="index" :class="[
      'gallery-item',
      { 'item-1': index === 0, 'item-2': index === 1, 'item-3': index === 2 },
    ]">
       <CustomCard
       :id="image.id" :name="image.title"  :price="image.price"     :description="image.description"  :imageUrl="image.src"   :showButton="true"      :buttonText="image.buttonText" />
     
      <button @click="addToCart(image)">Agregar al carrito</button>
    </div>
  </div>
</template>

<script setup>
  import img1 from "../assets/Img/producto1.jpg";
  import img2 from "../assets/Img/producto2 (1).jpg";
  import img3 from "@/assets/Img/producto2.jpg"
  import img4 from "@/assets/Img/producto5.jpg"
  import {  defineEmits } from 'vue';
  import CustomCard from './CustomCard.vue';

  
  const emit = defineEmits(['add-to-cart']);
  
  const addToCart = (image) => {
    emit('add-to-cart', image);
    alert(image)
  };
  const images = [
    {
      src: img1,
      alt: 'Imagen 1',
      title: 'Producto 1',
      price: 2500,
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo sed consequatur alias delectus, saepe explicabo nulla cupiditate dicta, '

    },
    {
      src: img2,
      alt: 'Imagen 2',
      title: 'Producto 2',
      description: 'Descripción del Producto 2'
    },
    {
      src: img3,
      alt: 'Imagen 1',
      title: 'Producto 1',
      description: 'Descripción del Producto 1'

    },  
    {
      src: img4,
      alt: 'Imagen 1',
      title: 'Producto 1',
      description: 'bcaecati velit omnis eligendi ea commodi. Similique ipsam beatae culpa qui!'

    },
  ];
  // const images = props.images;
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 20px;
  padding: 10px;
  width: 100%;
  max-width: 1600px;
  margin-top: 120px;
  /* margin: auto; */
  background-color: #fff;
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); */
 
}








</style>