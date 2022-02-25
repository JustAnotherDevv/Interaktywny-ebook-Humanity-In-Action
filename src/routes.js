import Home from "./views/Home.vue";
import About from "./views/About.vue";
import TableOfContents from "./views/TableOfContents.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import NotFound from "./views/NotFound.vue";
import { store } from "@/store.js";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:80/";

const steps = [];

const lastStep = 80;

const meta = {
    15: { bg: "#013193", dark: true },
    16: { bg: "#3F8BD7", dark: true },
    37: {
        topBarClass: "bg-black",
        darkTopBar: true,
        dark: true,
        bg: "#000",
    },
    38: { bg: "#000", dark: true },
    39: { bg: "#000", dark: true },
    40: { bg: "#000", dark: true },
    41: { bg: "#000", dark: true },
    42: { mainClass: "bg-black", topBarClass: "bg-black", darkTopBar: true },
    // 44: { bg: "#000", dark: true },
    // 45: { bg: "#000", dark: true },
    46: { mainClass: "bg-black", topBarClass: "bg-black", darkTopBar: true },
    61: { bg: "#000", dark: true },
    63: {
        topBarClass:
            "bg-[url(/assets/63/nav-bg.svg)] bg-no-repeat bg-cover bg-top sm:pb-48 pb-24",
        darkTopBar: true,
    },
    64: { bg: "#000", dark: true },
    65: { bg: "#000", dark: true },
    72: { topBarClass: "bg-black", darkTopBar: true },
};

for (let i = 1; i <= lastStep; i++) {
    const componentName = `Step${i.toString().padStart(2, "0")}`;
    const viewMeta = { title: "Krok " + i, step: i, ...meta[i] };
    steps.push({
        path: "/krok-" + i,
        meta: viewMeta,
        component: () => import(`./views/${componentName}.vue`),
    });
}

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    {
        path: "/",
        component: Home,
        meta: { title: "Home", step: 1, hideTopBar: true },
    },
    {
        path: "/o-nas",
        component: About,
        meta: { title: "O nas" },
    },
    {
        path: "/spis-tresci",
        component: TableOfContents,
        meta: { title: "Spis treści" },
    },
    {
        path: "/login",
        component: Login,
        meta: { title: "Zaloguj się" },
        beforeEnter: (to, from, next) => {
            if (store.user.isLoggedIn) {
                console.log("here logged");
                next("/");
            } else {
                console.log("here not logged");
                next();
            }
        },
    },
    {
        path: "/login/facebook",
        beforeEnter: (to, from, next) => {
            if (!store.user.isLoggedIn) {
                axios
                    .get("/api/user")
                    .then(({ data }) => {
                        store.user.setAsLoggedIn();
                        next("/krok-1");
                    })
                    .catch(() => {
                        next("/login");
                    });
            } else {
                next("/krok-1");
            }
        },
    },
    {
        path: "/register",
        component: Register,
        meta: { title: "Zarejestruj się" },
        beforeEnter: (to, from, next) => {
            if (store.user.isLoggedIn) {
                next("/");
            } else {
                next();
            }
        },
    },
    ...steps,
    { path: "/:path(.*)", component: NotFound },
];
