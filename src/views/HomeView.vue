<template>
  <main>
    <Hero />
    <OurService />
    <FirstImage />
    <AboutUs />
    <WhyChoose />
    <Clients />
    <BriefcaseTitle />
    <BriefCaseVue />
    <SliderInfinity />
    <Testimonial />
    <ContactUs />
    <Blog />
  </main>
</template>

<script>
import Hero from '../components/home/Hero.vue'
import OurService from '../components/home/OurService.vue'
import FirstImage from '../components/home/FirstImage.vue'
import AboutUs from '../components/home/AboutUs.vue'
import WhyChoose from '../components/home/WhyChoose.vue'
import Clients from '../components/home/Clients.vue'
import BriefcaseTitle from '../components/home/BriefcaseTitle.vue'
import BriefCaseVue from '../components/global/BriefCase.vue'
import SliderInfinity from '../components/global/SliderInfinity.vue'
import Testimonial from '../components/home/Testimonial.vue'
import ContactUs from '../components/home/ContactUs.vue'
import Blog from '../components/home/Blog.vue'
export default {
  components: {
    Hero,
    OurService,
    FirstImage,
    AboutUs,
    WhyChoose,
    Clients,
    BriefcaseTitle,
    BriefCaseVue,
    SliderInfinity,
    Testimonial,
    ContactUs,
    Blog,
  },
}
</script>

<style>
main {
  overflow: hidden;
}
</style>
