<template>
  <div class="first-image">
    <div class="content">
      <h1 id="first-image-title">{{ getPage?.content?.firstImage?.title }}</h1>
      <h3 id="first-image-subtitle">
        {{ getPage?.content?.firstImage?.subtitle }}
      </h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { pageStore } from '../../stores'
export default {
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
  methods: {
    firstUpdate() {
      this.onScroll('first-image-title')
      this.onScroll('first-image-subtitle')
    },
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.firstUpdate)
  },
  mounted() {
    window.addEventListener('scroll', this.firstUpdate)
  },
}
</script>

<style scoped lang="scss">
.first-image {
  margin-top: 100px;
  width: 100%;
  height: 400px;
  background: no-repeat url('@/assets/first-image-home.jpg');
  background-size: cover;
  background-position: center;
  .content {
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    h1 {
      text-align: center;
      font-weight: 800;
      font-size: 8vmax;
      line-height: 6rem;
      color: $bg-color-dark;
      opacity: 0;
      transform: scale(0.5);
      transition: 0.7s ease-in-out transform, 0.7s ease-in-out opacity;
    }
    h3 {
      margin-top: 2rem;
      font-weight: 800;
      font-size: 3vmax;
      line-height: 5rem;
      /* color: whit; */
      opacity: 0;
      transform: scale(0.5);
      transition: 0.7s ease-in-out transform, 0.7s ease-in-out opacity;
    }
  }
}
.item-zoom {
  @include animation-small-big(0.7s);
}
</style>
