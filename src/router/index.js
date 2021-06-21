import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/Home/Home";
import UrlRedirect from "@/pages/UrlRedirect/UrlRedirect";
import NotFound from "@/pages/NotFound/NotFound";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/:url',
    name: 'UrlRedirect',
    component: UrlRedirect
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
