<template>
  <div class="service">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>Nuestros Servicios</h2>
      <h2 class="circle"></h2>
    </div>
    <h2 class="title-two">Servicios Que Ofrecemos</h2>
    <div class="row w-100 subtitle">
      <div class="col-12 col-sm-5">
        <p>
          Mejora de la eficacia de tu trabajo gracias a la automatización de
          procesos, aumentando la productividad de tu empresa.
        </p>
      </div>
      <div class="col-12 col-sm-5">
        <p class="background-service">Todos Los Servicios</p>
      </div>
    </div>
    <div class="row w-100 grid-container">
      <div
        id="grid-item-one"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <img src="@/assets/icons/icon-development.svg" alt="Development" />
          <h2>Web Development</h2>
          <p>
            Tu sitio web es la primera presentación a tus potenciales clientes,
            por eso es importante un diseño web de impacto.
          </p>
          <div class="button">
            <a href="/">Conoce Más</a>
          </div>
        </div>
      </div>
      <div
        id="grid-item-two"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <img src="@/assets/icons/icon-digital.svg" alt="Development" />
          <h2>Digital Marketing</h2>
          <p>
            Llega a tu público en el mejor momento con potentes
            automatizaciones.
          </p>
          <div class="button">
            <a href="/">Conoce Más</a>
          </div>
        </div>
      </div>
      <div
        id="grid-item-three"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <img src="@/assets/icons/icon-apps.svg" alt="Development" />
          <h2>Apps Development</h2>
          <p>
            Creación de software simple que pueda ser usado en dispositivos
            móviles como tabletas y celulares.
          </p>
          <div class="button">
            <a href="/">Conoce Más</a>
          </div>
        </div>
      </div>
      <div
        id="grid-item-four"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <img src="@/assets/icons/icon-seo.svg" alt="Development" />
          <h2>Seo Services</h2>
          <p>
            Estrategias y técnicas de optimización en una página web para que
            aparezca orgánicamente en buscadores de Internet como Google, Yahoo
            o Youtube.
          </p>
          <div class="button">
            <a href="/">Conoce Más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateZoom() {
      this.onScroll('grid-item-one')
      this.onScroll('grid-item-two')
      this.onScroll('grid-item-three')
      this.onScroll('grid-item-four')
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateZoom)
  },
}
</script>

<style lang="scss">
.service {
  margin: 20px;
  .title,
  .title-two {
    margin: 15px;
  }
  .title {
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
  .subtitle {
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
  .grid-container {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0;
    .grid-item {
      padding-bottom: 9px;
      padding-left: 7px;
      padding-right: 7px;
      .content {
        img {
          width: 20%;
        }
        background: $bg-degraded;
        margin: 2px;
        border-radius: 10px;
        word-break: break-word;
        display: flex;
        flex-direction: column;
        align-content: center;
        padding: 20px;
        text-align: start;
        width: 100%;
        height: 100%;
        min-height: 300px;
        .button {
          display: flex;
          justify-content: end;
          align-content: end;
          a {
            text-decoration: none;
            color: white;
          }
        }
      }
    }
    .item-zoom {
      @include animation-small-big(0.7s);
    }
  }
}
</style>
