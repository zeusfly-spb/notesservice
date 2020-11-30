import Vue from 'vue'
import VueRouter from 'vue-router'
// import {store} from '../store'


const RegisterView = require('../components/RegisterView.vue').default
const LoginView = require('../components/LoginView.vue').default
const HomeView = require('../components/HomeView.vue').default
const WelcomeView = require('../components/WelcomeView.vue').default
const SharedView = require('../components/SharedView.vue').default

Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        component: RegisterView,
        meta: {title: 'Регистрация', auth: false}
    },
    {
        path: '/login',
        component: LoginView,
        meta: {title: 'Авторизация', auth: false}
    },
    {
        path: '/home',
        component: HomeView,
        meta: {title: 'Личный кабинет', auth: true}
    },
    {
        path: '/welcome',
        component: WelcomeView,
        meta: {title: 'Успешная регистрация', auth: false}
    },
    {
        path: '/shared',
        component: SharedView,
        meta: {title: 'Заметка в доступе', auth: false}
    },
    // {
    //     path: '*',
    //     redirect: '/login'
    // }
]

export function createRouter () {
    const router = new VueRouter({routes})
    router.beforeEach((to, from, next) => {
        document.title = to.meta.title
        next()
    })
    return router
}