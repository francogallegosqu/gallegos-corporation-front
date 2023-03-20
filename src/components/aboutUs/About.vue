<template>
  <div>
    <Hero />
    <div class="row about-title">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="title">Sobre Nosotros</div>
        <div class="subtitle">Quienes Somos</div>
        <p>
          Vivimos en un mundo donde la tecnología se está convirtiendo en una
          parte esencial de nuestra vida. Las empresas dependen de factores
          objetivos para crear nuevas soluciones para que las personas mejoren
          sus vidas, enfocándose en traer commodities y movilidad como un
          servicio. Gallegos Corporation trae las soluciones más completas que
          permiten a negocios y empresas crecer a gran escala con un servicio de
          primera.
        </p>
      </div>
    </div>
    <div class="row vision">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="title">Vision</div>
        <p>
          Gallegos Corp. tiene como objetivo brindar una transformación digital
          insuperable al mundo de los negocios al trabajar con tecnologías de
          tendencia líderes.
        </p>
        <p>
          Lograr nuestro objetivo mediante la contratación de un equipo
          experimentado y talentoso en industrias clave, siguiendo las
          principales tecnologías de tendencia en todo el mundo y aprendiendo
          sobre ellas, y adoptando una metodología integral proporcionada por
          nuestro socio experimentado en Tokio.
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
  </div>
</template>

<script>
import Hero from '../global/Hero.vue'
export default {
  components: {
    Hero,
  },
}
</script>

<style scoped lang="scss">
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
.vision {
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
    font-weight: 900;
  }
  background-color: white;
  color: $bg-color-dark;
  border-radius: 10px;
  padding: 1rem;
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
      .chess {
        position: relative;
        left: -20%;
        top: 5%;
      }
      .back {
        background-color: rgba($color: $bg-color-dark, $alpha: 0.3);
        max-width: 200px;
        height: 6rem;
        border-radius: 5px;
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
