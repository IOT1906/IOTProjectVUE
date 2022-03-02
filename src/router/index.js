import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Leave from '../views/apply/Leave.vue'
import Menu from '../views/Menu.vue'
import Year from '../views/apply/Year.vue'
import Dimi from '../views/apply/Dimi.vue'
import Entering from '../views/apply/Entering.vue'
import Man from '../views/apply/Man.vue'
import HandOver from '../views/breve/HandOver.vue'
import Interview from '../views/breve/Interview.vue'
import Carapply from '../views/breve/Carapply.vue'


const routes = [{
        path: "/",
        redirect: "/Login" // 重定向 你每次项目启动不用手动输入路由，进来的界面就是登录
    },
    //home
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    //login登录
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    //Year年度计划
    {
        path: '/Year',
        name: 'Year',
        component: Year
    },
    //Dimi离职
    {
        path: '/Dimi',
        name: 'Dimi',
        component: Dimi
    },
    //Entering员工录入
    {
        path: '/Entering',
        name: 'Entering',
        component: Entering
    },
     //Man人力资源
    {
        path: '/Man',
        name: 'Man',
        component: Man
    },
    //HandOver离职交接
    {
        path: '/HandOver',
        name: 'HandOver',
        component: HandOver
    },
     //HandOver离职面谈
    {
        path: '/Interview',
        name: 'Interview',
        component: Interview
    },
    //Carapply用车申请
    {
        path: '/Carapply',
        name: 'Carapply',
        component: Carapply
    },
    
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
        children: [{
            path: '/Leave', //  只有嵌套才能出现在菜单的右侧
            name: 'Leave',
            component: Leave
        }, 
        {
            path: '/Dimi', //  只有嵌套才能出现在菜单的右侧
            name: 'Dimi',
            component: Dimi
        },
        {
            path: '/Entering', //  只有嵌套才能出现在菜单的右侧
            name: 'Entering',
            component: Entering
        },
        {
            path: '/Man', //  只有嵌套才能出现在菜单的右侧
            name: 'Man',
            component: Man
        },
        {
            path: '/Year', //  只有嵌套才能出现在菜单的右侧
            name: 'Year',
            component: Year
        },
        {
            path: '/HandOver', //  只有嵌套才能出现在菜单的右侧
            name: 'HandOver',
            component: HandOver
        },
        {
            path: '/Interview', //  只有嵌套才能出现在菜单的右侧
            name: 'Interview',
            component: Interview
        },
        {
            path: '/Carapply', //  只有嵌套才能出现在菜单的右侧
            name: 'Carapply',
            component: Carapply
        },
    
    ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router