import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mixins from './mixins'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import './scss/styles.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mixin(mixins)
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
