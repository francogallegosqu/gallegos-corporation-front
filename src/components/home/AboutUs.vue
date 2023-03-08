<template>
  <div class="about">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>Sobre Nosotros</h2>
      <h2 class="circle"></h2>
    </div>
    <h2 class="title-two">
      Confiado Por Clientes En Todo El Mundo Desde
      <span class="year">Siempre</span>
    </h2>
    <div class="description">
      <p>
        Gallegos Corporation Nació con el objetivo de brindar soluciones
        tecnológicas en un mundo tecnologico.
      </p>
    </div>
    <div class="row row-first">
      <div
        class="col-item col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-icons-text"
      >
        <div class="row row-second">
          <div
            id="row-second-one"
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <div class="icon">
                <img src="@/assets/icons/about-us/field-icon.svg" alt="Field" />
              </div>
              <h3>Primero en el Campo</h3>
            </div>
            <p>
              Expertos en el campo de software, mantenimiento de hardware y
              estrategias de publicidad.
            </p>
          </div>
          <div
            id="row-second-two"
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <div class="icon">
                <img src="@/assets/icons/about-us/reach-icon.svg" alt="Field" />
              </div>
              <h3>Fácil de Alcanzar</h3>
            </div>
            <p>Estamos dispuestos a asesorar y concretar tus proyectos.</p>
          </div>
          <div
            id="row-second-three"
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <div class="icon">
                <img src="@/assets/icons/about-us/world-icon.svg" alt="Field" />
              </div>
              <h3>Servicios en Todo el mundo</h3>
            </div>
            <p>
              Trabajamos con clientes a nivel mundial en todos nuestros
              servicios.
            </p>
          </div>
          <div
            id="row-second-four"
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <div class="icon">
                <img
                  src="@/assets/icons/about-us/support- icon.svg"
                  alt="Field"
                />
              </div>
              <h3>Soporte 24/7</h3>
            </div>
            <p>
              Atención a través de nuestros contactos oficiales, con información
              veraz, calidad de servicio y la protección de sus datos.
            </p>
          </div>
        </div>
      </div>
      <div
        id="about-img"
        class="col-item col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"
      >
        <img class="about-img" src="@/assets/about/abouT-us.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateZoom() {
      this.onScroll('row-second-one')
      this.onScroll('row-second-two')
      this.onScroll('row-second-three')
      this.onScroll('row-second-four')
      this.onScroll('about-img')
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateZoom)
  },
}
</script>

<style lang="scss">
.about {
  padding-top: 100px;
  margin: 20px;
  .title,
  .title-two,
  .description {
    margin: 15px;
  }
  .description {
    padding-bottom: 100px;
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
  .title-two {
    .year {
      color: $color-blue-primary;
    }
  }
  .row-first {
    margin: 15px;
    .col-item {
      padding: 0;
      .row-second {
        .icon-title {
          display: flex;
          justify-content: start;
          align-content: center;
          gap: 0.5rem;
          .icon {
            background: $bg-degraded;
            width: 10%;
            max-height: 3.2rem;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-content: center;
            img {
              width: 90%;
            }
          }
          h3 {
            font-weight: 600;
            font-size: 18px;
            line-height: 50px;
            /* color: $color-blue-primary; */
          }
        }
        p {
          color: $color-blue-primary;
        }
      }
      .about-img {
        border-radius: 10px;
      }
    }
    .col-icons-text {
      display: flex;
      align-content: center;
    }
  }
}
.item-zoom {
  @include animation-small-big(0.7s);
}
</style>
