<template>
  <div class="why">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>{{ getPage?.content?.whyChoose?.title }}</h2>
      <h2 class="circle"></h2>
    </div>
    <h2 class="title-two">
      {{ getPage?.content?.whyChoose?.subtitle }}
      <span class="year">{{ getPage?.content?.whyChoose?.work }}</span>
      {{ getPage?.content?.whyChoose?.subtitleTwo }}
    </h2>
    <div class="description">
      <p>
        {{ getPage?.content?.whyChoose?.text }}
      </p>
    </div>
    <div class="row row-first">
      <div
        id="why-img"
        class="col-item col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"
      >
        <img class="about-img" src="/assets/software-development.jpg" alt="" />
      </div>
      <div
        class="col-item col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-icons-text"
      >
        <div class="row row-second">
          <div
            :id="item.id"
            v-for="item in getPage?.content?.whyChoose?.grid"
            :key="item.id"
            class="row-second-item col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <h3 class="number">{{ item?.number }}</h3>
              <h3>{{ item?.title }}</h3>
            </div>
            <p>
              {{ item?.content }}
            </p>
          </div>
          <!-- <div
            id="row-second-two-why"
            class="row-second-item col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <h3 class="number">02.</h3>
              <h3>Soluciones Únicas</h3>
            </div>
            <p>
              Cada problema es tratado de manera única, así tu solucion también
              será única e innovadora.
            </p>
          </div>
          <div
            id="row-second-three-why"
            class="row-second-item col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <h3 class="number">03.</h3>
              <h3>Estrategias poderosas</h3>
            </div>
            <p>
              Nos enfocamos en buscar la mejor estrategía para dar solución a tu
              problema.
            </p>
          </div> -->
        </div>
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
    updateZoomWhy() {
      this.onScroll('row-second-one-why')
      this.onScroll('row-second-two-why')
      this.onScroll('row-second-three-why')
    },
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateZoomWhy)
  },
  mounted() {
    window.addEventListener('scroll', this.updateZoomWhy)
  },
}
</script>
<style scoped lang="scss">
.why {
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
        padding-left: 20px;
        .row-second-item {
          opacity: 0;
          transform: scale(0.5);
          transition: 0.7s ease-in-out transform, 0.7s ease-in-out opacity;
        }
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
        margin-bottom: 30px;
      }
    }
    .col-icons-text {
      display: flex;
      align-content: center;
    }
  }
}
</style>
