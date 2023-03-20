<template>
  <div ref="carousel" class="owl-carousel owl-theme">
    <div class="item">
      <div class="image">
        <div class="content-img" style="background-color: white">
          <img src="/assets/testimonial/cambio-mas.jpg" alt="Cambio Mas" />
        </div>
      </div>
      <div class="content">
        <div class="text">
          <p>{{ grid?.cambioMas?.text }}</p>
        </div>
        <div class="title-name">
          <h3 class="title">
            {{ grid?.cambioMas?.title }}
          </h3>
          <p class="gender">
            {{ grid?.cambioMas?.category }}
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="image">
        <div class="content-img" style="background-color: white">
          <img src="/assets/testimonial/techyim.jpg" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="text">
          <p>{{ grid?.TechymTel?.text }}</p>
        </div>
        <div class="title-name">
          <h3 class="title">
            {{ grid?.TechymTel?.title }}
          </h3>
          <p class="gender">
            {{ grid?.TechymTel?.category }}
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="image">
        <div class="content-img" style="background-color: black">
          <img src="/assets/testimonial/coronel.jpg" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="text">
          <p>{{ grid?.coronel?.text }}</p>
        </div>
        <div class="title-name">
          <h3 class="title">
            {{ grid?.coronel?.title }}
          </h3>
          <p class="gender">
            {{ grid?.coronel?.category }}
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="image">
        <div class="content-img" style="background-color: white">
          <img src="/assets/testimonial/corpamd.jpg" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="text">
          <p>
            {{ grid?.corpoPerez?.text }}
          </p>
        </div>
        <div class="title-name">
          <h3 class="title">
            {{ grid?.corpoPerez?.title }}
          </h3>
          <p class="gender">
            {{ grid?.corpoPerez?.category }}
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="image">
        <div class="content-img" style="background-color: black">
          <img src="/assets/testimonial/moments.jpg" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="text">
          <p>{{ grid?.momentsBrand?.text }}</p>
        </div>
        <div class="title-name">
          <h3 class="title">
            {{ grid?.momentsBrand?.title }}
          </h3>
          <p class="gender">
            {{ grid?.momentsBrand?.category }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grid: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    $(this.$refs.carousel).owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: true,
      dots: false, //$movil-size:320px;
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        575: { items: 2 },
        768: { items: 2 },
        991: { items: 3 },
        1200: { items: 4 },
      },
      navText: [
        // eslint-disable-next-line quotes
        `<i class='fa fa-chevron-left'></i>`,
        // eslint-disable-next-line quotes
        `<i class='fa fa-chevron-right'></i>`,
      ],
    })
  },
}
</script>

<style scoped lang="scss">
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
</style>
