<template>
  <div class="background-image">
    <div class="content">
      <h1 class="display-3 fw-bold">
        Todo lo que buscabas, <br />
        en un solo lugar, sin<br />
        salir de casa
      </h1>

      <div class="my-5">
        <CustomButton>¡Bienvenido a la coleccion!</CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importamos el componente de botón reutilizable
import CustomButton from "@/components/CustomButton.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
}

.background-image {
  background-image: url("../assets/img/home1.jpg");
  background-size: cover;
  background-position: center;
  height: 90vh;
  width: 100%;
}

.content {
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10%;
  font-weight: bold;
  color: $gray;
}

.text-dark,
.title {
  color: #333;
  font-weight: bold;
}
</style>
