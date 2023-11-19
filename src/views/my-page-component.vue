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
  mounted() {
    this.checkAuthToken();
  },
  watch: {
    hasAuthToken: function (newVal) {
      if (!newVal) {
        this.logout();
      }
    },
  },
  methods: {
    logoutAndRedirect() {
      this.logout();
    },
    logout() {
      localStorage.removeItem("authToken");
      this.user = null;
      this.hasAuthToken = false;
    },
    checkAuthToken() {
      this.hasAuthToken = localStorage.getItem("authToken") !== null;
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
