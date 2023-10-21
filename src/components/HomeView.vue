<template>
  <div class="HomeView">
    <!-- Фоновая картинка -->
    <div class="background-image"></div>

    <!-- Поисковая строка -->
    <div class="search-input">
      <input type="text" placeholder="Поиск товаров" />
      <button @click="search">Искать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  methods: {
    search() {
      const searchText = document.querySelector(".search-input input").value;
      console.log("Ищу товары: " + searchText);
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("../assets/pictures/home-page-splash-screen.jpg");
  background-size: auto;
  height: 91vh;
  width: 135vh;
  margin: 0 auto;
}
</style>
