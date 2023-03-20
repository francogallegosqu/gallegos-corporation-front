<template>
  <div class="brief-case-global">
    <div class="row brief-item">
      <div
        v-for="project in projects"
        :key="project.id"
        class="col-item col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
      >
        <div
          class="background-img"
          :style="`background-image: url('${baseURL}${project?.attributes?.image?.data?.attributes?.url}')`"
        ></div>
        <div class="brief-text">
          <h3>{{ project?.attributes?.title }}</h3>
          <button type="button" class="button-gradient">
            <span class="text">{{
              getPage?.content?.briefCaseTitle?.button
            }}</span>
            <!-- <div class="img-button">
              <img src="@/assets/icons/arrow-lg-icon.svg" alt="Arrow Right" />
            </div> -->
          </button>
        </div>
      </div>
    </div>
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
import { baseUrlStore, projectStore, pageStore } from '../../stores'
import PaginationVue from './Pagination.vue'
export default {
  components: {
    PaginationVue,
  },
  data() {
    return {
      currentPage: {
        current: 1,
      },
    }
  },
  computed: {
    ...mapState(projectStore, ['projects', 'meta']),
    ...mapState(baseUrlStore, ['baseURL']),
    ...mapState(pageStore, ['getPage']),
    maxSizePage() {
      return this.$route.name.includes('home') ? 8 : 10
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

<style scoped lang="scss">
.brief-case-global {
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  margin-bottom: 100px;
  .brief-item {
    margin: 0;
    padding: 0;
    width: 100%;
    .col-item {
      z-index: 1;
      margin-bottom: 15px;
      transition: scale 0.4s ease-out 100ms;
      .background-img {
        width: 100%;
        height: 250px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 5px 5px 0 0;
        box-shadow: 0 0 5px black;
      }
      .brief-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        color: white;
        border-radius: 0 0 5px 5px;
        height: 70px;
        padding: 5px;
        width: 100%;
        h3 {
          font-weight: 700;
          font-size: 1.15rem;
          max-width: 50%;
        }
        button {
          display: flex;
          flex-wrap: wrap;
          justify-content: end !important;
          align-items: center;
          border: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: filter 1s ease-out 100ms;
          .text {
            padding: 2px 7px;
          }
        }
      }
      &:hover {
        scale: (1.2);
        opacity: 1;
        z-index: 2;
      }
    }
  }
}
</style>
