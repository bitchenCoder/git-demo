import Home from '../views/Home.vue';
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]


// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;