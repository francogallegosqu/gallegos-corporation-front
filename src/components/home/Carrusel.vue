<template>
  <div class="carrusel d-flex justify-content-center align-items-start">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
      style="min-width: 1337px; max-width: 1337px"
    >
      <div class="carousel-indicators">
        <div class="carrusel-indicators-inside d-flex justify-content-center">
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
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div style="width: 80%">
                <h1 class="title-item-carrusel">
                  MARKETING DIGITAL PARA POTENCIAR TU MARCA
                </h1>
                <p class="text-item-carrusel">
                  Surgido en la década de 1990, el Marketing Digital mudó la
                  manera como las empresas utilizan la tecnología en la
                  promoción de sus negocios. El término se ha tornado más
                  popular a medida que las personas pasaran a utilizar más
                  dispositivos digitales en el proceso de compra, sea para
                  buscar productos o para realizar compras en sí.
                </p>
              </div>
            </div>
            <div class="col-6">
              <img
                src="@/assets/marketing.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div>
                <h1 class="title-item-carrusel">
                  MARKETING DIGITAL PARA POTENCIAR TU MARCA
                </h1>
                <p class="text-item-carrusel">
                  Surgido en la década de 1990, el Marketing Digital mudó la
                  manera como las empresas utilizan la tecnología en la
                  promoción de sus negocios. El término se ha tornado más
                  popular a medida que las personas pasaran a utilizar más
                  dispositivos digitales en el proceso de compra, sea para
                  buscar productos o para realizar compras en sí.
                </p>
              </div>
            </div>
            <div class="col-6">
              <img
                src="@/assets/marketing.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div>
                <h1 class="title-item-carrusel">
                  MARKETING DIGITAL PARA POTENCIAR TU MARCA
                </h1>
                <p class="text-item-carrusel">
                  Surgido en la década de 1990, el Marketing Digital mudó la
                  manera como las empresas utilizan la tecnología en la
                  promoción de sus negocios. El término se ha tornado más
                  popular a medida que las personas pasaran a utilizar más
                  dispositivos digitales en el proceso de compra, sea para
                  buscar productos o para realizar compras en sí.
                </p>
              </div>
            </div>
            <div class="col-6">
              <img
                src="@/assets/marketing.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carousel-indicators .button-slider {
  border-radius: 50%;
  background: #4970b0;
  border: solid 2px #fff;
  width: 0.1mm !important;
  height: 0.1mm !important;
  padding: 7px;
  opacity: 1;
}
.carousel-indicators {
  margin-bottom: -2.3rem !important ;
}
.carrusel-indicators-inside {
  background: #4970b0;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 17px;
  border-radius: 20px;
  opacity: 0.7;
}
.carousel-indicators .active {
  border-radius: 50%;
  border: solid 2px #fff;
  background: black;
  width: 0.1mm !important;
  height: 0.1mm !important;
  padding: 7px;
}

.hero__img {
  min-height: 100%;
  width: 660px;
  height: 100%;
}
.carousel-inner {
  border: solid 1px #3d7eb9;
  border-radius: 20px;
}
</style>
