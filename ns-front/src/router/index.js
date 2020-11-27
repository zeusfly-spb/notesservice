import Vue from 'vue'
import VueRouter from 'vue-router'

const RegisterView = require('../components/RegisterView.vue').default
const LoginView = require('../components/LoginView.vue').default

Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        component: RegisterView,
        meta: {title: 'Регистрация'}
    },
    {
        path: '/login',
        component: LoginView,
        meta: {title: 'Авторизация'}
    },
    {
        path: '*',
        redirect: '/login'
    }
]

export function createRouter () {
    const router = new VueRouter({routes})
    router.beforeEach((to, from, next) => {
        document.title = to.meta.title
        next()
    })
    return router
}