<template>
  <div class="login-container" v-if="showAuthForm">
    <div class="login-form">
      <div v-if="password !== confirmPassword" class="validation-error">
        Enter password
      </div>

      <button v-on:click="hideAuthForm" class="close-button">X</button>
      <div class="header">
        <h2>{{ isRegistering ? "Register" : "Login" }}</h2>
      </div>
      <div class="flex-row">
        <input
          id="email"
          class="lf--input"
          placeholder="Your email"
          type="text"
          v-model="email"
        />
        <div class="flex-row" v-if="isRegistering">
          <input
            id="phone"
            class="lf--input"
            placeholder="Your phone"
            type="text"
            v-model="phone"
          />
        </div>
        <div class="flex-row" v-if="isRegistering">
          <input
            id="lastname"
            class="lf--input"
            placeholder="Your lastname"
            type="text"
            v-model="lastname"
          />
        </div>
        <div class="flex-row" v-if="isRegistering">
          <input
            id="firstname"
            class="lf--input"
            placeholder="Your firstname"
            type="text"
            v-model="firstname"
          />
        </div>
      </div>
      <div class="flex-row">
        <input
          id="password"
          class="lf--input"
          placeholder="Your password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="flex-row" v-if="isRegistering">
        <input
          id="confirmPassword"
          class="lf--input"
          placeholder="Confirm Password"
          type="password"
          v-model="confirmPassword"
        />
      </div>
      <button class="lf--submit" @click="isRegistering ? register() : login()">
        {{ isRegistering ? "Sign Up" : "Log In" }}
      </button>
      <a class="lf--forgot" href="#" @click="toggleMode">
        {{
          isRegistering
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"
        }}
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router/index.js";
import { API_URL } from "@/constants/apiUrl";

export default {
  data() {
    return {
      API_URL: API_URL,
      email: "",
      phone: "",
      lastname: "",
      firstname: "",
      password: "",
      confirmPassword: "",
      isRegistering: false,
      isLoading: false,
      showAuthForm: true,
    };
  },

  computed: {
    hasAuthToken() {
      return localStorage.getItem("authToken") !== null;
    },
  },

  methods: {
    async login() {
      try {
        const response = await axios.post(
          `${this.API_URL}/auth/login`,
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.token;

        localStorage.setItem("authToken", token);

        this.user = response.data.user;

        this.isLoading = false;

        router.push({ path: "/mypage" });
        window.location.reload();
        this.showAuthForm = false;
      } catch (error) {
        console.error("Login error", error);
      }
    },

    async register() {
      try {
        const response = await axios.post(
          `${this.API_URL}/auth/registration`,
          {
            email: this.email,
            phone: this.phone,
            lastname: this.lastname,
            firstname: this.firstname,
            password: this.password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.token;

        localStorage.setItem("authToken", token);

        this.user = response.data.user;

        this.isLoading = false;

        await this.login();

        router.push({ path: "/mypage" });

        window.location.reload();

        this.showAuthForm = false;
      } catch (error) {
        console.error("Registration error", error);
      }
    },

    validateRegistration() {
      if (
        !this.email ||
        !this.password ||
        (this.isRegistering && this.password !== this.confirmPassword)
      ) {
        return false;
      }
      return true;
    },

    toggleMode() {
      this.isRegistering = !this.isRegistering;
      this.clearForm();
    },

    clearForm() {
      this.email = "";
      this.phone = "";
      this.lastname = "";
      this.firstname = "";
      this.password = "";
      this.confirmPassword = "";
    },

    hideAuthForm() {
      this.showAuthForm = false;
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.login-form {
  position: fixed;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding: 1em;
  border-radius: 3px;
  border: 1px solid #607832;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: #607832;
  border-radius: 0.313rem;
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, #607832),
    color-stop(29%, #678135),
    color-stop(50%, #6e8b37),
    color-stop(71%, #7e9c45),
    color-stop(100%, #78973e)
  );
  background: linear-gradient(
    to right,
    #607932 0%,
    #6a8535 29%,
    #6e8b37 50%,
    #799b3a 71%,
    #7ca03a 100%
  );
}
.login-form:before {
  content: "";
  position: fixed;
  top: -2px;
  left: 0;
  height: 2px;
  width: 100%;
}
.close-button {
  position: absolute;
  top: 0em;
  right: 0em;
  background: transparent;
  border: none;
  font-size: 1.5em;
  color: #fdfcfa;
  cursor: pointer;
  outline: none;
}
@media screen and (min-width: 600px) {
  .login-form {
    width: 50vw;
    max-width: 15em;
  }
}

.flex-row {
  margin-bottom: 1em;
  margin-top: 1em;
}

.header {
  display: flex;
  justify-content: center;
  margin: 15px;
  color: #fdfcfa;
}
.lf--input {
  flex: 1;
  padding: 1em 0.65em;
  border: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 25px;
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, #e6e8df),
    color-stop(100%, #dfe2d4)
  );
  background: linear-gradient(to bottom, #e4e7d8 0%, #e0e4d4 100%);
}
.lf--input:focus {
  outline: none;
  transition: transform 0.15s ease;
  transform: scale(1.02);
}

.lf--submit {
  display: block;
  padding: 1em;
  width: 100%;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to bottom, #ffbf00 0%, #da8653 100%);
  border: 0;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 0.85em;
  font-weight: 500;
  text-shadow: -1px -1px #b86200, 0 1px 0 #ecb76b;
}
.lf--submit:focus {
  outline: none;
  transition: transform 0.15s ease;
  transform: scale(0.95);
}

.lf--forgot {
  margin-top: 2em;
  color: #ffffff;
  font-size: 0.8em;
  text-align: center;
  float: left;
}

::-moz-placeholder {
  color: #8b8b8b;
}

:-ms-input-placeholder {
  color: #7a7a7a;
}

::placeholder {
  color: #797979;
}
</style>
