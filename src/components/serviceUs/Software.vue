<template>
  <div>
    <TemplateVue
      :title="getPage?.content?.services?.software?.title"
      :phrase="getPage?.content?.services?.software?.phrase"
      :message="getPage?.content?.services?.software?.message"
      :messageTwo="getPage?.content?.services?.software?.messageTwo"
      :messageThree="getPage?.content?.services?.software?.messageThree"
      :photo="'/assets/service/software.jpg'"
      :subservice="getPage?.content?.services?.software?.subservice"
      :listNumber="getPage?.content?.services?.software?.grid"
      :howork="getPage?.content?.services?.howork"
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
