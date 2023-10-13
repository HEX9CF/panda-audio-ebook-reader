import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '岁岁廿廿的节气之旅'
    },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/library',
    name: 'library',
    meta: {
      title: '书库 - 岁岁廿廿的节气之旅'
    },
    component: () => import('../views/LibraryView.vue')
  },
  {
    path: '/book1/:id',
    name: 'book1',
    meta: {
      title: '《岁岁廿廿的节气之旅（春季篇）》'
    },
    component: () => import('../views/Book1View.vue'),
    children: [
      {
        path: '1',
        component: () => import('@/views/pages/book1/Page1View.vue'),
      },
      {
        path: '2',
        component: () => import('@/views/pages/book1/Page2View.vue'),
      },
      {
        path: '3',
        component: () => import('@/views/pages/book1/Page3View.vue'),
      },
      {
        path: '4',
        component: () => import('@/views/pages/book1/Page4View.vue'),
      },
      {
        path: '5',
        component: () => import('@/views/pages/book1/Page5View.vue'),
      },
      {
        path: '6',
        component: () => import('@/views/pages/book1/Page6View.vue'),
      },
      {
        path: '7',
        component: () => import('@/views/pages/book1/Page7View.vue'),
      },
      {
        path: '8',
        component: () => import('@/views/pages/book1/Page8View.vue'),
      },
      {
        path: '9',
        component: () => import('@/views/pages/book1/Page9View.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于 - 岁岁廿廿的节气之旅'
    },
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
