import { defineStore } from 'pinia'
export const topStore = defineStore('topStore', {
  actions: {
    goTop() {
      window.scrollTo(0, 0)
    },
  },
})
