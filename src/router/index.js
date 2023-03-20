import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import { pageStore } from '../stores'
import Render from '../components/lang/Render.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'lang', params: { lang: 'es' } },
    },
    {
      path: '/:lang',
      name: 'lang',
      component: Render,
      redirect: { name: 'home' },
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView,
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  // const storeLang = langStore()
  const pgeStore = pageStore()
  // storeLang.loadLang(to.params?.lang)
  pgeStore.loadPage(to.params?.lang)
  return next()
})

export default router
