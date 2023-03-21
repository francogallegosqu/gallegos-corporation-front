import { defineStore } from 'pinia'
export const loaderStore = defineStore('loaderStore', {
  state: () => ({ isLoading: true }),
  getters: {
    getLoader: (state) => state.isLoading,
  },
  actions: {
    async updateLoader(status) {
      this.isLoading = status
    },
  },
})
