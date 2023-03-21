<template>
  <div>
    <Hero :title="getPage?.content?.aboutUs?.about?.header" />
    <div class="row about-title">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="title">{{ getPage?.content?.aboutUs?.about?.title }}</div>
        <div class="subtitle">
          {{ getPage?.content?.aboutUs?.about?.subtitle }}
        </div>
        <p>
          {{ getPage?.content?.aboutUs?.about?.text }}
        </p>
      </div>
    </div>
    <div class="row vision">
      <div class="col-item-text col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="title">{{ getPage?.content?.aboutUs?.vision?.title }}</div>
        <p>
          {{ getPage?.content?.aboutUs?.vision?.textOne }}
        </p>
        <p>
          {{ getPage?.content?.aboutUs?.vision?.textTwo }}
        </p>
      </div>
      <div class="col-item-img col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="content-images">
          <!-- <img class="world" src="/assets/about/world-about.jpg" alt="World" /> -->
          <img class="chess" src="/assets/about/ajedrez.jpg" alt="World" />
          <div class="back"></div>
          <img class="world" src="/assets/about/world-about.jpg" alt="World" />
        </div>
      </div>
    </div>
    <div class="row mision">
      <div class="col-item-img col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="content-images">
          <img class="chess" src="/assets/about/cosmonaut.jpg" alt="World" />
          <div class="back"></div>
          <img
            class="world"
            src="/assets/about/mission-to-mars.jpg"
            alt="World"
          />
        </div>
      </div>
      <div class="col-item-text col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="title">{{ getPage?.content?.aboutUs?.mision?.title }}</div>
        <p>
          {{ getPage?.content?.aboutUs?.mision?.textOne }}
        </p>
        <p>
          {{ getPage?.content?.aboutUs?.mision?.textTwo }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { pageStore } from '../../stores'
import Hero from '../global/Hero.vue'
export default {
  components: {
    Hero,
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
}
</script>

<style scoped lang="scss">
.row {
  position: relative;
  z-index: 1;
}
.about-title {
  @media (max-width: $movil-size) {
    margin: 30px 2px 30px 2px;
  }
  @media (min-width: $movil-size) {
    margin: 20px 40px 20px 40px;
  }
  @media (min-width: $tablet-size) {
    margin: 20px 60px 20px 60px;
  }
  @media (min-width: $desktop-size) {
    margin: 20px 70px 20px 70px;
  }
  display: flex;
  justify-content: start;
  word-break: break-word;
  .title {
    font-size: 2rem;
    font-weight: 900;
    color: $color-blue-primary;
  }
  .subtitle {
    font-size: 3.7rem;
    font-weight: 600;
    line-height: 4rem;
    margin-bottom: 30px;
  }
  p {
    font-size: 17px;
    line-height: 1.6;
  }
}
.vision,
.mision {
  @media (max-width: $movil-size) {
    margin: 30px 2px 30px 2px;
  }
  @media (min-width: $movil-size) {
    margin: 20px 40px 20px 40px;
  }
  @media (min-width: $tablet-size) {
    margin: 20px 50px 20px 50px;
  }
  @media (min-width: $desktop-size) {
    margin: 20px 60px 20px 60px;
  }
  .title {
    font-size: 3rem;
    font-weight: 1000;
  }
  background-color: white;
  color: $bg-color-dark;
  border-radius: 10px;
  padding: 1rem;
  .col-item-text {
    @media (min-width: $movil-size) {
      padding: 10px;
    }
    @media (min-width: $tablet-size) {
      padding: 20px;
    }
    @media (min-width: $desktop-size) {
      padding: 30px;
    }
  }
  .col-item-img {
    display: flex;
    justify-content: center;
    align-items: center;
    .content-images {
      width: 50%;
      height: 100%;
      margin: 20px;
      word-break: break-word;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      border-radius: 20px;
      flex-wrap: wrap;
      img {
        max-width: 200px;
        border-radius: 5px;
      }
      .chess,
      .back,
      .world {
        transition: transform 0.2s ease-out;
        &:hover {
          transform: translate(-2px, -2px);
        }
      }
      .chess,
      .world {
        -webkit-box-shadow: 0px 22px 110px 8px rgba($bg-color-dark, 0.5);
        -moz-box-shadow: 0px 22px 110px 8px rgba($bg-color-dark, 0.5);
        box-shadow: 0px 22px 110px 8px rgba($bg-color-dark, 0.5);
      }
      .chess {
        position: relative;
        left: -20%;
        top: 5%;
        z-index: 1;
      }
      .back {
        background-color: rgba($color: $bg-color-dark, $alpha: 0.3);
        max-width: 200px;
        height: 6rem;
        border-radius: 5px;
        z-index: 0;
      }
      .world {
        position: relative;
        left: 20%;
        top: -5%;
      }
    }
  }
}
</style>
