<template>
  <div class="carrusel container p-4 pt-5" style="color: white">
    <div class="carrusel_box columns-2">
      <div>
        <span class="font-medium"> Text</span>
      </div>
      <div class="hero__img">
        <div class="bg-cover block">
          <img alt="Marketing logo" class="logo" src="@/assets/marketing.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carrusel {
  min-height: 100vh;
  background-color: #071121;
}
.carrusel_box {
  margin-top: 23px;
  border: solid 3px red;
  border-radius: 20px;
  height: 536px;
  width: 1337px;
}
.hero__img {
  min-height: 100%;
  width: 660px;
  height: 100%;
}
</style>
