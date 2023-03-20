<template>
  <div class="blog">
    <ListBlogVue :grid="getListBlog" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { blogStore, pageStore } from '../../stores'
import ListBlogVue from './blog/ListBlog.vue'
export default {
  components: {
    ListBlogVue,
  },
  computed: {
    ...mapState(blogStore, ['getListBlog']),
    ...mapState(pageStore, ['getLang', 'getPage']),
  },
  watch: {
    getPage() {
      this.loadBlog({})
    },
  },
  methods: {
    ...mapActions(blogStore, ['loadBlog']),
  },
  mounted() {
    this.loadBlog({})
  },
}
</script>

<style scoped lang="scss">
.blog {
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  @media (max-width: $movil-size) {
    margin: 15px;
  }
  padding-top: 100px;
}
</style>
