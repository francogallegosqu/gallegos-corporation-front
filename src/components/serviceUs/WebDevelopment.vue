<template>
  <div>
    <TemplateVue
      :title="getPage?.content?.services?.webdevelopment?.title"
      :phrase="getPage?.content?.services?.webdevelopment?.phrase"
      :message="getPage?.content?.services?.webdevelopment?.message"
      :photo="'/assets/service/web.jpg'"
      :video="'https://www.youtube-nocookie.com/embed/IQx2c9ncmFo'"
      :barPhoto="'/assets/service/web-development.jpg'"
      :bar="getPage?.content?.services?.webdevelopment?.bar"
      :listNumber="getPage?.content?.services?.webdevelopment?.grid"
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
