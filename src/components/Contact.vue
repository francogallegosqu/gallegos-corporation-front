<template>
  <div>
    <Hero :title="getPage?.content?.contactView?.title" />
    <div class="contact-content">
      <div>
        <h3 class="title">{{ getPage?.content?.contactView?.subtitle }}</h3>
      </div>
      <div class="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6">
        <p>{{ getPage?.content?.contactView?.message }}</p>
        <p>{{ getPage?.content?.contactView?.messageTwo }}</p>
      </div>
    </div>
    <ContactUs />
  </div>
</template>

<script>
import ContactUs from './home/ContactUs.vue'
import Hero from './global/Hero.vue'
import { mapState } from 'pinia'
import { pageStore } from '../stores'
export default {
  components: {
    Hero,
    ContactUs,
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
}
</script>

<style scoped lang="scss">
.contact-content {
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
  /* display: flex;
  justify-content: start;
  word-break: break-word; */
  .title {
    font-size: 2rem;
    font-weight: 900;
    color: $color-blue-primary;
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
