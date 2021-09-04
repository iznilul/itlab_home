
import { createRouter,createWebHistory} from "vue-router";

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { title: '实验室主页' },
    component: () => import('../components/BaseLayout.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../components/404.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
