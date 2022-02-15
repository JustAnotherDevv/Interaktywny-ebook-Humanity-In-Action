import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

const steps = [];

const lastStep = 40;

const meta = {
    15: { bg: "#013193", dark: true },
    16: { bg: "#3F8BD7", dark: true },
    37: { darkTopBar: true },
    38: { bg: "#000", dark: true },
    39: { bg: "#000", dark: true },
};

for (let i = 1; i <= lastStep; i++) {
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
        meta: { title: "Home", step: 1, hideTopBar: true },
    },
    ...steps,
    { path: "/:path(.*)", component: NotFound },
];
