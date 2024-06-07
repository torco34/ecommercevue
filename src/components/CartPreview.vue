<template>
  <div>
    <h2 class="p-3 mt-5 fw-bold display-5 containerPreview text-center">
      COMPOSICIÓN, CUIDADOS y ORIGEN
    </h2>
   <div class="container">
    <BreadCrumbsNav/>
   </div>
    
    <div class="container mt-5 rounded fondoCard d-md-flex flex-md-row flex-column gap-5">
   
      <div class="flex-grow-1">
        <div v-if="item">
          <CustomCard :name="item.name" :imageUrl="item.imageUrl" :description="item.description" :price="item.price"
            :showButton="false" />
        </div>
        <div v-else>
          <p>Cargando...</p>
        </div>
      </div>
      <div class="borde p-5 d-grid gap-3 mx-md-2">
        <div>
          <div>
            <p class="fs-3 fw-bold">Tallas</p>
            <p v-for="size in sizes" :key="size" :class="[
              'border p-2 co',
              { 'selected-size': size === selectedSize },
            ]" @click="selectSize(size)">
              {{ size }}
            </p>
          </div>
        </div>
      </div>
      <div class="p-5 d-grid justify-content-center">
        <h4 v-if="item" class="fw-bold">{{ item.name }}</h4>
        <p v-if="item">{{ item.description }}</p>
        <p v-if="item" class="fw-bold">Precio: ${{ item.price }}</p>
        <div>
          <CustomButton @click="addToCart"> Agregar al carrito </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import PostService from "@/service/PostService";
import CustomCard from "@/components/CustomCard.vue";
import CustomButton from "@/components/CustomButton.vue";
import BreadCrumbsNav from "./BreadCrumbsNav.vue"
const route = useRoute();
const store = useStore();
const toast = useToast();
const itemId = route.params.id;

const item = ref(null);
const selectedSize = ref(null);

const sizes = ref(["L", "M", "S", "XL"]);
const fetchItem = async () => {
  try {
    const response = await PostService.fetchById(itemId);
    item.value = response;
  } catch (error) {
    console.error("Error fetching item:", error);
  }
};

const selectSize = (size) => {
  selectedSize.value = size;
};

const addToCart = () => {
  if (!selectedSize.value) {
    toast.error("Por favor, selecciona una talla.", {
      toastClassName: "error-toast",
    });
    return;
  }

  const productToAdd = {
    ...item.value,
    size: selectedSize.value,
    quantity: 1,
  };
  store.dispatch("addToCart", productToAdd);
  toast.success("Producto agregado al carrito exitosamente!");
};

onMounted(fetchItem);
</script>

<style lang="scss">
.containerPreview {
  font-family: "Roboto", sans-serif;
  color: $gray;
}

.lineaDercor {
  color: $tarracota;
}

.fondoCard {
  background-color: $beige;
  padding: 20px;
}

.selected-size {
  background-color: $blanco;
  color: $tarracota;
  cursor: pointer;
}

.co:hover {
  background-color: $blanco;
  color: $tarracota;
  cursor: pointer;
}

.custom-toast {
  background-color: $tarracota !important;
  /* Cambia esto según tus necesidades */
  color: #ffffff !important;
}

.error-toast {
  background-color: red !important;
  /* Color de fondo para errores */
  color: white !important;
  /* Color de texto para errores */
}

.custom-toast .Vue-Toastification__toast-body {
  color: #ffffff;
}
</style>
