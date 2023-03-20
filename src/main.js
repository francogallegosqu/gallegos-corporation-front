import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mixins from './mixins'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import './scss/styles.scss'

//particles
import Particles from 'vue3-particles'

//owl carrusel
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

//I18n
import { i18n } from './i18n'

const app = createApp(App)
app.use(createPinia())
app.use(Particles)
app.use(router)
app.mixin(mixins)
app.use(i18n)
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
