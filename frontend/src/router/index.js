import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TareasView from '../views/TareasView.vue'
import ContadorView from '../views/ContadorView.vue'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistroView.vue'
import DesarrolloView from '../views/DesarrolloView.vue'

const routes = [
    {path: '/', name: 'Home', component: HomeView}, 
    {path: '/about', name: 'AboutView', component: AboutView}, 
    {path: '/tareas', name: 'TareasView', component: TareasView},
    {path: '/Contador', name: 'ContadorView', component: ContadorView},
    {path: '/login', name: 'LoginView', component: LoginView},
    {path: '/registro', name: 'RegistroView', component: RegistroView},
    {path: '/desarrollo', name: 'DesrrolloView', component: DesarrolloView}
]

const router = createRouter( {
    history: createWebHistory(),
    routes 
})

export default router 
