<template>
  <div class="pagination">
    <button
      class="button-items"
      style="transform: scaleX(-1)"
      :disabled="currentPage.current === 1"
      @click="changePage(currentPage.current - 1)"
    >
      <img src="@/assets/icons/arrow.svg" alt="Arrow Left" />
    </button>
    <button
      class="button-items"
      v-for="page in pagesToShow"
      :key="page"
      :disabled="currentPage.current === page || page === '...'"
      :class="currentPage.current === page ? 'button-items-active' : ''"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
    <button
      class="button-items"
      :disabled="currentPage.current === totalPages"
      @click="changePage(currentPage.current + 1)"
    >
      <img src="@/assets/icons/arrow.svg" alt="Arrow Right" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    maxPagesToShow: {
      type: Number,
    },
    totalResults: {
      type: Number,
    }, // número total de resultados
    resultsPerPage: {
      type: Number,
    }, // número de resultados por página
    currentPage: {
      type: Object,
    }, // página actual
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalResults / this.resultsPerPage)
    },
    pagesToShow() {
      if (this.totalPages <= this.maxPagesToShow) {
        // si hay menos páginas de las que se pueden mostrar, mostrar todas las páginas
        return Array.from({ length: this.totalPages }, (_, i) => i + 1)
      }

      // si hay más páginas de las que se pueden mostrar, calcular un rango de páginas que incluya la página actual y las páginas adyacentes
      const middlePage = Math.floor(this.maxPagesToShow / 2)
      let startPage = this.currentPage.current - middlePage
      let endPage = this.currentPage.current + middlePage

      if (startPage < 1) {
        startPage = 1
        endPage = this.maxPagesToShow
      }

      if (endPage > this.totalPages) {
        endPage = this.totalPages
        startPage = this.totalPages - this.maxPagesToShow + 1
      }

      let pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => i + startPage
      )

      if (startPage > 1) {
        pages.unshift('...')
        pages.unshift(1)
      }

      if (endPage < this.totalPages) {
        pages.push('...')
        pages.push(this.totalPages)
      }

      return pages
    },
  },
  methods: {
    changePage(newPage) {
      if (newPage < 1) {
        newPage = 1
      }
      if (newPage > this.totalPages) {
        newPage = this.totalPages
      }
      // eslint-disable-next-line vue/no-mutating-props
      this.currentPage.current = newPage
      this.$emit('callLoadProjects')
    },
  },
}
</script>

<style lang="scss">
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  .button-items {
    margin: 5px;
    width: 35px !important;
    height: 35px !important;
    border: 2px solid $color-blue-primary;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 5px;
    transition: background-color 0.5s ease-out 100ms;
    font-weight: 700;
    &:hover {
      background-color: $color-blue-primary;
    }
    img {
      width: 80%;
    }
  }
  .button-items-active {
    background-color: $color-blue-primary;
  }
}
</style>
