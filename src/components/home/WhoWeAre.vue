<template>
  <div
    class="we-are row d-flex flex-wrap justify-content-center m-0"
    style="background-color: #ffff; padding-top: 5%"
  >
    <div class="column col-10 col-md-5 col-lg-5 col-xxl-5">
      <div class="item item-text">
        <h1 class="title">¿Quienes Somos?</h1>
        <h1 class="name-business">GALLEGOS CORPORATION</h1>
        <p>
          Utiliza un workflow predefinido o crea uno adaptado a la forma de
          trabajar de tu equipo. Gestión de proyectos para equipos de todo
          tamaño y en cualquier lugar.
        </p>
        <p>
          Utiliza un workflow predefinido o crea uno adaptado a la forma de
          trabajar de tu equipo. Gestión de proyectos para equipos de todo
          tamaño y en cualquier lugar.
        </p>
      </div>

      <div class="item img-primary">
        <img
          src="/src/assets/who-we-are/quienes-somos.jpg"
          class="img-primary"
          alt="quienes"
        />
      </div>
      <div class="item item-text">
        <h1 class="title">VISIÓN</h1>
        <P
          >Ser una empresa reconocida por su liderazgo en el mercado de
          Tecnologías de la Información, por sus soluciones innovadoras, mejores
          prácticas, calidad de servicio y compromiso con nuestros clientes.</P
        >
      </div>
    </div>
    <div class="column col-10 col-md-5 col-lg-5 col-xxl-5">
      <div class="item img-primary item-relative-one">
        <img
          src="/src/assets/who-we-are/nosotros.jpg"
          class="img-primary"
          alt="quienes"
        />
      </div>
      <div class="item-text">
        <h1 class="title">MISIÓN</h1>
        <P
          >Queremos incrementar las capacidades de nuestros clientes mediante
          innovadoras soluciones de software que utilizan la ciencia y
          tecnología con profesionales bien organizados que siempre buscan
          generar beneficios y contribuir el desarrollo de la sociedad.</P
        >
      </div>

      <div class="img-primary item-relative-two">
        <img src="/src/assets/who-we-are/nosotros2.jpg" alt="quienes" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.name-business {
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.06em;
  color: $bg-color-dark;
}
.title {
  color: $bg-color-title;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.04em;
}

p {
  color: $bg-color-dark;
}

@media (max-width: $movil-xl-size) {
  .we-are {
    padding-bottom: 10%;
  }
  .column {
    .item {
      margin-top: 10%;
      margin-bottom: 10%;
    }
  }
}
@media (min-width: $tablet-size) {
  .column {
    .item {
      margin-top: 10%;
      margin-bottom: 20%;
    }
    .item-text {
      margin-left: 15px;
      margin-right: 15px;
    }
    .item-relative-one {
      border: solid 3px white;
      position: relative;
      display: flex;
      top: -9%;
      margin-top: 0%;
      margin-bottom: 0%;
    }
    .item-relative-two {
      border: solid 3px white;
      max-height: 524px;
      position: relative;
      display: flex;
      top: 9%;
      margin-top: 0%;
      margin-bottom: 0%;
    }
  }
}
@media (min-width: $desktop-size) {
  .column {
    .item {
      margin-top: 10%;
      margin-bottom: 20%;
    }
    .item-text {
      margin-left: 15px;
      margin-right: 15px;
    }
    .item-relative-one {
      border: solid 3px white;
      position: relative;
      display: flex;
      top: -12%;
      margin-top: 0%;
      margin-bottom: 0%;
    }
    .item-relative-two {
      border: solid 3px white;
      max-height: 524px;
      position: relative;
      display: flex;
      top: 12%;
      margin-top: 0%;
      margin-bottom: 0%;
    }
  }
}

@media (min-width: $desktop-xl-size) {
  .column {
    .item-relative-one {
      border: solid 3px white;
      position: relative;
      display: flex;
      top: -12%;
      margin-top: 0%;
      margin-bottom: 0%;
    }
    .item-relative-two {
      border: solid 3px white;
      max-height: 524px;
      position: relative;
      display: flex;
      top: 17%;
      margin-top: 0%;
      margin-bottom: 0%;
    }
  }
}
</style>
