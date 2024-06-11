<template>
  <div class="container mt-5"> <BreadCrumbsNavVue /></div>
  <div class="containerForm">
   
    <div class="formContainer">
      <h2 v-if="showRegisterForm">Registro</h2>
      <h2 v-else>Iniciar sesión</h2>
      <form @submit.prevent="register" v-if="showRegisterForm" class="form">
        <div class="form-group">
          <label for="registerUsername">Nombre de usuario:</label>
          <input
            type="text"
            id="registerUsername"
            v-model="registerForm.username"
            required
          />
        </div>
        <div class="form-group">
          <label for="registerEmail">Correo:</label>
          <input
            type="email"
            id="registerEmail"
            v-model="registerForm.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="registerPassword">Contraseña:</label>
          <input
            type="password"
            id="registerPassword"
            v-model="registerForm.password"
            required
          />
        </div>
        <div class="d-flex justify-content-a">
          <button type="button" @click="toggleForm" class="btn-link">Iniciar sesión</button>
        </div>
        <CustomButton type="submit" class="btn">Registrarse</CustomButton>
      </form>
      <form @submit.prevent="login" v-else class="form">
        <div class="form-group">
    <label for="loginUsername">Nombre:</label>
    <input
      type="text"
     id="loginUsername"
      v-model="loginForm.username"
      
      required
    />
  </div>
  <div class="form-group">
    <label for="loginPassword">Contraseña:</label>
    <input
      type="password"
      id="loginPassword"
      v-model="loginForm.password"
      
      required
    />
  </div>
        <div class="d-flex">
          <button type="button" @click="toggleForm" class="btn-link">Registrarse </button>
        </div>
        <CustomButton type="submit" class="btn">Iniciar sesión</CustomButton>
      </form>
    </div>
  </div>
</template>

<script setup>
import CustomButton from '../CustomButton.vue';
import {createUser}  from "../../service/PostUser"
import {loginUser} from "../../service/PostUser"
console.log(createUser, "hola")
import { reactive, ref } from 'vue';
import BreadCrumbsNavVue from '../BreadCrumbsNav.vue';

const registerForm = reactive({
  username: '',
  email: '',
  password: '',
});

const loginForm = reactive({
  username: '',
  password: '',
});

const showRegisterForm = ref(true);
const register = async () => {
  try {
    const response = await createUser(registerForm); // Llama a la función createUser con los datos del formulario
    console.log('Usuario creado exitosamente:', response);
  } catch (error) {
    console.error('Error al crear usuario:', error);
  }
};
// const register = () => {
//   console.log('Registrarse', registerForm);
// };
const login = async () => {
  try {
    const response = await loginUser(loginForm); // Llama a la función loginUser con los datos del formulario
    console.log('Inicio de sesión exitoso:', response);
    // Aquí puedes manejar la respuesta, por ejemplo, redirigiendo al usuario a otra página o mostrando un mensaje de éxito.
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje de error al usuario.
  }
};
// const login = () => {
//   console.log('Iniciar sesión', loginForm);
// };

const toggleForm = () => {
  showRegisterForm.value = !showRegisterForm.value;
};
</script>

<style scoped lang="scss">
.containerForm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  color: $gray;
}

.formContainer {
  width: 30%;
  margin: 0 auto;
  padding: 2rem;
  background: $beige;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}



.btn:hover {
  background-color: #ec95a8;
}

.btn:focus {
  outline: none;
}

.btn-link {
  background: none;
  border: none;
  color: $terracotta;
  margin-bottom: 2rem;
  font: inherit;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.btn-link:hover {
  color: #ec95a8;
}

.d-flex {
  display: flex;
}

.justify-content-around {
  justify-content: space-around;
}
</style>
