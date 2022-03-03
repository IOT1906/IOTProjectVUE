import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
//一周
import Leave from '../views/apply/Leave.vue'
import Year from '../views/apply/Year.vue'
import Dimi from '../views/apply/Dimi.vue'
import Entering from '../views/apply/Entering.vue'
import Man from '../views/apply/Man.vue'

//二周
import HandOver from '../views/breve/HandOver.vue'
import Interview from '../views/breve/Interview.vue'
import Carapply from '../views/breve/Carapply.vue'
import Rece from '../views/breve/Rece.vue'
import Engrave_chapter from '../views/breve/Engrave_chapter.vue'
import File_management from '../views/breve/File_management.vue'
import Announcement_information from '../views/breve/Announcement_information.vue'
import Acquisitionrequest from '../views/breve/Acquisitionrequest.vue'
import Radd from '../views/breve/Radd.vue'
import Use_seal from '../views/breve/Use_seal.vue'
import Car_insurance from '../views/breve/Car_insurance.vue'
import Car_upkeep from '../views/breve/Car_upkeep.vue'
import Car_service from '../views/breve/Car_service.vue'
import Car_unlawful from '../views/breve/Car_unlawful.vue'
import Meeting from '../views/breve/Meeting.vue'
import Procur from '../views/breve/Procur.vue'
import borrow from '../views/breve/borrow.vue'
import connect from '../views/breve/connect.vue'





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

//二周
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
//Rece接待申请表
{
    path: '/Rece',
    name: 'Rece',
    component: Rece
},
//Engrave_chapter刻章申请
{
    path: '/Engrave_chapter',
    name: 'Engrave_chapter',
    component: Engrave_chapter
},
//文件管理申请
{
    path: '/File_management',
    name: 'File_management',
    component: File_management
},
//公告基本信息
{
    path: '/Announcement_information',
    name: 'Announcement_information',
    component: Announcement_information
},
//固定资产购置申请表
{
    path: '/Acquisitionrequest',
    name: 'Acquisitionrequest',
    component: Acquisitionrequest
},
//人力资源需求申请表
{
    path: '/Radd',
    name: 'Radd',
    component: Radd
},
//用章申请表
{
    path: '/Use_seal',
    name: 'Use_seal',
    component: Use_seal
},
//车辆保险记录表
{
    path: '/Car_insurance',
    name: 'Car_insurance',
    component: Car_insurance
},
//车辆保养记录表
{
    path: '/Car_upkeep',
    name: 'Car_upkeep',
    component: Car_upkeep
},
//车辆维修记录表
{
    path: '/Car_service',
    name: 'Car_service',
    component: Car_service
},
//车辆违章记录表
{
    path: '/Car_unlawful',
    name: 'Car_unlawful',
    component: Car_unlawful
},
//会议新增表
{
    path: '/Meeting',
    name: 'Meeting',
    component: Meeting
},
//日常用品采购
{
    path: '/Procur',
    name: 'Procur',
    component: Procur
},
//固定资产资料借用流程
{
    path: '/borrow',
    name: 'borrow',
    component: borrow
},
//固定资产交接申请流程
{
    path: '/connect',
    name: 'connect',
    component: connect
},
//菜单
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
    {
        path: '/Rece', //  只有嵌套才能出现在菜单的右侧
        name: 'Rece',
        component: Rece
    },
    {
        path: '/Engrave_chapter', //  只有嵌套才能出现在菜单的右侧
        name: 'Engrave_chapter',
        component: Engrave_chapter
    },
    {
        path: '/File_management', //  只有嵌套才能出现在菜单的右侧
        name: 'File_management',
        component: File_management
    },
    {
        path: '/Announcement_information',//  只有嵌套才能出现在菜单的右侧
        name: 'Announcement_information',
        component: Announcement_information
    },
    {
        path: '/Acquisitionrequest',//  只有嵌套才能出现在菜单的右侧
        name: 'Acquisitionrequest',
        component: Acquisitionrequest
    },
    {
        path: '/Radd',//  只有嵌套才能出现在菜单的右侧
        name: 'Radd',
        component: Radd
    },
    {
        path: '/Use_seal',//  只有嵌套才能出现在菜单的右侧
        name: 'Use_seal',
        component: Use_seal
    },
    {
        path: '/Car_insurance',//  只有嵌套才能出现在菜单的右侧
        name: 'Car_insurance',
        component: Car_insurance
    },
    {
        path: '/Car_upkeep',//  只有嵌套才能出现在菜单的右侧
        name: 'Car_upkeep',
        component: Car_upkeep
    },
    {
        path: '/Car_service',//  只有嵌套才能出现在菜单的右侧
        name: 'Car_service',
        component: Car_service
    },
    {
        path: '/Car_unlawful',//  只有嵌套才能出现在菜单的右侧
        name: 'Car_unlawful',
        component: Car_unlawful
    },
    {
        path: '/Meeting',//  只有嵌套才能出现在菜单的右侧
        name: 'Meeting',
        component: Meeting
    },
    {
        path: '/Procur',//  只有嵌套才能出现在菜单的右侧
        name: 'Procur',
        component: Procur
    },
    {
        path: '/borrow',//  只有嵌套才能出现在菜单的右侧
        name: 'borrow',
        component: borrow
    },
    {
        path: '/connect',//  只有嵌套才能出现在菜单的右侧
        name: 'connect',
        component: connect
    },

    ]
},
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router