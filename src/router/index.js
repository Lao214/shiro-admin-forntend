import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from "./routes"
// 引入vuex仓库

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import( '@/views/layout/index.vue'),
        title: 'layout页面',
        icon: 'file-sync',
        key: 'k-1',
        children: [...routes]
      },
      {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        hidden: true
      },
    ]
})
   
export default router