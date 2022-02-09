import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

const steps = [];

const lastStep = 10;

for (let i = 2; i <= lastStep; i++) {
    const componentName = `Step${i.toString().padStart(2, "0")}`;
    steps.push({
        path: "/krok-" + i,
        meta: { title: "Krok " + i, step: i },
        component: () => import(`./views/${componentName}.vue`),
    });
}

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    {
        path: "/",
        component: Home,
        meta: { title: "Home", step: 1 },
    },
    ...steps,
    { path: "/:path(.*)", component: NotFound },
];
