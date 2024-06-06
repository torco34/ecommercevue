<template>
  <h1 class="text-center mb-5 containerPreview display-4 p-5 fw-bold">
    Solo para ellas
  </h1>

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-4">
      <CustomCard
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :id="item._id"
        :category="item.category"
        :price="item.price"
        :imageUrl="item.imageUrl"
      />
    </div>
  </div>
</template>

<script>
import PostService from "@/service/PostService";
import CustomCard from "@/components/CustomCard.vue";

import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PagesMujer",

  components: {
    CustomCard,
  },

  setup() {
    const items = ref([]);

    const fetchItems = async () => {
      try {
        const response = await PostService.fetchAll();
        items.value = response;
      } catch (error) {
        console.error("Error al obtener los ítems:", error);
      }
    };

    onMounted(fetchItems);

    return {
      items,
    };
  },
});
</script>

<style lang="scss">
.containerPreview {
  background-size: cover;
  background-position: center;
  height: 20vh;
  width: 100%;
  color: $gray;
  font-family: "Roboto", sans-serif;
}
</style>
