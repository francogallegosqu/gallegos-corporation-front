<template>
  <header>
    <div>
      <div class="logo-menu">
        <Logo />
      </div>
      <Transition name="slide-fade">
        <div class="all-screen" v-if="getIsOpen">
          <div class="">
            <Logo />
            <nav class="navbar">
              <div
                class="link"
                v-for="item in getPage?.content?.headers"
                :key="item.id"
              >
                <RouterLink
                  v-if="item.path != 'service'"
                  class="navlink-header-one"
                  style="color: white"
                  @click="updateGoTop()"
                  :to="`/${$i18n.locale}/${item.path}`"
                >
                  {{ item?.name }}</RouterLink
                >
                <div v-else class="accordion-item">
                  <div class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {{ item?.name }}
                    </button>
                  </div>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      class="link-subservice"
                      :id="`${item.path}-${service.id}`"
                      v-for="service in getPage?.content?.service?.grid"
                      :key="`${item.path}-${service.id}`"
                    >
                      <RouterLink
                        class="router-link-subservice"
                        @click="updateGoTop()"
                        :to="`/${$i18n.locale}/service/${service.path}`"
                        >{{ service?.title }}</RouterLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div>
            <p>Copyright © 2018 Gallegos Corp.</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </Transition>
      <div v-if="getIsOpen" :class="getIsOpen ? 'translate' : ''">
        <ul v-if="isOpenTraslate" class="ul-traslate">
          <li
            :id="`locale-${locale}`"
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :class="locale == $i18n.locale ? 'active-li' : ''"
            @click="updateRoute(locale)"
          >
            {{ locale }}
          </li>
        </ul>
        <div class="div-traslate">
          <button @click="openTraslate()">
            <Traslate />
          </button>
        </div>
      </div>
      <div class="menu-icon" @click="updateOpen()">
        <OpenMenu v-if="!getIsOpen" />
        <CloseMenu v-else />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '../icons/Logo.vue'
import Traslate from '../icons/Traslate.vue'
import OpenMenu from '../icons/OpenMenu.vue'
import CloseMenu from '../icons/CloseMenu.vue'
import { mapState, mapActions } from 'pinia'
import { menuStore, pageStore, topStore } from '../../stores'
export default {
  components: {
    Logo,
    OpenMenu,
    CloseMenu,
    Traslate,
  },
  data() {
    return {
      isOpenTraslate: false,
    }
  },
  computed: {
    ...mapState(menuStore, ['getIsOpen']),
    ...mapState(pageStore, ['getPage', 'getLang']),
  },
  methods: {
    ...mapActions(menuStore, ['updateOpen']),
    ...mapActions(topStore, ['goTop']),
    ...mapActions(pageStore, ['loadPage']),
    updateGoTop() {
      this.updateOpen()
      this.goTop()
    },
    updateRoute(locale) {
      const lang = locale
      this.$router.push({ params: { lang } })
      this.loadPage(locale)
    },
    openTraslate() {
      this.isOpenTraslate = !this.isOpenTraslate
    },
  },
}
</script>
<style scoped lang="scss">
.logo-menu {
  position: absolute;
  top: 5px;
  left: 0;
  z-index: 996;
  font-weight: 700;
  line-height: 20px;
  margin-left: 20px;
}
.translate {
  cursor: pointer;
  position: fixed;
  right: 24px;
  bottom: 90px;
  z-index: 999;
  background-color: $bg-color-dark;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px $color-blue-primary;
}
.ul-traslate {
  position: absolute;
  inset: 1px auto auto 1px;
  top: -70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-image: url('/assets/blue-target.jpg');
  padding: 5px 0;
  min-width: 50px;
  border-radius: 5px;
  font-weight: 3rem;
  animation: dropdownAnimation 0.5s ease-in-out;
  li {
    text-align: center;
  }
  .active-li {
    background-color: $color-blue-primary;
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

.menu-icon {
  cursor: pointer;
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 999;
  background-color: $bg-color-dark;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px $color-blue-primary;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  /* transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1); */
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 1;
}
.all-screen {
  position: fixed;
  z-index: 999;
  width: 100%;
  min-height: -webkit-fill-avariable;
  height: calc(var(--vh, 1vh) * 100);
  top: 0;
  left: 0;
  background: no-repeat url('/assets/hero/sky-space.jpg');
  background-size: cover;
  padding: 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  nav {
    display: flex;
    flex-direction: column;
    animation: leftRightNav 1s ease-in-out;
    .link {
      line-height: 3rem;
      display: flex;
      width: 100%;
      .accordion-button {
        font-weight: 3rem;
        font-size: 2.2rem;
        margin-top: 20px;
      }
      .link-subservice {
        width: 100%;
        margin-left: 20px;
        a {
          font-weight: 2rem !important;
          font-size: 1.5rem !important;
          line-height: 0.2rem;
          color: white;
          border-bottom: solid 2px $color-blue-primary;
        }
      }
      a {
        text-decoration: none;
        font-weight: 3rem;
        font-size: 2.2rem;
        margin-top: 20px;
      }
    }
  }
}

@keyframes leftRightNav {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
