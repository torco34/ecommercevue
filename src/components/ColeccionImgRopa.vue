<template>
  <div class="container p-5">
    <h2 class="text-center fw-bold containerTexto display-4">Nueva colección</h2>
  </div>
  <div class="galeria container">
    <div v-for="(image, index) in ColeccionImgRopa" :key="index" class="imagen "
      :class="{ 'animacion': index % 2 === 0 }">
      <img :src="image?.url" :alt="image.alt" class="imagen-larga">
      <p class="descripcion">{{ image.description }}</p>
    </div>
  </div>
</template>
<script setup>
import img1 from "@/assets/img/blog1.jpg"
import img2 from "@/assets/img/blog2.jpg"
import img3 from "@/assets/img/blog3.jpg"
import img4 from "@/assets/img/blog4.jpg"
import img5 from "@/assets/img/blog5.jpg"
import img6 from "@/assets/img/blog6.jpg"
import img7 from "@/assets/img/bg-4.jpg"
import img8 from "@/assets/img/bg-3.jpg"
import img9 from "@/assets/img/bg-5.jpg"
const ColeccionImgRopa = [
  {
    url: img1,
    alt: "Imagen 1",
    description: "lorem imagen 1"
  },
  {
    url: img2,
    alt: "Imagen 2",
    description: "Descripción de la imagen 2"
  },

  {
    url: img3,
    alt: "Imagen 2",
    description: "Descripción de la imagen 2"
  },
  {
    url: img4,
    alt: "Imagen 1",
    description: "Descripción de la imagen 1"
  },
  {
    url: img5,
    alt: "Imagen 2",
    description: "Descripción de la imagen 2"
  },

  {
    url: img6,
    alt: "Imagen 2",
    description: "Descripción de la imagen 2"
  },
  {
    url: img7,
    alt: "Imagen 2",
    description: "Descripción de la imagen 2"
  },

  {
    url: img8,
    alt: "Imagen 2",
    description: "Descripción de la imagen 2"
  },
  {
    url: img9,
    alt: "Imagen 2",
    description: "Descripción de la imagen 2"
  },
];
</script>

<style scoped lang="scss">
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 20px;
  background-color: $beige ;

}

.containerTexto {
  background-size: cover;
  background-position: center;
  height: 10vh;
  width: 100%;
  color: $gray;
  font-family: $font-family;
}

.imagen {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
}

.imagen-larga {
  width: 100%;
}

.animacion {
  animation: animacion 1s ease-in-out infinite;
}

.imagen img {
  width: 100%;
  height: auto;
  display: block;
}

.descripcion {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.5); // Fondo semi-transparente
  color: $blanco;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center; 

}

.descripcion:hover {
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

@keyframes animacion {
  0% {
    transform: translateX(-10px);
    opacity: 0.8;
  }

  50% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(-10px);
    opacity: 0.8;
  }
}
</style>
