<template>
  <div class="navigation-menu-component">
    <!-- Logo Container -->
    <div class="logo-container">
      <!-- logo -->
      <img src="/path/to/logo.png" alt="Логотип" class="logo" />
    </div>
    <!-- Navigation Container -->

    <div class="navigation-container">
      <!-- links -->
      <div class="links">
        <router-link to="/sell-online">Sell food online</router-link>
        <router-link to="/login">Login to personal account</router-link>

        <div class="language-switcher">
          <select v-model="selectedLanguage">
            <option value="en">English</option>
            <option value="ua">Ukraine</option>
            <option value="ru">Russian</option>
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
  background-color: #607832; /* Цвет фона шапки */
  color: #fdfcfa; /* Цвет текста */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  width: 100px; /* Ширина логотипа */
  height: auto;
}

.links {
  display: flex;
  gap: 1em;
}

.links a {
  text-decoration: none;
  color: #fff; /* Цвет ссылок */
}

.language-switcher {
  position: relative; /* Установите относительное позиционирование */
  margin-left: 0.1em; /* Переместите элемент в правую часть */
}

.language-switcher select {
  background-color: #fff;
  color: #333;
  border: none;
  padding: 1px;
  border-radius: 5px;
  cursor: pointer;
  max-width: 150px; /* Ограничьте максимальную ширину выпадающего списка */
  overflow: hidden; /* Скрыть выпадающую часть списка, если она не помещается */
  text-overflow: ellipsis; /* Добавьте многоточие, если текст не помещается */
  white-space: nowrap; /* Запретите перенос текста */
}

.navigation-container {
  display: flex;
  margin-left: 10%;
}

/* Адаптивные стили для */
@media (max-width: 375px) {
  /* iPhone 13 портретная ориентация */
  .navigation-menu-component {
    padding: 10px; /* Уменьшите отступы для меньших экранов */
  }

  .navigation-container {
    margin-left: 0; /* Уберите левый отступ для меньших экранов */
  }

  .links {
    gap: 1em; /* Уменьшите расстояние между ссылками */
  }

  .language-switcher select {
    max-width: 100%; /* Сделайте выпадающий список 100% шириной экрана */
  }
}
</style>
