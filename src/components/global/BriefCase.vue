<template>
  <div class="brief-case-global">
    <div class="row brief-item">
      <div
        v-for="project in projects"
        :key="project.id"
        class="col-item col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
      >
        <div
          class="img"
          :style="`background-image: url('${baseURL}${project?.attributes?.image?.data?.attributes?.url}')`"
        >
          <h2 class="title">{{ project?.attributes?.title }}</h2>
          <button type="button" class="btn btn-primary">Ver Web</button>
        </div>
      </div>
    </div>
    {{ nameRoute }}
    <PaginationVue
      :totalResults="meta?.pagination?.total"
      :resultsPerPage="maxSizePage"
      :maxPagesToShow="meta?.pagination?.pageCount"
      :currentPage="currentPage"
      @callLoadProjects="callLoadProjects"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { projectStore } from '../../stores/project'
import { baseUrlStore } from '../../stores/baseUrl'
import PaginationVue from './Pagination.vue'
export default {
  components: {
    PaginationVue,
  },
  data() {
    return {
      currentPage: {
        current: 1,
      }, // página actual
    }
  },
  computed: {
    ...mapState(projectStore, ['projects', 'meta']),
    ...mapState(baseUrlStore, ['baseURL']),
    maxSizePage() {
      return this.$route.name.includes('home') ? 5 : 10
    },
  },
  methods: {
    ...mapActions(projectStore, ['loadProjects']),
    callLoadProjects() {
      this.loadProjects({
        pageSize: this.maxSizePage,
        page: this.currentPage.current,
      })
    },
  },
  mounted() {
    this.loadProjects({ pageSize: this.maxSizePage, page: 1 })
  },
}
</script>

<style lang="scss">
.brief-case-global {
  margin: 20px;
  margin-bottom: 100px;
  .brief-item {
    margin: 0;
    padding: 0;
    width: 100%;
    .col-item {
      margin-bottom: 15px;
      .img {
        position: relative;
        width: 100%;
        height: 200px;
        background-size: cover;
        transition: scale 1s ease-out 100ms;
        border-radius: 10px;
        /* opacity: 0.8; */
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-content: end;
        .title {
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 60px;
          margin: 0;
          padding-left: 10px;
          opacity: 1;
        }
        button {
          background: $bg-degraded;
          border: none;
          transition: filter 1s ease-out 100ms;
          &:hover {
            filter: brightness(1.35);
          }
        }
      }
      &:hover {
        .img {
          scale: (1.2);
          opacity: 1;
          z-index: 2;
        }
      }
    }
  }
}
</style>
