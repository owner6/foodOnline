<template>
  <div class="navigation-menu-component">
    <!-- Logo Container -->
    <router-link to="/home">
      <div class="logo-container">
        <img src="@/assets/food-online-logo.png" alt="logo" class="logo" />
      </div>
    </router-link>
    <!-- Navigation Container -->
    <div class="navigation-container">
      <!-- links -->
      <div class="links">
        <router-link to="/sell">
          <img
            src="@/assets/sell_online_image.svg"
            alt="Sell food online"
            style="height: 2.4em"
          />
        </router-link>
        <div @click="showAuthForm">
          <img
            src="@/assets/authentification.svg"
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
  <!-- Display the authentication form only if isAuthFormVisible is true -->
  <vPopup v-if="isAuthFormVisible" @close="hideAuthForm" />
</template>

<script>
import vPopup from "@/components/ui/v-popup.vue";

export default {
  name: "navigation-menu-component",
  components: {
    vPopup,
  },
  data() {
    return {
      selectedLanguage: "en",
      isAuthFormVisible: false,
    };
  },
  methods: {
    showAuthForm() {
      this.isAuthFormVisible = true;
    },
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
