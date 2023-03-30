<template>
  <div>
    <TemplateVue
      :title="getPage?.content?.services?.marketing?.title"
      :phrase="getPage?.content?.services?.marketing?.phrase"
      :message="getPage?.content?.services?.marketing?.message"
      :messageTwo="getPage?.content?.services?.marketing?.messageTwo"
      :messageThree="getPage?.content?.services?.marketing?.messageThree"
      :photo="'/assets/service/marketing/marketing.png'"
      :video="'https://www.youtube-nocookie.com/embed/qKaGMjcXBak'"
      :titleListNumber="getPage?.content?.services?.marketing?.titleListNumber"
      :listNumber="getPage?.content?.services?.marketing?.grid"
      :benefits="getPage?.content?.services?.marketing?.benefits"
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
