<template>
  <div class="product-details">
    <img :src="imageUrl" :alt="alt" class="product-image">
    <div class="product-info">
      <h2 class="product-title">{{ title }}</h2>
      <p class="product-description">{{ description }}</p>
      <p class="product-price">{{ price }}</p>
      <CustomCard
        :id="image.id"
        :name="image.title"
        :price="image.price"
        :showRating="true"
        :description="image.description"
        :imageUrl="image.src"
        :showButton="true"
        :buttonText="'Agregar al carrito'"
        @add-to-cart="handleAddToCart"
      />
      <button @click="addToCart">Agregar al carrito</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import { useStore } from 'vuex';
// CustomCard
import { defineProps } from "vue";
import CustomCard from './CustomCard.vue';
const props = defineProps({
  id: Number,
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  alt: String
});

const router = useRouter();
// const store = useStore();

const addToCart = () => {
  const product = {
    id: props.id,
    title: props.title,
    price: props.price
  };

  router.push(`/product/${product.id}`)
  // store.dispatch('addToCart', product);
  // console.log(`Producto añadido al carrito: ${props.title}`);
  // router.push({ name: 'items', params: { id: props.id, name: props.title, price: props.price } });
  // alert(`${props.title} añadido al carrito`);
};
</script>

<style scoped>
.product-details {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}

.product-image {
  width: 150px;
  height: auto;
  margin-right: 20px;
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.product-description {
  margin-bottom: 10px;
}

.product-price {
  font-weight: bold;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
