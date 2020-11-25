import { createRouter, createWebHashHistory } from "vue-router";

import Portfolio from "./components/Portfolio";
import ProjectView from "./views/ProjectView";
import NotFoundView from "./views/NotFoundView";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Portfolio
    },
    {
        path: '/project/:id',
        name: 'Project',
        component: ProjectView
    },
    {
        path: '/:catchAll(.*)',
        name: 'Not Found',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'underline font-bold'
})

export default router
