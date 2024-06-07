<template>
  <div class="container p-5">
    <h2 class="text-center fw-bold containerTexto display-4">Nuevo Para ellos</h2>
  </div>
  <div class="galerias container">
    <div v-for="(image, index) in ColeccionImgRopa" :key="index" class="imagens" :class="{ 'animacion': index % 2 === 0 }">
      <img :src="image?.url" :alt="image.alt" class="imagen-larga">
      <div class="card-contents">
        <p class="descripcions">{{ image.description }}</p>
        <button @click="verDetalles(image)" class="btn-detalle">Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import img1 from "@/assets/img/blog1.jpg";
import img2 from "@/assets/img/blog2.jpg";
import img3 from "@/assets/img/blog3.jpg";
import img4 from "@/assets/img/blog4.jpg";
import img5 from "@/assets/img/blog5.jpg";
import img6 from "@/assets/img/blog6.jpg";
import img7 from "@/assets/img/bg-4.jpg";
import img8 from "@/assets/img/bg-3.jpg";
import img9 from "@/assets/img/bg-5.jpg";
// import CustomButton from "@/CustomButton.vue";

const ColeccionImgRopa = [
  {
    url: img1,
    alt: "Imagen 1",
    description: "Descripción de la imagen "
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

function verDetalles(image) {
  alert(`Detalles de la imagen: ${image.description}`);
}
</script>

    
    <style lang="scss">
    .galerias {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); // Crea columnas responsivas
      gap: 20px; 
      // background-color: $beige;
    }
    
    .containerTexto {
      background-size: cover;
      background-position: center;
      height: 10vh;
      width: 100%;
      color: $gray;
      font-family: $font-family;
    }
    
    .imagens {
      position: relative;
      overflow: hidden;
      border-radius: 8px; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    }
    
    .imagen-larga {
      width: 100%; 
    }
    
    .animacion:hover {
      animation: animacion 1s ease-in-out infinite; 
    }
    
    .imagen img {
      width: 100%; 
      height: auto; 
      display: block; 
    }
    
    .card-contents {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color:  $beige;
      color: $gray; // Color de texto blanco
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .descripcions {
      margin: 0;
      font-size: 1rem;
    }
    
    .btn-detalle {
      background-color: #F76B8A; ;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .btn-detalle:hover {
      background-color: #df8397;;
    }
    
    @keyframes animacion {
      0% {
        transform: translateX(-10px); // Desplaza ligeramente hacia la izquierda
        opacity: 0.8; // Opacidad inicial
      }
      50% {
        transform: translateX(0); // Regresa a la posición original
        opacity: 1; // Opacidad máxima
      }
      100% {
        transform: translateX(-10px); // Desplaza ligeramente hacia la izquierda nuevamente
        opacity: 0.8; // Opacidad final
      }
    }
    </style>
    
    
    
    
    
    