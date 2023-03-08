<template>
  <main>
    <!-- <Carrusel />-->
    <Hero />
    <OurService />
    <AboutUs />
    <WhyChoose />
    <Clients />
    <BriefcaseTitle />
    <BriefCaseVue />
    <!-- <WhoWeAreVue />
    <WhatWeDo /> -->
    <!-- <Work /> -->
  </main>
</template>

<script>
// import Carrusel from '../components/home/Carrusel.vue'
import Hero from '../components/home/Hero.vue'
import OurService from '../components/home/OurService.vue'
import AboutUs from '../components/home/AboutUs.vue'
import WhyChoose from '../components/home/WhyChoose.vue'
import Clients from '../components/home/Clients.vue'
import BriefcaseTitle from '../components/home/BriefcaseTitle.vue'
import BriefCaseVue from '../components/global/BriefCase.vue'
// import WhoWeAreVue from '../components/home/WhoWeAre.vue'
// import WhatWeDo from '../components/home/WhatWeDo.vue'
// import Work from '../components/home/Work.vue'
export default {
  components: {
    // Carrusel,
    Hero,
    OurService,
    AboutUs,
    WhyChoose,
    Clients,
    BriefcaseTitle,
    BriefCaseVue,
    // WhoWeAreVue,
    // WhatWeDo,
    // Work,
  },
}
</script>

<style>
main {
  overflow: hidden;
}
</style>
