import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/comic',
    name: 'Index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/comic/agregar',
    name: 'Agregar',
    component: () => import('../views/Agregar.vue')
  },
  {
    path: '/comic/editar/:id',
    name: 'Editar',
    component: () => import('../views/Editar.vue')
  },
  {
    path: '/comic/borrar/:id',
    name: 'Borrar',
    component: () => import('../views/Borrar.vue')
  },
  {
    path: '/comic/:id',
    name: 'Obtener',
    component: () => import('../views/Obtener.vue')
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
