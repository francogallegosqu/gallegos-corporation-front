<template>
  <div id="preloader" class="preloader">
    <div class="content">LOADING...</div>
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  .content {
    color: $color-blue-primary;
    font-size: 44px;
    font-weight: 900;
  }
}
</style>
