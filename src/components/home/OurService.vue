<template>
  <div class="service">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>Nuestros Servicios</h2>
      <h2 class="circle"></h2>
    </div>
    <h2 class="title-two">Servicios Que Ofrecemos</h2>
    <div class="row w-100 subtitle">
      <div class="col-12 col-sm-7">
        <p>
          Mejora de la eficacia de tu trabajo gracias a la automatización de
          procesos, aumentando la productividad de tu empresa.
        </p>
      </div>
      <div class="col-12 col-sm-3">
        <p class="background-service">Todos Los Servicios</p>
      </div>
    </div>
    <div>
      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: '#ffffff',
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 600 },
            },
            number: { value: 60, density: { enable: true, value_area: 600 } },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
            },
            shape: {
              type: 'circle',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 5 },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'bubble' },
              onclick: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          detectRetina: true,
        }"
      />
    </div>
    <div id="grid-container" class="row w-100 grid-container">
      <div
        id="grid-item-one"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <div class="img-title">
            <img src="@/assets/icons/icon-development.svg" alt="Development" />
            <h2>Web Development</h2>
            <p>
              Tu sitio web es la primera presentación a tus potenciales
              clientes, por eso es importante un diseño web de impacto.
            </p>
          </div>

          <div class="button">
            <button class="button-gradient">
              Conoce Más
              <img src="@/assets/icons/arrow-lg-icon.svg" alt="Arrow Right" />
            </button>
          </div>
        </div>
      </div>
      <div
        id="grid-item-two"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <div class="img-title">
            <img src="@/assets/icons/icon-digital.svg" alt="Development" />
            <h2>Digital Marketing</h2>
            <p>
              Llega a tu público en el mejor momento con potentes
              automatizaciones.
            </p>
          </div>

          <div class="button">
            <button class="button-gradient">
              Conoce Más
              <img src="@/assets/icons/arrow-lg-icon.svg" alt="Arrow Right" />
            </button>
          </div>
        </div>
      </div>
      <div
        id="grid-item-three"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <div class="img-title">
            <img src="@/assets/icons/icon-apps.svg" alt="Development" />
            <h2>Apps Development</h2>
            <p>
              Creación de software simple que pueda ser usado en dispositivos
              móviles como tabletas y celulares.
            </p>
          </div>

          <div class="button">
            <button class="button-gradient">
              Conoce Más
              <img src="@/assets/icons/arrow-lg-icon.svg" alt="Arrow Right" />
            </button>
          </div>
        </div>
      </div>
      <div
        id="grid-item-four"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <div class="img-title">
            <img src="@/assets/icons/icon-seo.svg" alt="Development" />
            <h2>Seo Services</h2>
            <p>
              Estrategias y técnicas de optimización en una página web para que
              aparezca orgánicamente en buscadores de Internet como Google,
              Yahoo o Youtube.
            </p>
          </div>
          <div class="button">
            <button class="button-gradient">
              Conoce Más
              <img src="@/assets/icons/arrow-lg-icon.svg" alt="Arrow Right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadFull } from 'tsparticles'
export default {
  methods: {
    async particlesInit(engine) {
      await loadFull(engine)
    },
    async particlesLoaded(container) {
      console.log('Particles container loaded', container)
    },
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

<style scoped lang="scss">
.service {
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  overflow: hidden;
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
    text-align: center;
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
    margin-bottom: 100px;
    .background-service {
      text-align: center;
      background: $bg-degraded;
      border-radius: 4px 10px;
      padding: 5px;
    }
  }
  .grid-container {
    display: flex;
    justify-content: start;
    align-content: center;
    margin: 0;
    .grid-item {
      padding-bottom: 14px;
      /* 
      padding-left: 9px;
      padding-right: 9px; */
      gap: 4rem;
      //animation
      opacity: 0;
      transform: scale(0.5);
      transition: 0.7s ease-in-out transform, 0.7s ease-in-out opacity;
      .content {
        img {
          width: 20%;
        }
        border: 3px solid $color-blue-primary;
        margin: 2px;
        border-radius: 10px;
        word-break: break-word;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        padding: 20px;
        text-align: start;
        width: 100%;
        height: 100%;
        min-height: 300px;
        .button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: end;
          flex-wrap: wrap;
          button {
            /* min-width: 90%; */
            border: none;
            text-align: center;
            flex-wrap: wrap;
            font-weight: 500;
            font-size: 1.2rem;
            img {
              width: 10%;
            }
          }
        }
        &:hover {
          background: $bg-degraded no-repeat;
          animation: fillBackground 1s ease 1;
        }
      }
    }
  }
}

@keyframes fillBackground {
  0% {
    background-size: 0;
  }
  100% {
    background-size: 100%;
  }
}
</style>
