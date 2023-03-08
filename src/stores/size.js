import { defineStore } from 'pinia'
export const useSizeStore = defineStore('size', {
  state: () => ({ widthScreen: window.innerWidth }),
  getters: {
    getWidthScreen: (state) => state.widthScreen,
  },
  actions: {
    async loadCharacters() {
      window.addEventListener('resize', () => {
        this.widthScreen = window.innerWidth ? window.innerWidth : screen.width
      })
    },
  },
})
