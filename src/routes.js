import Home from "./views/Home.vue";
import Step02 from "./views/Step02.vue";
import Step03 from "./views/Step03.vue";
import Step04 from "./views/Step04.vue";
import Step05 from "./views/Step05.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    { path: "/", component: Home, meta: { title: "Home" } },
    {
        path: "/krok-2",
        meta: { title: "Krok 2" },
        component: Step02,
        // example of route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('./views/About.vue')
    },
    {
        path: "/krok-3",
        meta: { title: "Krok 3" },
        component: Step03,
    },
    {
        path: "/krok-4",
        meta: { title: "Krok 4" },
        component: Step04,
    },
    {
        path: "/krok-5",
        meta: { title: "Krok 5" },
        component: Step05,
    },
    { path: "/:path(.*)", component: NotFound },
];
