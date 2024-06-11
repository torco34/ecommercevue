<template>
  <div class="container">
    <h2 class="contain fw-bold display-4 containerCarrito pt-5">Carrito de Compras</h2>

    <div class="containe" v-if="cartItems.length">
      <div>
        <p class="">Total de artículos:

          <span class="fw-bold">{{ cartCount }}</span>
        </p>
      </div>
      <p>Total a pagar <span class="fw-bold">${{ cartTotal }}</span> </p>
      <div v-for="item in cartItems" :key="item.id" class="mb-4 combo">
        <CustomCard :imageUrl="item.imageUrl" :showButton="false"  :showRating="false" />
        <div>
          <p>Talla:
            <span class="fw-bold">{{ item.size }}</span>
          </p>
          <p>Cantidad:
            <span class="fw-bold">{{ item.quantity }}</span>
          </p>
          <P>Producto:
            <span class="fw-bold">{{ item.name }}</span>
          </P>
          <P>Precio:
            <span class="fw-bold">$ {{ item.price }}</span>
          </P>
          <button @click="removeFromCart(item)">Eliminar</button>
        </div>
      </div>


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
import { useToast } from "vue-toastification";
import CustomCard from "./CustomCard.vue";
import PostService from "@/service/PostService";
const toast = useToast();
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
  toast.success('¡El elemento se ha eliminado correctamente!');
};

onMounted(fetchItem);
</script>

<style scoped lang="scss">
.containerCarrito{
  font-family: $font-family;
}
.container {
  padding: 2rem;
  background-color: $beige;
  font-family: $font-family;
  color: $dark;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: $tarracota;
    color: $gray;
    font-weight: bold;

  }
}

/* Estilo para la lista de artículos del carrito */
.containe {
  list-style: none;
  padding: 0;

  .combo {
    background-color: $blanco;

    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    width: 70%;
    justify-content: space-around;

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

    p {
      margin: 0.5rem 0;

    }

    button {
      background-color: $tarracota;
      color: $blanco;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: darken($rosado, 10%);
      }
    }
  }
}

/* Estilo para el resumen del carrito */


.total-summary {
  margin-top: 2rem;
  padding: 1rem;
  background-color: $blanco;
  border: 1px solid $gray;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.no-items {
  text-align: center;
  font-size: 1.2rem;
  color: $rosado;
}
</style>
