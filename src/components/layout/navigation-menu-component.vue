<template>
  <div class="navigation-menu-component">
    <!-- Logo Container -->
    <router-link to="/">
      <!-- logo -->
      <div class="logo-container">
        <router-link to="/home">
          <img
            src="../../assets/food-online-logo.png"
            alt="logo"
            class="logo"
          />
        </router-link>
      </div>
    </router-link>
    <!-- Navigation Container -->

    <div class="navigation-container">
      <!-- links -->
      <div class="links">
        <router-link to="/sell-online">
          <img
            src="../../assets/sell_online_image.svg"
            alt="Sell food online"
            style="height: 2.4em"
          />
        </router-link>
        <router-link to="/auth">
          <img
            src="../../assets/authentification.svg"
            alt="auth"
            style="height: 2.4em"
          />
        </router-link>

        <div class="language-switcher">
          <select v-model="selectedLanguage">
            <option value="en">EN</option>
            <option value="ua">UA</option>
            <option value="ru">RU</option>
            <!-- Add other languages as needed -->
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your component logic goes here
  name: "navigation-menu-component",
  components: {},
  props: {},
  data() {
    return {
      selectedLanguage: "en",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style>
.navigation-menu-component {
  background-color: #607832; /* The background color of the hat */
  color: #fdfcfa; /* Text color */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 60px; /* Logo width */
  height: auto;
  padding-left: 5px;
}

.links {
  display: flex;
  gap: 4.125em;
}

.links a {
  text-decoration: none;
  color: #fdfcfa; /* Link color */
}

.language-switcher {
  position: relative; /* Set relative positioning */
  display: flex;
  align-items: center;
}

.language-switcher select {
  background-color: #607832;
  color: #fdfcfa;
  border: none;
  padding: 4px;
  border-radius: 5px;
  cursor: pointer;
}

.navigation-container {
  display: flex;
  margin-left: 10%;
}

/* Adaptive styles for */
@media (max-width: 375px) {
  /* Phone portrait orientation */
  .navigation-menu-component {
    padding: 10px; /* Reduce the indentation for smaller screens */
  }

  .navigation-container {
    margin-left: 0; /* Remove the left margin for smaller screens */
  }

  .links {
    gap: 1em; /* Уменьшите расстояние между ссылками */
  }

  .language-switcher select {
    max-width: 100%; /* Сделайте выпадающий список 100% шириной экрана */
  }
}
</style>
