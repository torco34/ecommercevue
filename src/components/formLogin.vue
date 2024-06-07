<template>
  <div class="containerForm">
   <div class="formContainer">
    <h2>Registro</h2>
    <form @submit.prevent="register" class="form">
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
        <label for="registerPassword">Correo:</label>
        <input
          type="email"
          id="registerPassword"
          v-model="registerForm.password"
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
      <button type="submit" class="btn">Registrarse</button>
    </form>
   </div>

    <!-- <h2>Iniciar sesión</h2>
    <form @submit.prevent="login" class="form">
      <div class="form-group">
        <label for="loginUsername">Nombre de usuario:</label>
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
      <button type="submit" class="btn">Iniciar sesión</button>
    </form> -->
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
      console.log("Registrarse", this.registerForm);
    },
    login() {
      console.log("Iniciar sesión", this.loginForm);
    },
  },
};
</script>

<style scoped lang="scss">
.containerForm{
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

.btn {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: $tarracota;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color:  #ec95a8;
}

.btn:focus {
  outline: none;
}
</style>
