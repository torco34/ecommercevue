<template>
  <div class="containerImg">

    <div class="header shadow rounded text-center ">
    <h2 class="display-4 p-2 fw-bold">Detalles Especiales</h2>
  </div>
  </div>
  <div class="container">
   
    <div class="p-5">
      <BreadCrumbsNav />
      <h3 class="text-center  display-4 fw-bold">Solo para ellas</h3>
      <hr>
     
     
     
    </div>
    <div class=" containerPreview container">
      <CustomCard v-for="item in items" :key="item.id" :name="item.name" :id="item._id" :category="item.category"
        :price="item.price" />
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

  width: 100%;
  
}

.containerImg {
  background-image: url('../assets/Img/mujer1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 30vh;
  display: flex;
  widows: 100%;
 align-items: center;
 justify-content: center;
  color: #555;
}
.header{
  color:$tarracota;
  background-color: #fff ;
}
// /* Add styles for your CustomCard if needed */
// .card {
//   margin-bottom: 20px;
//   /* Adjust the card styles as needed */
// }

// @media (max-width: 576px) {
//   .containerPreview {
//     height: 15vh;
//     /* Adjust as needed for smaller screens */
//   }
// }

// @media (min-width: 768px) {
//   .containerPreview {
//     height: 20vh;
//     /* Adjust as needed for medium screens */
//   }
// }

// @media (min-width: 992px) {
//   .containerPreview {
//     height: 25vh;
//     /* Adjust as needed for large screens */
//   }
// }
</style>
