import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createModal } from "@kolirt/vue-modal";
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";

createApp(App).use(router).use(createModal).mount("#app");
