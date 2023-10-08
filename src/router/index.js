import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/library',
    name: 'library',
    component: () => import('../views/LibraryView.vue')
  },
  {
    path: '/book1/:id',
    name: 'book1',
    component: () => import('../views/Book1View.vue'),
    children: [
      {
        path: '1',
        component: () => import('../views/books/book1/Page1View.vue'),
      },
      {
        path: '2',
        component: () => import('../views/books/book1/Page2View.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
