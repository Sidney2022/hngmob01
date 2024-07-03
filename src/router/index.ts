import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/products'
      },
      {
        path: 'products',
        component: () => import('@/views/ProductsPage.vue')
      },
      {
        path: 'checkout',
        component: () => import('@/views/CheckOutPage.vue')
      },
      {
        path: 'order-success',
        component: () => import('@/views/OrderSuccess.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
