import { defineStore } from 'pinia'

import { i18n } from '../i18n'
export const langStore = defineStore('langStore', {
  state: () => ({ lang: '' }),
  getters: {
    getLang: (state) => state.lang,
  },
  actions: {
    async loadLang(lang) {
      i18n.global.locale = lang
      document.querySelector('html').setAttribute('lang', lang)
      this.lang = lang
    },
  },
})
