<template>
  <div class="hero-global">
    <h1>Detalles de Nuestra Historia</h1>
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
