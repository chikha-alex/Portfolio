import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Portfolio from "../views/Portfolio.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio }
  ],
})

export default router
