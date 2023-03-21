<template>
  <HeaderGlobal v-if="getWidthScreen > 767" />
  <PreLoader v-if="getLoader" />

  <router-view v-if="!getLoader" v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

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
  <FooterGlobal />
</template>

<script>
import HeaderGlobal from './components/global/HeaderGlobal.vue'
import FooterGlobal from './components/global/FooterGlobal.vue'
import PreLoader from './components/global/PreLoader.vue'
import { mapState, mapActions } from 'pinia'
import { loadFull } from 'tsparticles'
import { useSizeStore, projectStore, loaderStore } from './stores'
export default {
  components: {
    HeaderGlobal,
    FooterGlobal,
    PreLoader,
  },
  computed: {
    ...mapState(useSizeStore, ['getWidthScreen']),
    ...mapState(loaderStore, ['getLoader']),
  },
  methods: {
    ...mapActions(useSizeStore, ['loadCharacters']),
    ...mapActions(projectStore, ['loadProjects']),
    async particlesInit(engine) {
      await loadFull(engine)
    },
    async particlesLoaded(container) {
      console.log('Particles container loaded', container)
    },
  },
  mounted() {
    this.loadCharacters()
  },
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */

/* nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
