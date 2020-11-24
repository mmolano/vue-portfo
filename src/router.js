import { createRouter, createWebHashHistory } from "vue-router";
import Portfolio from "./components/Portfolio";

const routes = [
    {
        path: '/', component: Portfolio
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'underline font-bold'
})

export default router
