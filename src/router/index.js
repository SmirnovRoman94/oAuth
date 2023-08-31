import {createRouter, createWebHashHistory} from "vue-router";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import('@/views/home.vue'),
            name: "home"
        },
        {
            path: "/auth",
            component: () => import('@/views/auth.vue'),
            name: "auth"
        }
    ]
})