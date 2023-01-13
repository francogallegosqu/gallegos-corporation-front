<template>
  <header class="header d-flex align-items-center">
    <div
      style="width: 30%"
      class="d-flex justify-content-end align-items-center"
    >
      <img
        alt="Gallegos Corporation logo"
        class="logo"
        src="@/assets/logo-gc.svg"
      />
      <span class="name-logo">GALLEGOS CORPORATION</span>
    </div>
    <nav
      class="d-flex justify-content-end gap-3"
      style="width: 70%; margin-right: 5%"
    >
      <RouterLink class="text-decoration-none" to="/Home"> Home</RouterLink>
      <RouterLink class="text-decoration-none" to="/services"
        >Nosotros</RouterLink
      >
      <RouterLink class="text-decoration-none" to="/process"
        >Servicios</RouterLink
      >
      <RouterLink class="text-decoration-none" to="/process"
        >Proyectos</RouterLink
      >
      <RouterLink class="text-decoration-none" to="/process">Blog</RouterLink>
      <RouterLink class="text-decoration-none" to="/process"
        >Contacto</RouterLink
      >
    </nav>
    <div class="background-nav"></div>
  </header>
</template>

<style scoped lang="scss">
.header {
  /* position: fixed; */
  width: 100%;
  left: 0;
  top: 0;
  z-index: 980;
  min-height: 150px;
}
.name-logo {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-left: 20px;
  letter-spacing: 0.04em;
}
a {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: $bg-color-primary;
}

.background-nav {
  height: 136px;
  /* width: 800px; */
  width: 65vw;
  position: absolute;
  background: #086079;
  right: 0%;
  top: -15.43%;
  opacity: 0.25;
  border-radius: 0 0 0 20px;
}
</style>
