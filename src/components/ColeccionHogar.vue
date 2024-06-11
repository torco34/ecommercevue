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
import img1 from "../assets/Img/galeria_01.jpg";
import img2 from "../assets/Img/galeria_02.jpg";
import img3 from "../assets/Img/galeria_03.jpg";
// import img4 from "../assets/Img/galeria_04.jpg";
import img5 from "../assets/Img/producto5.jpg";
import img6 from "../assets/Img/producto6.jpg";
import img7 from "../assets/Img/producto6.jpg";
import img8 from "../assets/Img/categoria8M.jpg"
const toast = useToast();
const store = useStore();

const images = ref([
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
    src: img6,
    alt: 'Imagen 4',
    title: 'Producto 4',
    price: 2000,
    description: 'Descripción del producto 4',
  },
  {
    id: 1,
    src: img5,
    alt: 'Imagen 1',
    title: 'Producto 1',
    price: 2500,
    description: 'Descripción del producto 1',
  },
  {
    id: 2,
    src: img7,
    alt: 'Imagen 2',
    title: 'Producto 2',
    price: 1750,
    description: 'Descripción del producto 2',
  },
  {
    id: 3,
    src: img8,
    alt: 'Imagen 3',
    title: 'Producto 3',
    price: 17500,
    description: 'Descripción del producto 3',
  },
  {
    id: 4,
    src: img6,
    alt: 'Imagen 4',
    title: 'Producto 4',
    price: 2000,
    description: 'Descripción del producto 4',
  },
]);

const handleAddToCart = (product) => {
  store.dispatch('addToCart', product); 
  toast.success("Producto agregado al carrito exitosamente!");

  console.log(`Producto añadido al carrito: ${product.name}`);
};
</script>

<style scoped>
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
</style>