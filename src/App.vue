<template>
  <div id="app">
    <!-- Your HTML content goes here -->
    <navigationMenuComponent />
    <router-view></router-view>
    <button type="button" class="btn" @click="showModal">Open Modal!</button>
    <!-- Include the modal here -->
    <modalComponent v-show="isModalVisible" @close="closeModal" />
    <footerComponent />
  </div>
</template>

<script>
import navigationMenuComponent from "./components/layout/navigation-menu-component.vue";
import footerComponent from "./components/layout/footer-component.vue";
import modalComponent from "./components/ui/modal-component.vue";

export default {
  // Your component logic goes here
  name: "app",
  components: {
    navigationMenuComponent,
    footerComponent,
    modalComponent,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
* {
  margin: 0px;
}
/* Your CSS styles go here */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
