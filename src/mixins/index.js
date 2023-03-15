export default {
  methods: {
    isElementInViewport(el) {
      if (!el) {
        return
      }
      let distance = el.getBoundingClientRect()
      return (
        distance.top <
          (window.innerHeight || document.documentElement.clientHeight) &&
        distance.bottom > 0
      )
    },
    onScroll(id) {
      let myElement = document.getElementById(id)
      let className = 'item-small-big'
      if (this.isElementInViewport(myElement)) {
        myElement.classList.add(className)
      } else {
        myElement.classList.remove(className)
      }
    },
  },
}
