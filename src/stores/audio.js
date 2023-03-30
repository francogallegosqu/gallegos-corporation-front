import { defineStore } from 'pinia'
export const audioStore = defineStore('audioStore', {
  state: () => ({ audio: {}, status: false }),
  getters: {
    getStatus: (state) => state.status,
  },
  actions: {
    updateMusic(value) {
      this.audio.value = value
      this.audio.value.loop = true
    },
    play() {
      this.audio.value.play()
      this.status = true
    },
    pause() {
      this.audio.value.pause()
      this.status = false
    },
  },
})
