<template>
  <div>
    <div class="title-infinity">
      <h3>Más de 50 clientes alrededor del mundo confían en nosotros</h3>
    </div>
    <div class="carrusel-infinity">
      <div class="carrusel-items">
        <div class="carrusel-item" v-for="name in nameImages" :key="name.id">
          <img :src="name" :alt="name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameImages: [],
    }
  },
  created() {
    const filesGlob = import.meta.glob('@/assets/infinity/*.jpg')
    this.nameImages = Object.keys(filesGlob)
  },
  async mounted() {
    const carrusel = document.querySelector('.carrusel-items')

    let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
    let intervalo = null
    let step = 1
    const start = () => {
      intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step
        if (carrusel.scrollLeft >= maxScrollLeft - 1) {
          step = step * -1
        } else if (carrusel.scrollLeft === 0) {
          step = step * -1
        }
      }, 10)
    }

    const stop = () => {
      clearInterval(intervalo)
    }

    carrusel.addEventListener('mouseover', () => {
      stop()
    })

    carrusel.addEventListener('mouseout', () => {
      start()
    })

    start()
  },
}
</script>

<style scoped lang="scss">
.title-infinity {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
  /* background-color: $color-blue-primary; */
  font-weight: 600;
  font-size: 18px;
  line-height: 50px;
}
.carrusel-infinity {
  height: auto;
  display: flex;
  align-items: center;
}

.carrusel-items {
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 30px;
  padding-bottom: 30px;
  /* background-color: $color-blue-primary; */
}

.carrusel-item {
  min-width: 300px;
  max-width: 300px;
  height: 110px;
  margin: 3px;
  cursor: pointer;
  transition: transform 0.5s ease-out 100ms;
}

.carrusel-item img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 5px;
}

.carrusel-item:hover {
  transform: scale(1.2);
  z-index: 2;
}
</style>
