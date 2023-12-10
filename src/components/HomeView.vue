<template>
  <div class="HomeView">
    <div class="background-image">
      <div class="search-container">
        <h1>SELL AND BUY ANYTHING YOU WANT</h1>
        <div class="search-input">
          <input ref="searchInput" type="text" placeholder="Search for goods" />
          <button @click="search">Search</button>
        </div>
      </div>
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
      const searchText = this.$refs.searchInput.value;
      console.log("Ищу товары: " + searchText);
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("../assets/pictures/home-page-splash-screen.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  height: 76vh;
  margin: 0 auto;
  position: relative;
}

.search-container {
  position: relative;
  top: 131px;
  left: 20%;
  padding: 20px;
  border-radius: 10px;
  color: #e6e8df;
  width: 464px;
}

.search-title {
  margin-bottom: 20px;
}

.search-input {
  display: flex;
  width: 464px;
  height: 46px;
  margin-top: 39px;
  position: relative;
  z-index: 1;
  background-color: #e6e8df;
}

.search-input input {
  flex: 1;
  color: #000000;
  border: none;
  border-bottom: 1px solid #fafde8;
  padding: 10px;
}

.search-input button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-input button:hover {
  background-color: #0056b3;
}

@media screen and (max-width: 600px) {
  .search-container {
    width: 264px;
    padding: 0;
    left: 15%;
  }

  .search-input {
    width: 264px;
    margin: 0, auto;
  }
}
</style>
