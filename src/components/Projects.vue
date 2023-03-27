<template>
  <div>
    <Hero :title="getPage?.content?.projects?.title" />
    <div class="projects-content">
      <div>
        <h1 class="title">{{ getPage?.content?.projects?.subtitle }}</h1>
      </div>
    </div>
    <BriefCaseVue />
  </div>
</template>

<script>
import BriefCaseVue from './global/BriefCase.vue'
import Hero from './global/Hero.vue'
import { mapState } from 'pinia'
import { pageStore } from '../stores'
export default {
  components: {
    Hero,
    BriefCaseVue,
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
}
</script>

<style scoped lang="scss">
.projects-content {
  @media (max-width: $movil-size) {
    margin: 30px 3px 30px 3px;
  }
  @media (min-width: $movil-size) {
    margin: 20px 40px 20px 40px;
  }
  @media (min-width: $tablet-size) {
    margin: 20px 60px 20px 60px;
  }
  @media (min-width: $desktop-size) {
    margin: 20px 70px 20px 70px;
  }
  .title {
    font-size: 2rem;
    font-weight: 900;
    color: $color-blue-primary;
    margin-bottom: 3rem;
  }
  .subtitle {
    font-size: 3.7rem;
    font-weight: 600;
    line-height: 4rem;
    margin-bottom: 30px;
  }
  p {
    font-size: 17px;
    line-height: 1.6;
  }
}
</style>
