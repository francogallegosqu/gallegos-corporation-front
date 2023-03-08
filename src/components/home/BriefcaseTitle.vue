<template>
  <div class="briefcase">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>Portafolio</h2>
      <h2 class="circle"></h2>
    </div>
    <div class="row sub-briefcase">
      <div class="col-12 col-sm-7">
        <h2 class="title-two">Nuestros Trabajos</h2>
      </div>
      <div class="col-12 col-sm-5">
        <p class="background-service">Ver Más</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.briefcase {
  margin: 20px;
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
      display: flex;
      justify-content: center;
      align-content: center;
      background: $bg-degraded;
      border-radius: 4px 10px;
      padding: 5px;
    }
  }
}
</style>
