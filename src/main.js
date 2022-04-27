import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

// router.beforeEach((to, from) => {
//     console.log({ to });
//     // ...
//     // explicitly return false to cancel the navigation
//     return true;
// });

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

app.use(router);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.mount("#app");
