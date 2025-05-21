import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";

import { Icon } from "@iconify/vue";

createApp(App).component("Icon", Icon).mount("#app");
