import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name:'home',
    component: () => import('@/views/HomeView.vue'),
    children: [
       {
    path: '/skills',
    name:'skills',
    component: () => import('@/views/SkillsView.vue'),
    
  },
    {
    path: '/badges',
    name:'badges',
    component: () => import('@/views/BadgesView.vue'),
    
  }
    ]
  }
   

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
