<template>
  <div class="containerImg">
    <div class="header shadow rounded text-center">
      <h2 class="display-4 p-2 fw-bold">Detalles Especiales</h2>
      <p>Esta sección va con una API.</p>
    </div>
  </div>
  <div>
    <div class="containerText container">
      <BreadCrumbsNav />
      <h3 class="fs-1 fw-bold colorCategoria ">Solo para ellas</h3>
      <hr>
    </div>
    <div class="containerPreview container">
      <CustomCard
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :id="item._id"
        :category="item.category"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
import PostService from "@/service/PostService";
import CustomCard from "@/components/CustomCard.vue";
import BreadCrumbsNav from "@/components/BreadCrumbsNav.vue";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PagesMujer",

  components: {
    CustomCard,
    BreadCrumbsNav,
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

<style lang="scss" scoped>
.containerPreview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 50px;
  font-family: $font-family;
  width: 100%;
}

.containerImg {
  background-image: url('../assets/Img/mujer1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 20vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #555;
}
.containerText{
  color: #555;
    display: grid;
    max-width: 1600px;
    margin-bottom: 5rem;
    margin-top: 50px;
    width: 100%;
}
.header {
  color: $terracotta;
  background-color: #fff;
  font-family: $font-family;
}

.colorCategoria {
  color: $gray;
}
</style>
