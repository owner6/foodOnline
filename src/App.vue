<template>
  <div id="app">
    <!-- Your HTML content goes here -->
    <navigationMenuComponent />
    <p>Hello, Vue!</p>
    <authComponent />
    <adComponent />
    <adDetailsComponent />
    <adFormComponent />
    <adListComponent />
    <filtresComponent />
    <footerComponent />
    <userPanelComponent />
  </div>
</template>

<script>
import navigationMenuComponent from "./components/navigation-menu-component.vue";
import authComponent from "./components/auth-component.vue";
import adComponent from "./components/ad-component.vue";
import adDetailsComponent from "./components/ad-details-component.vue";
import adFormComponent from "./components/ad-form-component.vue";
import adListComponent from "./components/ad-list-component.vue";
import filtresComponent from "./components/filtres-component.vue";
import footerComponent from "./components/footer-component.vue";
import userPanelComponent from "./components/user-panel-component.vue";

export default {
  // Your component logic goes here
  name: "app",
  components: {
    navigationMenuComponent,
    authComponent,
    adComponent,
    adDetailsComponent,
    adFormComponent,
    adListComponent,
    filtresComponent,
    footerComponent,
    userPanelComponent,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
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
