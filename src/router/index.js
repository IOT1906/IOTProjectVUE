import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Leave from '../views/Leave.vue'
import Menu from '../views/Menu.vue'
import Annual from '../views/Annual.vue'

const routes = [{
        path: "/",
        redirect: "/Login" // 重定向 你每次项目启动不用手动输入路由，进来的界面就是登录
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Annual',
        name: 'Annual',
        component: Annual
    },

    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
        children: [{
            path: '/Leave', //  只有嵌套才能出现在菜单的右侧
            name: 'Leave',
            component: Leave
        }, ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router