<template>
  <div class="hero" style="width: 100%">
    <img class="space" :src="srcSpace" alt="Hero Space" />
    <img class="planet" :src="srcEarth" alt="Planet Earth" />
    <img class="moon" :src="srcMoon" alt="Moon" />
    <img class="astronaut" :src="srcAstronauth" alt="Planet Earth" />
    <div class="mask"></div>
    <div class="carusel">
      <div class="content">
        <h2>LAS MEJORES SOLUCIONES EN</h2>
        <h1>SOFTWARE</h1>
        <div class="button">
          <RouterLink to="/">Conoce Más</RouterLink>
        </div>
      </div>
      <div>
        <h2>LAS MEJORES SOLUCIONES EN</h2>
        <h1>HARDWARE</h1>
        <div class="button">
          <RouterLink to="/">Conoce Más</RouterLink>
        </div>
      </div>
      <div>
        <h2>LAS MEJORES SOLUCIONES EN</h2>
        <h1>APPS MOVILES</h1>
        <div class="button">
          <RouterLink to="/">Conoce Más</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    srcSpace() {
      return '/src/assets/hero/sky-space.jpg'
    },
    srcMoon() {
      return '/src/assets/hero/moon.png'
    },
    srcEarth() {
      return '/src/assets/hero/planet-earth1.png'
    },
    srcAstronauth() {
      return '/src/assets/hero/astronaut.png'
    },
  },
}
</script>

<style lang="scss">
.hero {
  img {
    height: 100vh;
  }
  .space {
    width: 100%;
    object-fit: cover;
  }
  .planet {
    width: 50%;
    height: auto;
    max-height: 100vh;
    object-fit: cover;
    position: absolute;
    right: 30%;
    /* top: 5%; */
    z-index: 555;
  }
  .moon {
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 556;
  }
  .astronaut {
    object-fit: cover;
    position: absolute;
    right: 0;
    z-index: 557;
  }
  .mask {
    background: rgba(33, 70, 112, 0.7);
    mix-blend-mode: soft-light;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 558;
    top: 0;
    right: 0;
  }
  .carusel {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 10em;
    max-height: 100vh;
    min-width: 70%;
    position: absolute;
    top: 5%;
    left: 10%;
    /* margin: 10%; */
    z-index: 558;
    word-break: break-word;
    @media (orientation: landscape) and (max-width: $tablet-size) {
      top: 2%;
    }
    .content {
      display: flex;
      flex-direction: column;
    }
    h2 {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 2rem;
      line-height: 50px;
    }
    h1 {
      display: flex;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 900;
      font-size: 5rem;
      line-height: 70px;
      @media (max-width: $tablet-size) {
        line-height: 70px;
        font-size: 4rem;
      }
    }
    .button {
      /* padding-top: 1rem; */
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        height: 3rem;
        width: 15rem;
        background: #001322;
        border: 1px solid #09aff4;
        border-radius: 4px 10px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 50px;
      }
    }
  }
  .carusel > * {
    animation: 12s autoplay6 infinite linear;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .carusel > *:nth-child(1) {
    animation-delay: 0s;
  }
  .carusel > *:nth-child(2) {
    animation-delay: 4s;
  }
  .carusel > *:nth-child(3) {
    animation-delay: 8s;
  }
}

@keyframes autoplay6 {
  0% {
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  37.33% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media (orientation: landscape) {
  .hero {
    .moon {
      width: 100%;
      height: 100vh;
      object-fit: fill;
      position: absolute;
      top: 0 !important;
      right: 0;
      z-index: 556;
    }
  }
}
@media (min-width: $desktop-size) {
  .hero {
    .moon {
      object-fit: fill;
    }
  }
}

@media (min-width: $desktop-size) and (min-width: $tablet-size) {
  .hero {
    .planet {
      width: 30%;
      height: auto;
      max-height: 100vh;
      object-fit: cover;
      position: absolute;
      right: 50%;
      top: 5%;
      z-index: 555;
    }
  }
}

.planet {
  animation: rotation 700s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
</style>
