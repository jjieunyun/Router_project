import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/board',
    name: 'board',
    component: function () {
      return import( '../views/BoardView.vue')
    },
    //추가해야될것이 여러개라면 []로 사용하기
    children : [{
      path : ':page', 
      component : function() {return import('../components/pageComponent.vue')}
    }]
  },
  {
    path: '/user/:user',
    name: 'user',
    component: function () {
      return import('../views/UserView.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router