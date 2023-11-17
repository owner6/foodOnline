<template>
  <div class="my-page-component">
    <template v-if="hasAuthToken">
      <h3>Hi, user</h3>
      <button @click="logoutAndRedirect">Logout</button>
    </template>
    <template v-else>
      <h3>You are not logged in! Please log in to access the content.</h3>
    </template>
  </div>
</template>

<script>
export default {
  name: "MyPageComponent",
  data() {
    return {
      user: null,
      hasAuthToken: false,
    };
  },
  created() {
    this.hasAuthToken = localStorage.getItem("authToken") !== null;
  },
  methods: {
    logoutAndRedirect() {
      this.logout();
    },
    logout() {
      window.location.reload();
      localStorage.removeItem("authToken");
      this.user = null;
      this.hasAuthToken = false;
    },
    API_URL() {
      return "http://localhost:3000";
    },
  },
};
</script>

<style scoped>
.my-page-component {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}
</style>
