<template>
  <div class="hero" style="width: 100%">
    <img class="space" :src="srcSpace" alt="Hero Space" />
    <img class="planet" :src="srcEarth" alt="Planet Earth" />
    <img class="moon" :src="srcMoon" alt="Moon" />
    <img class="astronaut" :src="srcAstronauth" alt="Planet Earth" />
    <div class="music">
      <img :src="srcMusicActive" @click="changeMusic" alt="Music Active" />
    </div>
    <div class="mask"></div>
    <div class="arrow">
      <div class="content">
        <img id="img-one" src="/assets/icons/arrow-down.svg" alt="Arrow" />
        <img id="img-two" src="/assets/icons/arrow-down.svg" alt="Arrow" />
        <img id="img-three" src="/assets/icons/arrow-down.svg" alt="Arrow" />
      </div>
    </div>
    <div class="carusel" id="navbar-example2">
      <div
        class="content"
        v-for="item in getPage?.content?.hero?.carrusel"
        :key="item.id"
      >
        <h2>{{ item.h2 }}</h2>
        <h1>{{ item.h1 }}</h1>
        <div class="button">
          <RouterLink :to="{ name: 'service' }">{{
            getPage?.content?.hero?.button?.name
          }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { pageStore, audioStore } from '../../stores'
export default {
  computed: {
    ...mapState(pageStore, ['getPage']),
    ...mapState(audioStore, ['getStatus']),
    srcSpace() {
      return '/assets/hero/sky-space.jpg'
    },
    srcMoon() {
      return '/assets/hero/moon.png'
    },
    srcEarth() {
      return '/assets/hero/planet-earth1.png'
    },
    srcAstronauth() {
      return '/assets/hero/astronaut.png'
    },
    srcMusicActive() {
      return this.getStatus
        ? '/assets/hero/music.gif'
        : '/assets/hero/music_inactive.gif'
    },
  },
  methods: {
    ...mapActions(audioStore, ['play', 'pause']),
    changeMusic() {
      if (!this.getStatus) {
        this.play()
      } else {
        this.pause()
      }
    },
  },
}
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  img {
    height: 100vh;
    overflow: hidden;
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
    z-index: 555;
    animation: fadeLeftRightPlanet 2s ease 1, rotation 700s infinite linear 3s;
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
    z-index: 559;
    @include animation-right-left(2s);
  }
  .music {
    position: absolute;
    top: 0;
    left: 60%;
    width: 40%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-content: center;
    z-index: 559;
    img {
      width: 4rem;
      height: 4rem;
      max-width: 90px;
      max-height: 90px;
      border-radius: 50%;
      box-shadow: 1px 1px 4px $color-blue-primary;
      -webkit-box-shadow: 1px 1px 4px $color-blue-primary;
      -moz-box-shadow: 1px 1px 4px $color-blue-primary;
      @include animation-right-left(2s);
      &:hover {
        cursor: pointer;
        /* z-index: 560 !important; */
      }
    }
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
  @media (min-height: $movil-size) {
    .arrow {
      position: absolute;
      top: calc(100vh - 100px);
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: end;
      flex-wrap: wrap;
      z-index: 558;
      .content {
        display: flex;
        flex-direction: column;
        &:hover {
          cursor: pointer;
        }
        img {
          max-width: 5rem;
          max-height: 5rem;
        }
        #img-one {
          animation: arrowAnimationOne 2s linear infinite;
          position: relative;
          /* top: 50%; */
        }
        #img-two {
          animation: arrowAnimation 2s linear infinite;
          position: relative;
          top: -25%;
        }
        #img-three {
          animation: arrowAnimationThree 2s linear infinite;
          position: relative;
          top: -50%;
        }
      }
    }
  }

  .carusel {
    display: flex;
    justify-content: start;
    align-content: center;
    height: 100vh;
    max-height: 100vh;
    min-width: 70%;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 559;
    word-break: break-word;
    @include animation-down-top(2s);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
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

@keyframes arrowAnimationThree {
  0% {
    transform: translateY(-50%);
    opacity: 1;
  }
  50% {
    transform: translateY(-30%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-10%);
    opacity: 0;
  }
}

@keyframes arrowAnimationOne {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  50% {
    transform: translateY(-30%);
    opacity: 8;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes arrowAnimation {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  50% {
    transform: translateY(-30%);
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
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

@keyframes fadeLeftRightPlanet {
  0% {
    transform: translateX(-300%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
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
