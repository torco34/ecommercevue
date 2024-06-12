<template>
   <div class="gallery container">
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <CustomCard :id="image.id" :name="image.title" :price="image.price" :showRating="true"
        :description="image.description" :imageUrl="image.src" :showButton="true" :buttonText="'Agregar al carrito'"
        @add-to-cart="handleAddToCart" />
    </div>
   </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useToast } from "vue-toastification";
import CustomCard from './CustomCard.vue';
import img1 from "../assets/Img/categoria1M.jpg";
import img2 from "../assets/Img/categoria2M.jpg";
import img3 from "../assets/Img/categoria3M.jpg";
import img4 from "../assets/Img/categoria4M.jpg";
import img5 from "../assets/Img/categoria5M.jpg";
import img6 from "../assets/Img/categoria6M.jpg";
import img7 from "../assets/Img/categoria7M.jpg";
import img8 from "../assets/Img/categoria8M.jpg"
const toast = useToast();
const store = useStore();

const images = ref([
  {
    id: 1,
    src: img1,
    alt: 'Imagen 1',
    title: 'Juego de sala',
    price: 15000,
    description: 'Descripción del producto 1',
  },
  {
    id: 2,
    src: img2,
    alt: 'Imagen 2',
    title: 'Mueble',
    price: 1750,
    description: 'Descripción del producto 2',
  },
  {
    id: 3,
    src: img3,
    alt: 'Imagen 3',
    title: 'Sala',
    price: 17500,
    description: 'Descripción del producto 3',
  },
  {
    id: 4,
    src: img4,
    alt: 'Imagen 4',
    title: 'Comedor cuero',
    price: 23000,
    description: 'Descripción del producto 4',
  },
  {
    id: 1,
    src: img5,
    alt: 'Imagen 1',
    title: 'Comedor madera',
    price: 2500,
    description: 'Descripción del producto 1',
  },
  {
    id: 2,
    src: img6,
    alt: 'Imagen 2',
    title: 'Sala clasica',
    price: 12750,
    description: 'Descripción del producto 2',
  },
  {
    id: 3,
    src: img7,
    alt: 'Imagen 3',
    title: 'Comedor madera',
    price: 17500,
    description: 'Descripción del producto 3',
  },
  {
    id: 4,
    src: img8,
    alt: 'Imagen 4',
    title: 'Comedor blanco',
    price: 2000,
    description: 'Descripción del producto 4',
  },
]);

const handleAddToCart = (product) => {
  const productToAdd = {
    ...product,
    quantity: 1, 
  };

  store.dispatch('addToCart', productToAdd); 
  toast.success("Producto agregado al carrito exitosamente!", {
    toastClassName: "custom-toast",
  });
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1600px;
  margin-top: 20px;
}
.gallery-item {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.success-toast{
  background-color: $terracotta;
}
</style>