<template>
  <div>
    <TemplateVue
      :title="getPage?.content?.services?.apps?.title"
      :phrase="getPage?.content?.services?.apps?.phrase"
      :message="getPage?.content?.services?.apps?.message"
      :photo="'/assets/service/app.jpg'"
      :video="'https://www.youtube-nocookie.com/embed/-VnXVRN1Ix8'"
    />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { pageStore } from '../../stores'
import TemplateVue from './Template.vue'
export default {
  components: {
    TemplateVue,
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
}
</script>
