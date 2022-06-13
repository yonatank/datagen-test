import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '@/views/ProductsList'
import ProductPage from '@/views/ProductPage'

const routes = [
  {
    path: '/',
    name: 'productsList',
    component: ProductsList
  },
  {
    path: '/product',
    name: 'product',
    component: ProductPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
