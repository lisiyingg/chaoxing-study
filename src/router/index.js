import { createRouter, createWebHashHistory } from 'vue-router'
import HomeIndex from '../views/HomeIndex.vue'
import AccountManage from '../views/AccountManage.vue'

const routes = [
  { path: '/', name:'home', component: HomeIndex },
  { path: '/account', name:'account', component: AccountManage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
