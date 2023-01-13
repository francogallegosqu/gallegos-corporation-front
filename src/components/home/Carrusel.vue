<template>
  <div class="carrusel d-flex justify-content-center align-items-start">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <div class="carrusel-indicators-inside d-flex justify-content-center">
          <button
            v-for="(_, index) in buttons"
            :key="index"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            :data-bs-slide-to="index"
            :class="index == 0 ? 'active button-slider' : 'button-slider'"
            :aria-current="index == 0 ? 'true' : 'false'"
            :aria-label="`Slide ${index + 1}`"
          ></button>
        </div>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(element, index) in buttons"
          :key="index"
          :class="index == 0 ? 'active carousel-item' : 'carousel-item'"
        >
          <div class="row">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div style="width: 80%">
                <h1 class="title-item-carrusel">
                  {{ element.title }}
                </h1>
                <p class="text-item-carrusel">
                  {{ element.text }}
                </p>
              </div>
            </div>
            <div class="col-6">
              <img
                :src="`/src/assets/carrusel/${element.image}`"
                class="title-item-image d-block w-100"
                :alt="element.title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          title: 'SOFTWARE INNOVADOR PARA POTENCIAR TU EMPRESA',
          text: `Surgido en la década de 1990, el Marketing Digital mudó la
                  manera como las empresas utilizan la tecnología en la
                  promoción de sus negocios. El término se ha tornado más
                  popular a medida que las personas pasaran a utilizar más
                  dispositivos digitales en el proceso de compra, sea para
                  buscar productos o para realizar compras en sí.`,
          image: 'cubos.jpg',
        },
        {
          title: 'MARKETING DIGITAL PARA POTENCIAR TU MARCA',
          text: `Surgido en la década de 1990, el Marketing Digital mudó la
                  manera como las empresas utilizan la tecnología en la
                  promoción de sus negocios. El término se ha tornado más
                  popular a medida que las personas pasaran a utilizar más
                  dispositivos digitales en el proceso de compra, sea para
                  buscar productos o para realizar compras en sí.`,
          image: 'cubos.jpg',
        },
        {
          title: 'MARKETING DIGITAL PARA POTENCIAR TU MARCA',
          text: `Surgido en la década de 1990, el Marketing Digital mudó la
                  manera como las empresas utilizan la tecnología en la
                  promoción de sus negocios. El término se ha tornado más
                  popular a medida que las personas pasaran a utilizar más
                  dispositivos digitales en el proceso de compra, sea para
                  buscar productos o para realizar compras en sí.`,
          image: 'cubos.jpg',
        },
      ],
    }
  },
}
</script>
<style scoped>
#carouselExampleIndicators {
  right: 5%;
  left: 5%;
  position: absolute;
}
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

.carousel-inner {
  border: solid 1px #3d7eb9;
  border-radius: 20px;
}
.title-item-carrusel {
  font-family: 'Poppins';
  /* font-weight: 700; */
  font-weight: 900;
  /* font-size: 55px; */
  font-size: 3vw;
  /* line-height: 50px; */
  line-height: 3vw;
  letter-spacing: 0.04em;
}
.title-item-image {
  border-radius: 20px;
}
</style>
