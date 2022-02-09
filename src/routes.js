import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

const steps = [];

const lastStep = 15;

const meta = {
    15: { bg: "#013193" },
};

for (let i = 2; i <= lastStep; i++) {
    const componentName = `Step${i.toString().padStart(2, "0")}`;
    const viewMeta = { title: "Krok " + i, step: i, ...meta[i] };
    // if (meta[i]) {
    // }
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
        meta: { title: "Home", step: 1 },
    },
    ...steps,
    { path: "/:path(.*)", component: NotFound },
];
