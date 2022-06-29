import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Form from './components/Form.vue'
import Usuarios from './components/Usuarios.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/form', component: Form },
        { path: '/usuarios', component: Usuarios },
    ]
})