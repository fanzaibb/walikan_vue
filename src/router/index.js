import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Walikan from '../views/Walikan.vue'


Vue.use(Router)

export default new Router({
  // linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/walikan'
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/walikan',
      name: 'walikan',
      component: Walikan
    },
    {
      path: '*', //由上而下都找不到匹配路由，便會連至此路由；*在此代表所有網址
      name: 'not-found',
      component: NotFound
    }
  ]
})