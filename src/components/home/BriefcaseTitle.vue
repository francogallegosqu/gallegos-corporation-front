<template>
  <div class="briefcase">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>{{ getPage?.content?.briefCaseTitle?.title }}</h2>
      <h2 class="circle"></h2>
    </div>
    <div class="row sub-briefcase">
      <div class="col-12 col-sm-8">
        <h2 class="title-two">
          {{ getPage?.content?.briefCaseTitle?.subtitle }}
        </h2>
      </div>
      <div class="col-12 col-sm-3">
        <p class="background-service">
          <router-link
            class="a-target"
            @click="goTop()"
            :to="{ name: 'projects' }"
            >{{ getPage?.content?.briefCaseTitle?.button }}</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { pageStore, topStore } from '../../stores'
export default {
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
  methods: {
    ...mapActions(topStore, ['goTop']),
  },
}
</script>

<style scoped lang="scss">
.briefcase {
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  padding-top: 100px;
  margin-bottom: 50px;
  .title {
    margin: 15px;
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    letter-spacing: 0.04em;
    color: $color-blue-primary;
    display: flex;
    align-items: center !important;
    justify-content: start;
    align-content: end;
    gap: 0.5rem;
    .circle {
      height: 10px !important;
      width: 10px !important;
      border-radius: 20px;
      background: $color-blue-primary;
    }
  }
  .sub-briefcase {
    padding: 0px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .background-service {
      text-align: center;
      background: $bg-degraded;
      border-radius: 4px 10px;
      padding: 5px;
      .a-target {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>
