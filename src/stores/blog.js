import { defineStore } from 'pinia'
import Api from '../api'
import { i18n } from '../i18n'
export const blogStore = defineStore('blogStore', {
  state: () => ({ listBlog: [], meta: {} }),
  getters: {
    getListBlog: (state) => state.listBlog,
  },
  actions: {
    async loadBlog(params) {
      const { pageSize, page, lang } = params
      const langG = i18n.global.locale
      const { data } = await Api.get(
        `/api/blogs?populate[]=image&locale=${
          lang || langG
        }&pagination[pageSize]=${pageSize || 3}&pagination[page]=${page || 1}`
      )
      this.listBlog = data.data
      this.meta = data.meta
    },
  },
})
