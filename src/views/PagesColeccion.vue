<template>
    <div class="containerImg"> <!-- Cambiado 'containers' a 'container' -->
    </div>
    <div class="containerTextBread">
        <div class="containerText container">
            <BreadCrumbsNav/>
            <h3 class="fs-1 fw-bold colorCategoria">Nueva Colección de muebles</h3> <!-- Corregido 'Colecion' a 'Colección' -->
            <hr>
        </div>
        <ColeccionMuebles/>
    </div>
</template>

<script setup>
import BreadCrumbsNav from "@/components/BreadCrumbsNav.vue";
import ColeccionMuebles from "../components/ColeccionMuebles.vue";
</script>

<style lang="scss" scoped>
.containerImg {  
  background-image: url('../assets/Img/categoria2M.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #555;
}
.colorCategoria {
  color: $gray;
}
.containerText {
   
    display: grid;
    max-width: 1600px;
    margin-bottom: 5rem;
    margin-top: 50px;
    width: 100%;
}
</style>
