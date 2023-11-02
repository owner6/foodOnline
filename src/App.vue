<template>
  <div id="app">
    <!-- Your HTML content goes here -->
    <navigationMenuComponent />
    <router-view></router-view>
    <footerComponent />
  </div>
</template>

<script>
import navigationMenuComponent from "./components/layout/navigation-menu-component.vue";
import footerComponent from "./components/layout/footer-component.vue";

export default {
  // Your component logic goes here
  name: "app",
  components: {
    navigationMenuComponent,
    footerComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0px;
}
/* Your CSS styles go here */
#app {
  font-family: "Bebas Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  max-width: 200px;
  margin: auto;
}
</style>
