<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container-fluid mx-5 p-2">
        <router-link to="/" class="nav-link title">
          <h3 class="title fw-bold">Shoppe/<span class="span">Line.</span></h3>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-center container"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> Inicio</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/ropa" class="nav-link">Colecciones</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/store" class="nav-link">Tienda</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mujer" class="nav-link">Mujer</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/hombre" class="nav-link">Hombre</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center gap-4 containerIcon">
          <router-link to="/formLogin" class="nav-link">
            <i class="bi bi-person fs-3"></i>
          </router-link>
          <router-link to="/cardElement" class="nav-link">
            <i class="bi bi-handbag fs-4">
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
  justify-content: start;
  margin-left: 20px;
  width: 50%;
  cursor: pointer;
}

.span {
  color: $tarracota;
  font-weight: bold;
  font-size: 26px;
}

.cart-icon {
  position: relative;
  display: inline-block;
  color: #000; /* Color del icono del bolso */
}

.cart-count {
  position: absolute;
  top: 12px;
  margin-left: 14px;
  background-color: $tarracota;
  color: #fff;
  padding: 5px 10px;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link {
  color: $tarracota;

  &.router-link-active {
    color: $tarracota;
    font-weight: bold;
  }
}
</style>
