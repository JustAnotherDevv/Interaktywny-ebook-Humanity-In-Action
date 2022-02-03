import Home from "./views/Home.vue";
import Step02 from "./views/Step02.vue";
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
    { path: "/:path(.*)", component: NotFound },
];
