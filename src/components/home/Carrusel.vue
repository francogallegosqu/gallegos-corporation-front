<template>
  <div class="carrusel d-flex justify-content-center align-items-center">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
      style="max-width: 600px"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active button-slider"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class="button-slider"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class="button-slider"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/marketing.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/marketing.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/marketing.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.carrusel {
  min-height: 100vh;
  background-color: #071121;
}

.button-slider {
  border-radius: 50%;
  /* background: #3d7eb9; */
  background: #fff;
  width: 30px !important;
  height: 5px !important;
  /* border: 1px solid #3d7eb9; */
}
.carousel-indicators .active {
  border-radius: 50%;
  background: #3d7eb9;
  width: 30px !important;
  height: 5px !important;
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
