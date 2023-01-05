<template>
  <header class="header d-flex align-items-center">
    <div style="width: 30%">
      <img
        alt="Gallegos Corporation logo"
        class="logo"
        src="@/assets/logo-gc.svg"
      />
      <span class="name-logo">GALLEGOS CORPORATION</span>
    </div>
    <nav class="d-flex justify-content-end gap-7" style="width: 70%">
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
  margin-left: 50px;
  margin-right: 50px;
  min-height: 150px;
}
.name-logo {
  /* font-family: 'Montserrat'; */
  font-style: normal !important;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  margin-left: 20px;
  letter-spacing: 0.04em;
  color: #ffffff;
}

a {
  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
}
</style>
