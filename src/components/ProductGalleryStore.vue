<template>
  <div class="gallery containe">
    <div v-for="(image, index) in images" :key="index" :class="[
      'gallery-item',
      { 'item-1': index === 0, 'item-2': index === 1, 'item-3': index === 2 },
    ]">
      <CustomCard :id="image.id" :name="image.name" :price="image.price" :showRating="true"
        :description="image.description" :category="image.category" :imageUrl="image.imageUrl" :showButton="true"
        :buttonText="'Agregar al carrito'" @add-to-cart="addToCart" />

      <!-- <button @click="addToCart(image)">Agregar al carrito</button> -->
    </div>
  </div>
</template>


<script setup>
import { useStore } from 'vuex';
import { useToast } from "vue-toastification";
import { ref } from 'vue';
const store = useStore();

const toast = useToast();
import img1 from "../assets/Img/producto1.jpg";
import img2 from "../assets/Img/producto2 (1).jpg";
import img3 from "@/assets/Img/producto2.jpg";
import img4 from "@/assets/Img/producto5.jpg";
import CustomCard from './CustomCard.vue';
// const itemId = route.params.id;
const images = ref([
  {
    id: 1,
    imageUrl: img1,
    alt: 'Image',
    name: 'Mueble azul ',
    price: 2500,
    description: '  sed et ipsum, itaque animi error, illo molestias doloremque ipsa, ',
    category: 'Mueble',
  },
  {
    id: 2,
    imageUrl: img2,
    alt: 'Imagen 2',
    name: 'Mueble madera',
    price: 1750,
    description: 'sed et ipsum, itaque animi error, illo molestias doloremque ipsa,',
    category: 'Mueble cajon',
  },
  {
    id: 3,
    imageUrl: img3,
    alt: 'Imagen 3',
    name: 'Sofad amarrillo',
    description: '  sed et ipsum, itaque animi error, illo molestias doloremque ipsa,',
    price: 17.5000,
    category: 'Categoría 3',
  },
  {




    id: 4,
    imageUrl: img4,
    alt: 'Imagen 4',
    name: 'Producto 4',
    price: 4670,
    description: '  sed et ipsum, itaque animi error, illo molestias doloremque ipsa,',
    category: 'Categoría 4',
  },
]);


const addToCart = (product) => {
  const productToAdd = {
    ...product,
    quantity: 1,
  };
  store.dispatch('addToCart', productToAdd); // Envía todo el objeto del producto al carrito


  toast.success("Producto agregado al carrito exitosamente!", {
    toastClassName: "custom-toast",
  });

};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 10px;
  padding: 10px;
  width: 100%;
  max-width: 1600px;
  margin-top: 120px;
  background-color: #fff;
  border-radius: 10px;
}
</style>