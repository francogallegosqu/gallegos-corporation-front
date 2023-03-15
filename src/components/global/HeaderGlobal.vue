<!--      -->
<template>
  <header class="header d-flex align-items-center fixed-header">
    <div
      class="content d-flex justify-content-between align-items-center w-100"
      :class="scrollY > 0 ? 'header-fixed' : ''"
    >
      <div class="logo d-flex align-items-center">
        <Logo />
        <span class="name-logo" v-if="getWidthScreen >= 1200"
          >GALLEGOS CORPORATION</span
        >
      </div>
      <nav class="navbar d-flex align-items-center">
        <RouterLink class="navlink-header-one" style="color: white" to="/">
          Home</RouterLink
        >
        <RouterLink class="navlink-header-two" to="/services"
          >Nosotros</RouterLink
        >
        <RouterLink class="navlink-header-three" to="/process"
          >Servicios</RouterLink
        >
        <RouterLink class="navlink-header-four" to="/process"
          >Proyectos</RouterLink
        >
        <RouterLink class="navlink-header-five" to="/process">Blog</RouterLink>
        <RouterLink class="navlink-header-six" to="/process"
          >Contacto</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '../icons/Logo.vue'
import { mapState } from 'pinia'
import { useSizeStore } from '../../stores/size'
export default {
  components: {
    Logo,
  },
  data() {
    return {
      scrollY: 0,
    }
  },
  computed: {
    ...mapState(useSizeStore, ['getWidthScreen']),
  },
  methods: {
    catchScroll() {
      this.scrollY = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.catchScroll)
  },
}
</script>

<style scoped lang="scss">
$links: 'one' 1s, 'two' 1.2s, 'three' 1.4s, 'four' 1.6s, 'five' 1.8s, 'six' 2s;

@each $name, $time in $links {
  .navlink-header-#{$name} {
    @include animation-top-down($time);
    text-decoration: none;
  }
}

.header-fixed {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 980;
  min-height: 70px;
  background-color: rgba(7, 17, 33, 0.5);
  backdrop-filter: blur(10px);
  /* background: no-repeat url('/src/assets/hero/sky-space.jpg');
  background-size: cover; */
  -webkit-box-shadow: 0px 22px 110px 8px rgba(7, 17, 33, 0.5);
  -moz-box-shadow: 0px 22px 110px 8px rgba(7, 17, 33, 0.5);
  box-shadow: 0px 22px 110px 8px rgba(7, 17, 33, 0.5);
  animation: fadeInDown 0.5s ease 1;
}

@keyframes fadeInDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.header {
  .logo,
  .name-logo {
    font-weight: 700;
    line-height: 20px;
    margin-left: 20px;
    letter-spacing: 0.04em;
    z-index: 560;
    @include animation-top-down(1s);
  }
  position: absolute;
  top: 0;
  min-height: 80px;
  width: 100%;
  .content {
    z-index: 560;
    .navbar {
      gap: 4rem;
      padding-right: 6%;
      padding-left: 2%;
      a {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: $bg-color-primary;
      }
    }
  }
}

@media (min-width: $tablet-size) {
  .header {
    .content {
      .navbar {
        gap: 2rem;
      }
    }
  }
}
</style>
