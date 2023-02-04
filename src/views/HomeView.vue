<template>
  <main>
    <Carrusel />
    <WhoWeAreVue />
    <WhatWeDo />
    <Work />
  </main>
</template>

<script>
import Carrusel from '../components/home/Carrusel.vue'
import WhoWeAreVue from '../components/home/WhoWeAre.vue'
import WhatWeDo from '../components/home/WhatWeDo.vue'
import Work from '../components/home/Work.vue'
export default {
  components: {
    Carrusel,
    WhoWeAreVue,
    WhatWeDo,
    Work,
  },
}
</script>
