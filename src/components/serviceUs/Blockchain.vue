<template>
  <div>
    <TemplateVue
      :title="getPage?.content?.services?.web3?.title"
      :phrase="getPage?.content?.services?.web3?.phrase"
      :message="getPage?.content?.services?.web3?.message"
      :messageTwo="getPage?.content?.services?.web3?.messageTwo"
      :messageThree="getPage?.content?.services?.web3?.messageThree"
      :photo="'/assets/service/web3.jpg'"
      :subservice="getPage?.content?.services?.web3?.subservice"
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
