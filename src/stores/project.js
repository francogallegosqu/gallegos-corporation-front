import { defineStore } from 'pinia'
import Api from '../api'
export const projectStore = defineStore('projectStore', {
  state: () => ({ projects: [], meta: {} }),
  getters: {
    getWidthScreen: (state) => state.projects,
  },
  actions: {
    async loadProjects(params) {
      const { pageSize, page } = params
      const { data } = await Api.get(
        `/api/projects?populate[]=image&pagination[pageSize]=${
          pageSize || 8
        }&pagination[page]=${page || 1}`
      )
      this.projects = data.data
      this.meta = data.meta
    },
  },
})
