import { defineStore } from 'pinia'
import { i18n } from '../i18n'
import { options } from '../i18n/option'
export const pageStore = defineStore('pageStore', {
  state: () => ({
    content: {},
    lang: 'es',
  }),
  getters: {
    getPage: (state) => state.content,
    getLang: (state) => state.lang,
  },
  actions: {
    async loadPage(lang) {
      i18n.global.locale = lang
      document.querySelector('html').setAttribute('lang', lang)
      this.lang = lang
      const content = options[lang]
      this.content = content
    },
  },
})
