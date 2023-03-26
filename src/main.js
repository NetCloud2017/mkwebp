import { createApp } from "vue";
import App from "./App.vue";
import routers from "./router";

const app = createApp(App).use(routers).mount("#app");
