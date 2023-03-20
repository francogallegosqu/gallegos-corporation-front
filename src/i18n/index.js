import { createI18n } from 'vue-i18n'
import { es } from './es'
import { en } from './en'
const esI = es
const enI = en

export let messages = {
  en: enI,
  es: esI,
}

export let i18n = new createI18n({
  locale: 'es',
  fallbackLocale: 'es', // set fallback locale
  messages, // set locale messages
})
