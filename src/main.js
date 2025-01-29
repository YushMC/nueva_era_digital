import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import "./styles/style.scss";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head); // Agrega el gestor de meta tags
app.mount("#app");
