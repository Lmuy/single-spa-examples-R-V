import Vue from 'vue'
import Router from 'vue-router'

// 路由引用组件
import Error404 from './components/404.vue'
import Error401 from './components/401.vue'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/vue', component: Error401 },
  { path: '/vue/404', component: Error404 },
  { path: '/vue/401', component: Error401 },
]

export const router = new Router({
  mode: 'history',
  routes: constantRouterMap
});
