<template>
  <header class="header flex flex-row">
    <div class="basis-1/3">
      <img
        alt="Gallegos Corporation logo"
        class="logo"
        src="@/assets/logo-gc.svg"
      />
      <span style="font-family: 'Montserrat'">GALLEGOS CORPORATION</span>
    </div>
    <nav class="basis-1/2">
      <RouterLink class="p-1" :to="`/about`">Home</RouterLink>
      <RouterLink class="p-1" to="/#services">Nosotros</RouterLink>
      <RouterLink class="p-1" to="/#process">Servicios</RouterLink>
      <RouterLink class="p-1" to="/#process">Proyectos</RouterLink>
      <RouterLink class="p-1" to="/#process">Contacto</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 980;
  background-color: #071121;
  text-align: right;
  box-shadow: 0px 1px 3px rgba(black, 0.2);
}
</style>
