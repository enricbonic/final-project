import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: 'maintasks',
                name: 'maintasks',
                component: () => import('../components/MainTasks.vue'),
            },
            {
                path: 'creartask',
                name: 'creartask',
                component: () => import('../components/CrearTask.vue'),
            },
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/Auth.vue'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../components/Login.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../components/Register.vue'),
            }

        ]
        
        
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})


export default router;