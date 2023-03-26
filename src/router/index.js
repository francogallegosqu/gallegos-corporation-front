import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { pageStore } from '../stores'
import { i18n } from '../i18n'
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
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'service',
          name: 'service',
          redirect: { name: 'web' },
          children: [
            {
              path: 'web',
              name: 'web',
              component: () => import('../views/WebDevelopmentView.vue'),
            },
            {
              path: 'seo',
              name: 'seo',
              component: () => import('../views/SeoView.vue'),
            },
            {
              path: 'apps',
              name: 'apps',
              component: () => import('../views/AppsView.vue'),
            },
            {
              path: 'blockchain',
              name: 'blockchain',
              component: () => import('../views/BlockchainView.vue'),
            },
            {
              path: 'software',
              name: 'software',
              component: () => import('../views/SoftwareView.vue'),
            },
          ],
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue'),
        },
      ],
    },
    //   component: () => import('../views/AboutView.vue'),
  ],
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const lang = to.params?.lang
  const languages = i18n.global.availableLocales
  const pgeStore = pageStore()
  const paramLang = languages.includes(lang) ? lang : pgeStore.getLang
  pgeStore.loadPage(paramLang)
  return next()
})

export default router
