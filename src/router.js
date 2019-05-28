import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from "@/components/BasicLayout";
import Home from "@/views/Home";
import SessionLayout from "@/components/SessionLayout";
import Login from "@/views/user/Login";
import Register from "@/views/user/Register";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: BasicLayout,
            redirect: '/home',
            children: [
                {
                    // 当 /home 匹配成功，
                    // Home 会被渲染在 BasicLayout 的 <router-view> 中
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                },
                {
                    path: 'region',
                    name: 'region',
                    component: () => import(/* webpackChunkName: "region" */ './views/region/Region.vue')
                },
                {
                    path: 'country',
                    name: 'country',
                    component: () => import(/* webpackChunkName: "country" */ './views/country/Country.vue')
                },
                {
                    path: 'department',
                    name: 'department',
                    component: () => import(/* webpackChunkName: "department" */ './views/department/Depart.vue')
                },
                {
                    path: 'task',
                    name: 'task',
                    component: () => import(/* webpackChunkName: "task" */ './views/task/Task.vue')
                },
                {
                    path: 'employ',
                    name: 'employ',
                    component: () => import(/* webpackChunkName: "employ" */ './views/employ/Employee.vue')
                },
            ]
        },
        {
            path: '/session',
            component: SessionLayout,
            redirect: '/session/login',
            children: [
                {
                    // 当 /session/login 匹配成功，
                    // Login 会被渲染在 SessionLayout 的 <router-view> 中
                    path: 'login',
                    name: 'login',
                    component: Login
                },
                {
                    // 当 /session/register 匹配成功，
                    // Register 会被渲染在 SessionLayout 的 <router-view> 中
                    path: 'register',
                    name: 'register',
                    component: Register
                },
            ]
        },
    ]
})
