import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/MainPage',
    component: () => import('@/components/index.vue')
  }, 
  {
    path: '/MyNotesPage',
    name: 'MyNotesPage',
    component: () => import('@/views/MyNotesPage.vue')
  }, 
  {
    path: '/MainPage',
    name: 'MainPage',
    component: () => import('@/views/MainPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
