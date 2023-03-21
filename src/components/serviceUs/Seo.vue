<template>
  <div>
    <TemplateVue
      :title="getPage?.content?.services?.seo?.title"
      :phrase="getPage?.content?.services?.seo?.phrase"
      :message="getPage?.content?.services?.seo?.message"
      :photo="'/assets/service/seo.jpg'"
      :video="'https://www.youtube-nocookie.com/embed/QUnslPYf3fc'"
      :important="getPage?.content?.services?.seo?.important"
      :strategy="getPage?.content?.services?.seo?.strategy"
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
