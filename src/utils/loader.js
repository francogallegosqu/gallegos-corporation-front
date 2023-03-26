import { loaderStore } from '../stores'

window.addEventListener('load', () => {
  // let element = document.getElementById('preloader')
  // element.style.display = 'none'
  console.log('apagar')
  setTimeout(() => {
    const loader = loaderStore()
    loader.updateLoader(false)
  }, 1000)
})
