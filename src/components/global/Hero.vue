<template>
  <div class="hero-global">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="scss" scoped>
.hero-global {
  position: relative;
  z-index: 1;
  width: 100%;
  background: no-repeat url('/assets/hero/hero-header.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-weight: 600;
    margin: 5px;
  }
}
</style>
