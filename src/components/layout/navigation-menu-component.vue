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
        <div @click="showModal = true">
          <img
            src="../../assets/authentification.svg"
            alt="auth"
            style="height: 2.4em"
          />
        </div>

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

  <!-- Модальне вікно -->
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <!-- Форма логіну -->
      <form v-if="loginMode" @submit.prevent="login">
        <h2>Login</h2>
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>

      <!-- Форма реєстрації -->
      <form v-else @submit.prevent="register">
        <h2>Register</h2>
        <input type="text" v-model="firstname" placeholder="Firstname" />
        <input type="text" v-model="lastname" placeholder="Lastname" />
        <input type="text" v-model="phone" placeholder="Phone" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>

      <!-- Кнопка для переключення режиму -->
      <button @click="toggleMode">
        {{ loginMode ? "Register" : "Login" }}
      </button>

      <!-- Button to close the modal window -->
      <button @click="closeModal">Закрити</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation-menu-component",
  components: {},
  data() {
    return {
      selectedLanguage: "en",
      showModal: false,
      loginMode: true, // A state variable for mode switching
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phone: "",
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    toggleMode() {
      this.loginMode = !this.loginMode; // Switch screen mode
    },
    // Додайте методи login та register для обробки входу та реєстрації
  },
};
</script>

<style>
.navigation-menu-component {
  background-color: #607832;
  color: #fdfcfa;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  width: 6rem;
  height: 6rem;
  padding-left: 5px;
}

.links {
  display: flex;
  gap: 4.125em;
}

.links a {
  color: #fdfcfa; /* Link color */
}

.language-switcher {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: auto;
}

.language-switcher select {
  background-color: #607832;
  color: #fdfcfa;
  border-radius: 5px;
  cursor: pointer;
}

.navigation-container {
  display: flex;
  margin-left: 0%;
}

@media (max-width: 1280px) {
  .language-switcher {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: auto;
  }
}
@media (max-width: 1024px) {
  .language-switcher {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: auto;
  }
}
@media (max-width: 912px) {
  .language-switcher {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
}
@media (max-width: 820px) {
  .language-switcher {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
  .links {
    display: flex;
    gap: 4.125em;
  }
}
@media (max-width: 540px) {
  .language-switcher {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: auto;
  }
  .links {
    display: flex;
    gap: 4.125em;
  }
}

@media (max-width: 414px) {
  .language-switcher {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: auto;
  }
  .links {
    display: flex;
    gap: 2.125em;
  }
}

/* Adaptive styles for */
@media (max-width: 375px) {
  .navigation-menu-component {
    background-color: #607832;
    color: #fdfcfa;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .language-switcher {
    margin-right: 0px;
  }
  .links {
    display: flex;
    gap: 1.125em;
  }

  /* Phone portrait orientation */
  .navigation-container {
    margin-left: 0; /* Remove the left margin for smaller screens */
  }

  .language-switcher {
    position: relative;
    display: flex;
    align-items: center;
  }

  .language-switcher select {
    max-width: 100%; /* we make a drop-down list 100% screen width */
  }
}

@media (max-width: 280px) {
  .navigation-menu-component {
    .navigation-menu-component {
      background-color: #607832;
      color: #fdfcfa;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .language-switcher {
    position: relative;
    display: flex;
    align-items: center;
  }
}
</style>
