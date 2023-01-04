<template>
  <div class="carrusel d-flex justify-content-center align-items-center">
    <div class="card" style="width: 220px; border: 0px">
      <img
        src="@/assets/gato.jpg"
        class="card-img-top"
        alt="..."
        style="width: 100%"
      />
      <div class="card-body">
        <h5 class="card-title" style="color: black">Card title</h5>
        <p class="card-text" style="color: black">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
