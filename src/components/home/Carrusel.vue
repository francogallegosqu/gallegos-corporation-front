<template>
  <div class="carrusel d-flex justify-content-start align-items-end">
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
          <div class="item w-100">
            <div
              class="sub-item d-flex justify-content-center align-items-center"
            >
              <div class="text" style="width: 80%">
                <h1 class="title-item-carrusel">
                  {{ element.title }}
                </h1>
                <p class="text-item-carrusel">
                  {{ element.text }}
                </p>
              </div>
            </div>
            <div class="sub-item">
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
          text: 'Un software innovador puede cambiar la forma en que las personas trabajan, comunican y experimentan el mundo digital. Es una herramienta valiosa para empresas y organizaciones que buscan mejorar su competitividad y eficiencia en un mercado cada vez más tecnológico.',
          image: 'cubos.jpg',
        },
        {
          title: 'MARKETING DIGITAL PARA POTENCIAR TU MARCA',
          text: 'Un software innovador puede cambiar la forma en que las personas trabajan, comunican y experimentan el mundo digital. Es una herramienta valiosa para empresas y organizaciones que buscan mejorar su competitividad y eficiencia en un mercado cada vez más tecnológico.',
          image: 'cubos.jpg',
        },
        {
          title: 'MARKETING DIGITAL PARA POTENCIAR TU MARCA',
          text: 'Un software innovador puede cambiar la forma en que las personas trabajan, comunican y experimentan el mundo digital. Es una herramienta valiosa para empresas y organizaciones que buscan mejorar su competitividad y eficiencia en un mercado cada vez más tecnológico.',
          image: 'cubos.jpg',
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
#carouselExampleIndicators {
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 100px;
  .carousel-inner {
    border: solid 2px $color-border-carrusel;
    border-radius: 20px;
    .item {
      .sub-item {
        .title-item-image {
          border-radius: 20px;
          object-fit: cover;
        }
      }
    }
  }
  .carousel-indicators {
    margin-bottom: -2.3rem !important ;
    .button-slider {
      border-radius: 50%;
      background: #4970b0;
      border: solid 2px #fff;
      width: 0.1mm !important;
      height: 0.1mm !important;
      padding: 7px;
      opacity: 1;
    }
    .active {
      border-radius: 50%;
      border: solid 2px #fff;
      background: black;
      width: 0.1mm !important;
      height: 0.1mm !important;
      padding: 7px;
    }
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
}

@media (max-width: $movil-xl-size) {
  .carousel-inner {
    .item {
      display: flex;
      flex-direction: column-reverse;
      .sub-item {
        .text {
          margin-top: 10px;
          margin-bottom: 5px;
          .title-item-carrusel {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: 4vw;
            line-height: 4vw;
            letter-spacing: 0.04em;
          }
          .text-item-carrusel {
            font-size: 3vw;
            line-height: 3vw;
          }
        }
      }
    }
  }
}

@media (min-width: $tablet-size) {
  .carousel-inner {
    .item {
      display: flex;
      flex-direction: row;
      .sub-item {
        width: 50%;
        .text {
          .title-item-carrusel {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: 2.5vw;
            line-height: 2.5vw;
            letter-spacing: 0.04em;
          }
          .text-item-carrusel {
            font-size: 1.7vw;
            line-height: 2.5vw;
          }
        }
      }
    }
  }
}

@media (min-width: $desktop-size) {
  .carousel-inner {
    .item {
      display: flex;
      flex-direction: row;
      .sub-item {
        width: 50%;
        .text {
          .title-item-carrusel {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: 3.5vw;
            line-height: 3.5vw;
            letter-spacing: 0.04em;
          }
          .text-item-carrusel {
            font-size: 1.7vw;
            line-height: 2vw;
          }
        }
      }
    }
  }
}
</style>
