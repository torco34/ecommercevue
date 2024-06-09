<template>
  <div class="card shadow">
    <img :src="imageUrl" alt="Imagen del artículo" class="card-img-top" />
    <div class="card-body px-4">
      <h5 class="card-title fs-6 fw-bold">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <p class="text-dark">{{ category }}</p>
      <p class="card-price fw-bold">${{ price }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <CustomButton v-if="showButton" @click="handleClick">
          {{ buttonText }}
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";
import CustomButton from "./CustomButton.vue";

const props = defineProps({
  id: String,
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  imageUrl: String,
  showButton: {
    type: Boolean,
    default: true,
  },
  buttonText: {
    type: String,
    default: "Agregar al carrito",
  },
});
const router = useRouter();
const handleClick = () => {
  router.push(`/items/${props.id}`);

  console.log(router, "ruter");
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  height: 30vh;
  transition: transform 0.3s ease;
}
.card:hover .card-img-top {
  transform: scale(1.05);
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
 
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 1rem;
}

.card-price {
  margin-bottom: 1rem;
}

</style>
