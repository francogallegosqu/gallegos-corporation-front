<template>
  <header>
    <div>
      <div class="logo-menu">
        <Logo />
      </div>
      <Transition name="slide-fade">
        <div class="all-screen" v-if="getIsOpen">
          <div class="logo-menu">
            <Logo />
            <nav class="navbar d-flex align-items-center">
              <RouterLink
                class="navlink-header-one"
                style="color: white"
                v-for="item in getPage?.content?.headers"
                :key="item.id"
                @click="updateOpen()"
                :to="`/${$i18n.locale}/${item.path}`"
              >
                {{ item?.name }}</RouterLink
              >
            </nav>
          </div>
        </div>
      </Transition>
      <div class="menu-icon" @click="openMenu()">
        <OpenMenu v-if="!getIsOpen" />
        <CloseMenu v-else />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '../icons/Logo.vue'
import OpenMenu from '../icons/OpenMenu.vue'
import CloseMenu from '../icons/CloseMenu.vue'
import { mapState, mapActions } from 'pinia'
import { menuStore, pageStore } from '../../stores'
export default {
  components: {
    Logo,
    OpenMenu,
    CloseMenu,
  },
  computed: {
    ...mapState(menuStore, ['getIsOpen']),
    ...mapState(pageStore, ['getPage', 'getLang']),
  },
  methods: {
    ...mapActions(menuStore, ['updateOpen']),
    openMenu() {
      this.updateOpen()
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
  opacity: 0.5;
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
  align-items: flex-end;
  nav {
    a {
      text-decoration: none;
      font-weight: 3rem;
      font-size: 1.5rem;
      margin-right: 80px;
      margin-top: 20px;
      width: 80px;
    }
  }
}
</style>
