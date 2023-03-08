<template>
  <div class="we-do">
    <div class="content">
      <div class="titles d-flex flex-column align-items-center">
        <h1 class="title">¿Qué Hacemos?</h1>
        <h1 class="name-topic">NUESTROS SERVICIOS</h1>
      </div>
      <div class="row d-flex justify-content-center">
        <div
          v-for="item in items"
          :key="item.id"
          class="item col-10 col-sm-5 col-md-4 text-center d-flex flex-column justify-content-between"
        >
          <div>
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.text }}
            </p>
          </div>
          <div>
            <div class="img-secondary">
              <img :src="item.image" alt="software" />
            </div>
            <div class="text-center">
              <button class="button-gradient">¡Ver más!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Software',
          text: `Utiliza un workflow predefinido o crea uno adaptado a la forma de
            trabajar de tu equipo. Gestión de proyectos para equipos de todo
            tamaño y en cualquier lugar.`,
          image: '/src/assets/what-we-do/hardware-structure.jpg',
        },
        {
          title: 'Hardware',
          text: `Utiliza un workflow predefinido o crea uno adaptado a la forma de
            trabajar de tu equipo.
          .`,
          image: '/src/assets/what-we-do/hardware-structure.jpg',
        },
        {
          title: 'Publicidad',
          text: `Utiliza un workflow predefinido o crea uno adaptado a la forma de
            trabajar de tu equipo. Gestión de proyectos para equipos de todo
            tamaño y en cualquier lugar.`,
          image: '/src/assets/what-we-do/hardware-structure.jpg',
        },
      ],
    }
  },
}
</script>

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
      padding-bottom: 3%;
      h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.04em;
      }
    }
  }
}

@media (max-width: $movil-xl-size) {
  .we-do {
    .row {
      .item {
        padding-bottom: 10%;
      }
    }
  }
}
</style>
