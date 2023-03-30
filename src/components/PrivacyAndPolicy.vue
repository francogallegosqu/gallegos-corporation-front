<template>
  <div>
    <Hero :title="getPage?.content?.policy?.title" />
    <div class="row policy-content">
      <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
        <div v-for="item in getPage?.content?.policy?.list" :key="item.id">
          <p>
            <span v-if="item?.subtitle" class="subtitle">{{
              item?.subtitle
            }}</span>
            {{ item?.text }}
          </p>
          <div v-if="item?.listText">
            <p v-for="subItem in item?.listText" :key="subItem.id">
              {{ subItem?.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
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
<style scoped lang="scss">
.policy-content {
  display: flex;
  justify-content: center;
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
  p {
    .subtitle {
      color: $color-blue-primary;
    }
    font-size: 18px !important;
    text-align: justify;
  }
}
</style>
