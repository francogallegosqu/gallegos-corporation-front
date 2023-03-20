<template>
  <div class="testimonial">
    <div class="titles">
      <div class="title">
        <h2 class="circle"></h2>
        <h4>{{ getPage?.content?.testimonial?.title }}</h4>
        <h2 class="circle"></h2>
      </div>
      <h1>{{ getPage?.content?.testimonial?.subtitle }}</h1>
    </div>
    <carrusel :key="id" :grid="getPage?.content?.testimonial?.grid" />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { pageStore } from '../../stores'
import carrusel from '../testimonial/carrusel.vue'
export default {
  data() {
    return {
      id: 0,
    }
  },
  components: {
    carrusel,
  },
  watch: {
    getPage(value) {
      this.id = value?.content?.id
    },
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
  // mounted() {
  //   // eslint-disable-next-line no-undef
  //   $(this.$refs.carousel).owlCarousel({
  //     items: 4,
  //     loop: true,
  //     margin: 10,
  //     autoplay: true,
  //     autoplayTimeout: 3000,
  //     autoplayHoverPause: true,
  //     nav: true,
  //     dots: false, //$movil-size:320px;
  //     responsive: {
  //       0: { items: 1 },
  //       480: { items: 2 },
  //       575: { items: 2 },
  //       768: { items: 2 },
  //       991: { items: 3 },
  //       1200: { items: 4 },
  //     },
  //     navText: [
  //       // eslint-disable-next-line quotes
  //       `<i class='fa fa-chevron-left'></i>`,
  //       // eslint-disable-next-line quotes
  //       `<i class='fa fa-chevron-right'></i>`,
  //     ],
  //   })
  // },
}
</script>
<style scoped lang="scss">
.testimonial {
  margin-top: 100px;
  background: no-repeat url('@/assets/testimonial/back-testimonial.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
  .titles {
    padding-top: 70px;
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
      flex-wrap: wrap;
      gap: 0.5rem;
      .circle {
        height: 10px !important;
        width: 10px !important;
        border-radius: 20px;
        background: $color-blue-primary;
      }
    }
    width: 100%;
    text-align: center;
    /* background-color: rgba(6, 9, 34, 0.7); */
    z-index: 0;
    h1,
    h2 {
      margin: 0;
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
    }
  }
  .owl-carousel {
    @media (min-width: $movil-size) {
      padding: 20px;
    }
    /* background-color: rgba(6, 9, 34, 0.8); */
    z-index: 0;
    .owl-item {
      margin-right: 0 !important;
    }
    .item {
      .image {
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: center;
        .content-img {
          overflow: hidden;
          border-radius: 50%;
          margin-top: 30px;
          aspect-ratio: 1 / 1;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
          }
        }
      }
      margin: 20px;
      height: 460px;
      background: rgba(6, 9, 34, 0.6);
      /* border: solid 4px $color-blue-primary; */
      border-style: solid;
      border-width: 3px;
      border-image: linear-gradient(180deg, #b346f3 0%, #3ba7fd 100%) 1;
      border-radius: 10px;
      .content {
        height: 40%;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        text-align: center;
        .text {
          height: 50%;
          padding: 0 10px;
          font-weight: 400;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            margin: 0;
          }
        }
        .title-name {
          padding: 0 10px;
          .title {
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            margin: 0;
          }
          .gender {
            font-weight: 600;
            font-size: 18px;
            color: $color-blue-primary;
          }
        }
      }
    }
  }
}
</style>
