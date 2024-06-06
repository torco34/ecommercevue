<!-- <template>
  <h2 class="container pt-5">Carrito de Comprasv {{ cartItems }}</h2>

  {{ cartItems }}

  <div v-if="item">
    <CustomCard
      :name="item.name"
      :imageUrl="item.imageUrl"
      :description="item.description"
      :price="item.price"
      :category="item.category"
    />
    <h2>EKRMFRKMRKBMG</h2>
    <div>
      <h2 class="text-info">Carrito de Compras</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - ${{ item.price }}

          <CustomCard
            :name="item.name"
            :imageUrl="item.imageUrl"
            :description="item.description"
            :price="item.price"
            :category="item.category"
          />
        </li>
      </ul>
      <p>Total de artículos: {{ cartCount }}</p>
      <p>Total a pagar: ${{ cartTotal }}</p>
      <p>card {{ cartItems }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import CustomCard from "./CustomCard.vue";
import PostService from "@/service/PostService";
const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
const cartCount = computed(() => store.getters.cartCount);
const cartTotal = computed(() => store.getters.cartTotal);
console.log(cartItems);
const route = useRoute();
const itemId = route.params.id;
console.log(itemId, route, "hola .....");
const item = ref(null);
const fetchItem = async () => {
  try {
    const response = await PostService.fetchById(itemId);
    console.log(response, "kifk");
    item.value = response;
  } catch (error) {
    console.error("Error fetching item:", error);
  }
};
onMounted(fetchItem);
</script>

<style></style> -->

<template>
  <div>
    <h2 class="container pt-5">Carrito de Compras</h2>

    <div v-if="cartItems.length">
      <ul>
        <li v-for="item in cartItems" :key="item.id" class="mb-4">
          <CustomCard
            :name="item.name"
            :imageUrl="item.imageUrl"
            :description="item.description"
            :price="item.price"
            :category="item.category"
          />
          <div>
            <p>Talla: {{ item.size }}</p>
            <p>Cantidad: {{ item.quantity }}</p>
            <button @click="removeFromCart(item)">Eliminar</button>
          </div>
        </li>
      </ul>
      <p>Total de artículos: {{ cartCount }}</p>
      <p>Total a pagar: ${{ cartTotal }}</p>
    </div>
    <div v-else>
      <p>No hay artículos en el carrito.</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import CustomCard from "./CustomCard.vue";
import PostService from "@/service/PostService";

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
const cartCount = computed(() => store.getters.cartCount);
const cartTotal = computed(() => store.getters.cartTotal);

const route = useRoute();
const itemId = route.params.id;
const item = ref(null);

const fetchItem = async () => {
  try {
    const response = await PostService.fetchById(itemId);
    console.log(response, "kifk");
    item.value = response;
  } catch (error) {
    console.error("Error fetching item:", error);
  }
};

const removeFromCart = (item) => {
  store.dispatch("removeFromCart", item);
};

onMounted(fetchItem);
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
