<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container-fluid mx-5 p-2">
        <router-link to="/" class="nav-link title">
          <h3 class="title fw-bold">Shoppe/<span class="highlight">Line.</span></h3>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center container" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/coleccion" class="nav-link">Colecciones</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/store" class="nav-link">Tienda</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mujer" class="nav-link">Mujer</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/hogar" class="nav-link">Alcobas Hogar</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center gap-4 containerIcon">
          <router-link to="/form" class="nav-link">
            <i class="bi bi-person fs-2"></i>
          </router-link>
          <router-link to="/cardElement" class="nav-link">
            <i class="bi bi-bag-check-fill cart-icon fs-2">
              <span class="cart-count">{{ cartCount }}</span>
            </i>
          </router-link>
        </div>
      </div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const cartCount = computed(() => store.getters.cartCount);
</script>

<style lang="scss">
.containerIcon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
  width: 50%;
  cursor: pointer;
}

.highlight {
  color: $terracotta; /* Asegúrate de que $terracotta esté definido en tu archivo SCSS */
  font-weight: bold;
  font-size: 26px;
}

.cart-icon {
  position: relative;
  top: 0px;
  display: inline-block;
  /* Color del icono del bolso */
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: $terracotta; /* Asegúrate de que $terracotta esté definido en tu archivo SCSS */
  color: #fff;
  padding: 5px 10px;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.nav-link {
  color: $terracotta; /* Asegúrate de que $terracotta esté definido en tu archivo SCSS */

  &.router-link-active {
    color: $terracotta;
    font-weight: bold;
  }
}
</style>
