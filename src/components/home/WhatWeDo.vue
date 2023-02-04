<template>
  <div class="we-do">
    <div class="content">
      <div class="titles d-flex flex-column align-items-center">
        <h1 class="title">¿Qué Hacemos?</h1>
        <h1 class="name-topic">NUESTROS SERVICIOS</h1>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="item col-10 col-sm-5 col-md-4 item text-center">
          <h2>Software</h2>
          <p>
            Utiliza un workflow predefinido o crea uno adaptado a la forma de
            trabajar de tu equipo. Gestión de proyectos para equipos de todo
            tamaño y en cualquier lugar.
          </p>
          <div class="img-secondary">
            <img
              src="/src/assets/what-we-do/software-development.jpg"
              alt="software"
            />
          </div>
        </div>
        <div class="col-10 col-sm-5 col-md-4 item text-center">
          <h2>Hardware</h2>
          <p>
            Utiliza un workflow predefinido o crea uno adaptado a la forma de
            trabajar de tu equipo. Gestión de proyectos para equipos de todo
            tamaño y en cualquier lugar.
          </p>
          <div class="img-secondary">
            <img
              src="/src/assets/what-we-do/hardware-structure.jpg"
              alt="software"
            />
          </div>
        </div>
        <div class="col-10 col-sm-5 col-md-4 item text-center">
          <h2>Publicidad</h2>
          <p>
            Utiliza un workflow predefinido o crea uno adaptado a la forma de
            trabajar de tu equipo. Gestión de proyectos para equipos de todo
            tamaño y en cualquier lugar.
          </p>
          <div class="img-secondary">
            <img
              src="/src/assets/what-we-do/publicity-design.jpg"
              alt="software"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.we-do {
  padding: 5%;
  .content {
    padding: 5%;
    border: solid 3px $color-border-carrusel;
    border-radius: 20px;
    .titles {
      padding-bottom: 2%;
      .title {
        color: $bg-color-title;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.04em;
      }
      .name-topic {
        font-weight: 700;
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        letter-spacing: 0.06em;
      }
    }
  }
  .row {
    .item {
      h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.04em;
      }
    }
  }
}
</style>
