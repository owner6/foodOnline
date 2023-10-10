<template>
  <div class="auth-component">
    <!-- Authorization and/or registration form -->
    <div v-if="showForm">
      <!-- Form input -->
      <form v-if="loginMode" @submit.prevent="login">
        <!-- Fields for entering a login and password -->
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <!-- Button input -->
        <button type="submit">Login</button>
      </form>

      <!-- Form registration -->
      <form v-else @submit.prevent="register">
        <!-- Fields for entering data for registration -->
        <input type="text" v-model="phone" placeholder="Phone" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="text" v-model="firstname" placeholder="Firstname" />
        <input type="text" v-model="lastname" placeholder="Lastname" />
        <input type="password" v-model="password" placeholder="Password" />
        <!-- Button registration -->
        <button type="submit">Register</button>
      </form>
    </div>

    <!-- Button to switch between modes -->
    <button @click="toggleMode">{{ loginMode ? "Register" : "Login" }}</button>
  </div>
</template>

<script>
export default {
  // Your component logic goes here
  name: "auth-component",
  components: {},
  props: {},
  data() {
    return {
      showForm: true,
      loginMode: true,

      email: "",
      phone: "",
      password: "",
      lastname: "",
      firstname: "",
    };
  },
  computed: {},
  methods: {
    login() {
      //logic
    },
    register() {
      //logic
    },
    toggleMode() {
      this.loginMode = !this.loginMode;
      this.showForm = true; // Переключение между true и false
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style scoped>
.auth-component {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
