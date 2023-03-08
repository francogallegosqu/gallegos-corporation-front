<template>
  <div class="why">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>Porqué Elegirnos</h2>
      <h2 class="circle"></h2>
    </div>
    <h2 class="title-two">
      Porque Nuestros Clientes Eligen <span class="year">Trabajar</span> Con
      Nosotros
    </h2>
    <div class="description">
      <p>
        Gallegos Corporation Nació con el objetivo de brindar soluciones
        tecnológicas en un mundo tecnologico.
      </p>
    </div>
    <div class="row row-first">
      <div
        id="why-img"
        class="col-item col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"
      >
        <img class="about-img" src="@/assets/about/abouT-us.jpg" alt="" />
      </div>
      <div
        class="col-item col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-icons-text"
      >
        <div class="row row-second">
          <div
            id="row-second-one-why"
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <h3 class="number">01.</h3>
              <h3>Últimas Tecnologías</h3>
            </div>
            <p>
              Buscamos soluciones con la última tecnología del mercado para
              llevar tu proyecto a otro nivel.
            </p>
          </div>
          <div
            id="row-second-two-why"
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <h3 class="number">02.</h3>
              <h3>Soluciones Únicas</h3>
            </div>
            <p>
              Cada problema es tratado de manera única, así tu solucion también
              será única e innovadora
            </p>
          </div>
          <div
            id="row-second-three-why"
            class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <h3 class="number">03.</h3>
              <h3>Estrategias poderosas</h3>
            </div>
            <p>
              Nos enfocamos en buscar la mejor estrategía para dar solución a tu
              problema.
            </p>
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
      this.onScroll('row-second-one-why')
      this.onScroll('row-second-two-why')
      this.onScroll('row-second-three-why')
      this.onScroll('why-img')
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateZoom)
  },
}
</script>
<style lang="scss">
.why {
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
        padding-left: 20px;
        .icon-title {
          display: flex;
          justify-content: start;
          align-content: center;
          gap: 0.5rem;
          .number {
            font-size: 3rem;
            font-weight: 700;
            line-height: 0.8;
            color: $color-blue-primary;
          }
          h3 {
            font-weight: 600;
            font-size: 18px;
            line-height: 50px;
            color: white;
          }
        }
        p {
          color: white;
        }
      }
      .about-img {
        border-radius: 10px;
        padding-bottom: 30px;
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
