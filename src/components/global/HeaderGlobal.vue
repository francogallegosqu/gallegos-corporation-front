<!--      -->
<template>
  <header class="header d-flex align-items-center fixed-header">
    <div
      class="content d-flex justify-content-between align-items-center w-100"
      :class="scrollY > 0 ? 'header-fixed' : ''"
    >
      <div class="logo d-flex align-items-center" @click="goHome()">
        <Logo />
        <span class="name-logo" v-if="getWidthScreen >= 1200"
          >GALLEGOS CORPORATION</span
        >
      </div>
      <nav class="navbar d-flex align-items-center">
        <RouterLink
          class="navlink-header-one"
          style="color: white"
          v-for="item in getPage?.content?.headers"
          :key="item.id"
          :to="`/${$i18n.locale}/${item.path}`"
        >
          {{ item?.name }}</RouterLink
        >
        <div class="dropdown">
          <button
            class="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Traslate />
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                :id="`locale-${locale}`"
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :class="locale == $i18n.locale ? 'active' : ''"
                @click="updateRoute(locale)"
                >{{ locale }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '../icons/Logo.vue'
import Traslate from '../icons/Traslate.vue'
import { mapState, mapActions } from 'pinia'
import { useSizeStore, pageStore } from '../../stores'
export default {
  components: {
    Logo,
    Traslate,
  },
  data() {
    return {
      scrollY: 0,
    }
  },
  computed: {
    ...mapState(useSizeStore, ['getWidthScreen']),
    ...mapState(pageStore, ['getPage', 'getLang']),
  },
  methods: {
    ...mapActions(pageStore, ['loadPage']),
    updateRoute(locale) {
      const lang = locale
      this.$router.push({ params: { lang } })
      this.loadPage(locale)
    },
    loadParams() {
      // const isValidParams = this.$i18n.availableLocales.includes()
    },
    catchScroll() {
      this.scrollY = window.scrollY
    },
    goHome() {
      this.$router.push({ name: 'home' })
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
.dropdown {
  .dropdown-toggle:after {
    display: none;
  }
  /* transition: all 2s ease-in; */

  .dropdown-menu {
    background: url('/assets/blue-target.jpg');
    /* transition: all 3s ease-in-out; */
    animation: dropdownAnimation 0.5s ease-in-out;
    /* transition: display 700ms; */
    .dropdown-item {
      transition: all 0.2s ease-in;
      cursor: pointer;
    }
    perspective: 300px;
    /* transform: skewY(20deg); */
  }
}

@keyframes dropdownAnimation {
  0% {
    opacity: 0;
    transform: rotateX(90deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
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
    cursor: pointer;
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
