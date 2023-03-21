<template>
  <div class="about">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>{{ getPage?.content?.aboutUs?.title }}</h2>
      <h2 class="circle"></h2>
    </div>
    <h2 class="title-two">
      {{ getPage?.content?.aboutUs?.subtitle }}
      <span class="year">{{ getPage?.content?.aboutUs?.year }}</span>
    </h2>
    <div class="description">
      <p>
        {{ getPage?.content?.aboutUs?.text }}
      </p>
    </div>
    <!-- <div class="row w-100">
      <div class="col-6">
        {{ getPage?.content?.aboutUs?.grid }}
      </div>
      <div class="col-6" style="word-wrap: break-word">
        <video
          id="video"
          src="/src/assets/planet-color.mp4"
          autoplay="true"
          muted="muted"
          style="height: 100%; width: 100%"
          loop
        ></video>
      </div>
    </div> -->
    <div class="row row-first">
      <div
        class="col-item col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-icons-text"
      >
        <div class="row row-second">
          <div
            :id="item.id"
            v-for="item in getPage?.content?.aboutUs?.grid"
            :key="item.id"
            class="row-second-item col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <div class="icon">
                <img :src="item.img" alt="Field" />
              </div>
              <h3>{{ item.title }}</h3>
            </div>
            <p>
              {{ item.content }}
            </p>
          </div>
          <!-- <div
            id="row-second-two"
            class="row-second-item col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <div class="icon">
                <img
                  src="/src/assets/icons/about-us/reach-icon.svg"
                  alt="Field"
                />
              </div>
              <h3>Fácil de Alcanzar</h3>
            </div>
            <p>Estamos dispuestos a asesorar y concretar tus proyectos.</p>
          </div>
          <div
            id="row-second-three"
            class="row-second-item col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <div class="icon">
                <img
                  src="/src/assets/icons/about-us/world-icon.svg"
                  alt="Field"
                />
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
            class="row-second-item col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <div class="icon">
                <img
                  src="/src/assets/icons/about-us/world-icon.svg"
                  alt="Field"
                />
              </div>
              <h3>Soporte 24/7</h3>
            </div>
            <p>
              Atención a través de nuestros contactos oficiales, con información
              veraz, calidad de servicio y la protección de sus datos.
            </p>
          </div> -->
        </div>
      </div>
      <div
        id="about-img"
        class="col-item col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"
      >
        <video
          id="video"
          src="/src/assets/planet-color.mp4"
          autoplay="true"
          muted="muted"
          style="height: 100%; width: 100%"
          loop
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { pageStore } from '../../stores'
export default {
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
  methods: {
    updateZoomAbout() {
      this.onScroll('row-second-one')
      this.onScroll('row-second-two')
      this.onScroll('row-second-three')
      this.onScroll('row-second-four')
      this.onScroll('about-img')
    },
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateZoomAbout)
  },
  mounted() {
    window.addEventListener('scroll', this.updateZoomAbout)
  },
}
</script>

<style scoped lang="scss">
.about {
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  padding-top: 100px;
  .title,
  .title-two,
  .description {
    margin: 15px;
  }
  .description {
    padding-bottom: 100px;
    text-align: center;
  }

  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    letter-spacing: 0.04em;
    color: $color-blue-primary;
    display: flex;
    align-items: center !important;
    justify-content: center;
    align-content: end;
    text-align: center;
    gap: 0.5rem;
    .circle {
      height: 10px !important;
      width: 10px !important;
      border-radius: 20px;
      background: $color-blue-primary;
    }
  }
  .title-two {
    text-align: center;
    .year {
      color: $color-blue-primary;
    }
  }
  .row-first {
    margin: 15px;
    .col-item {
      padding: 0;
      .row-second {
        .row-second-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          transform: scale(0.5);
          transition: 0.7s ease-in-out transform, 0.7s ease-in-out opacity;
        }
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
      video {
        object-fit: cover;
        height: 100%;
        border-radius: 10px;
      }
    }
    .col-icons-text {
      display: flex;
      align-content: center;
    }
  }
}
</style>
