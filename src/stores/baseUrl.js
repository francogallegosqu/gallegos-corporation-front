import { defineStore } from 'pinia'
import { baseURL } from '../api'
export const baseUrlStore = defineStore('baseUrlStore', {
  state: () => ({ baseURL: baseURL }),
})
