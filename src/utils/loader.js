import { loaderStore } from '../stores'

window.addEventListener('load', () => {
  const loader = loaderStore()
  loader.updateLoader(false)
  // let element = document.getElementById('preloader')
  // element.style.display = 'none'
  console.log('apagar')
  //   setTimeout(() => {

  //   }, 5000)
})
