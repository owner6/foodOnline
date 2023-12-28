<!-- MyPageComponent.vue -->
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
import authService from "@/api/services/authService.js";
import { API_URL } from "@/constants/apiUrl";

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
        authService.logout();
      }
    },
  },
  methods: {
    logoutAndRedirect() {
      authService.logout();
      window.location.reload();
    },
    checkAuthToken() {
      this.hasAuthToken = authService.checkAuthToken();
    },
    API_URL,
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
