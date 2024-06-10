<template>

    <div class="containers">
       <h2></h2>
    </div>
    <div class="">
        <ColeccionImgRopa/>
    </div>
</template>

<script setup>

import ColeccionImgRopa from "../components/ColeccionImgRopa.vue";

</script>

<style lang="scss">
.containers {
  background-image: url('../assets/Img/principal.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #555;
}

</style>