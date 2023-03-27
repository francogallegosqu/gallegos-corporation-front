<template>
  <div>
    <Hero :title="getPage?.content?.contactView?.title" />
  </div>
</template>
<script>
import Hero from './global/Hero.vue'
import { mapState } from 'pinia'
import { pageStore } from '../stores'
export default {
  components: {
    Hero,
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
}
</script>
