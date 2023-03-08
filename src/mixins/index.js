export default {
  methods: {
    isElementInViewport(el) {
      let rect = el.getBoundingClientRect()
      let windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      return rect.top >= 0 && rect.top <= windowHeight
    },
    onScroll(id) {
      let myElement = document.getElementById(id)
      if (this.isElementInViewport(myElement)) {
        let className = ' item-zoom '
        if (!myElement.className.includes(className)) {
          myElement.className += className
        }
      }
    },
  },
}
