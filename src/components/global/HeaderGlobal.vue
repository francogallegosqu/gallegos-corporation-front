<!--      -->
<template>
  <header class="header d-flex align-items-center fixed-header">
    <div
      class="content d-flex justify-content-between align-items-center w-100"
      :class="scrollY > 0 ? 'header-fixed' : ''"
    >
      <div class="d-flex align-items-center">
        <Logo />
        <span class="name-logo" v-if="widthScreen >= 1200"
          >GALLEGOS CORPORATION</span
        >
      </div>
      <nav class="navbar d-flex align-items-center">
        <RouterLink class="" style="color: white" to="/"> Home</RouterLink>
        <RouterLink class="" to="/services">Nosotros</RouterLink>
        <RouterLink class="" to="/process">Servicios</RouterLink>
        <RouterLink class="" to="/process">Proyectos</RouterLink>
        <RouterLink class="" to="/process">Blog</RouterLink>
        <RouterLink class="text-decoration-none" to="/process"
          >Contacto</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '../icons/Logo.vue'
export default {
  components: {
    Logo,
  },
  data() {
    return {
      scrollY: 0,
      widthScreen: window.innerWidth ? window.innerWidth : screen.width,
    }
  },
  computed: {},
  methods: {
    catchScroll() {
      this.scrollY = window.scrollY
    },
    catchScreen() {
      this.widthScreen = window.innerWidth
    },
  },
  mounted() {
    window.addEventListener('scroll', this.catchScroll)
    window.addEventListener('resize', this.catchScreen)
  },
}
</script>

<style scoped lang="scss">
.header-fixed {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 980;
  min-height: 150px;
  background-color: rgb($bg-color-dark, 1);
  -webkit-box-shadow: 0px 22px 110px 8px rgba(7, 17, 33, 0.5);
  -moz-box-shadow: 0px 22px 110px 8px rgba(7, 17, 33, 0.5);
  box-shadow: 0px 22px 110px 8px rgba(7, 17, 33, 0.5);
}

.name-logo {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-left: 20px;
  letter-spacing: 0.04em;
}

.header {
  min-height: 150px;
  .content {
    padding-left: 10%;
    padding-right: 6%;
    .navbar {
      gap: 4rem;
      height: 136px;
      top: 0%;
      right: 0%;
      position: absolute;
      background-color: rgb($color-header, 0.25);
      border-radius: 0 0 0 20px;
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
