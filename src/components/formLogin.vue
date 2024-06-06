<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <div>
        <label for="registerUsername">Nombre de usuario:</label>
        <input
          type="text"
          id="registerUsername"
          v-model="registerForm.username"
          required
        />
      </div>
      <div>
        <label for="registerPassword">Contraseña:</label>
        <input
          type="password"
          id="registerPassword"
          v-model="registerForm.password"
          required
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>

    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label for="loginUsername">Nombre de usuario:</label>
        <input
          type="text"
          id="loginUsername"
          v-model="loginForm.username"
          required
        />
      </div>
      <div>
        <label for="loginPassword">Contraseña:</label>
        <input
          type="password"
          id="loginPassword"
          v-model="loginForm.password"
          required
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
      },
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      // Aquí puedes enviar los datos del formulario de registro al servidor para el registro
      console.log("Registrarse", this.registerForm);
      // Lógica para enviar datos al servidor...
    },
    login() {
      // Aquí puedes enviar los datos del formulario de inicio de sesión al servidor para la autenticación
      console.log("Iniciar sesión", this.loginForm);
      // Lógica para enviar datos al servidor...
    },
  },
};
</script>

<style scoped>
/* Estilos CSS específicos del componente */
</style>
