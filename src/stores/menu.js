import { defineStore } from 'pinia'
export const menuStore = defineStore('menuStore', {
  state: () => ({ isOpen: false }),
  getters: {
    getIsOpen: (state) => state.isOpen,
  },
  actions: {
    async updateOpen() {
      this.isOpen = !this.isOpen
    },
  },
})
