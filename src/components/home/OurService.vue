<template>
  <div class="service">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>{{ getPage?.content?.service?.title }}</h2>
      <h2 class="circle"></h2>
    </div>
    <h2 class="title-two">{{ getPage?.content?.service?.subtitle }}</h2>
    <div class="row w-100 subtitle">
      <div class="col-12 col-sm-7">
        <p>
          {{ getPage?.content?.service?.text }}
        </p>
      </div>
      <div class="col-12 col-sm-3">
        <p class="background-service">
          {{ getPage?.content?.service?.backService }}
        </p>
      </div>
    </div>
    <div id="grid-container" class="row w-100 grid-container">
      <div
        :id="item.id"
        v-for="item in getPage?.content?.service?.grid"
        :key="item.id"
        class="grid-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="content">
          <div class="img-title">
            <img :src="item?.img" :alt="item?.title" />
            <h2>{{ item?.title }}</h2>
            <p>
              {{ item?.content }}
            </p>
          </div>

          <div class="button">
            <button class="button-gradient">
              {{ item?.buttonName }}
              <img src="@/assets/icons/arrow-lg-icon.svg" alt="Arrow Right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { pageStore } from '../../stores'
export default {
  data() {
    return {
      img: [],
    }
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
    listImg() {
      const list = this.getPage?.content?.service?.grid
      return list.map((e) => {
        return e.img
      })
    },
  },
  methods: {
    updateZoom() {
      this.onScroll('grid-item-one')
      this.onScroll('grid-item-two')
      this.onScroll('grid-item-three')
      this.onScroll('grid-item-four')
    },
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateZoom)
  },
  mounted() {
    window.addEventListener('scroll', this.updateZoom)
  },
}
</script>

<style scoped lang="scss">
.service {
  position: relative;
  z-index: 1;
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  overflow: hidden;
  .title,
  .title-two {
    margin: 15px;
  }
  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    letter-spacing: 0.04em;
    color: $color-blue-primary;
    display: flex;
    align-items: center !important;
    text-align: center;
    gap: 0.5rem;
    .circle {
      height: 10px !important;
      width: 10px !important;
      border-radius: 20px;
      background: $color-blue-primary;
    }
  }
  .subtitle {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 100px;
    .background-service {
      text-align: center;
      background: $bg-degraded;
      border-radius: 4px 10px;
      padding: 5px;
    }
  }
  .grid-container {
    display: flex;
    justify-content: start;
    align-content: center;
    margin: 0;
    .grid-item {
      padding-bottom: 14px;
      /* 
      padding-left: 9px;
      padding-right: 9px; */
      gap: 4rem;
      //animation
      opacity: 0;
      transform: scale(0.5);
      transition: 0.7s ease-in-out transform, 0.7s ease-in-out opacity;
      .content {
        img {
          width: 20%;
        }
        border: 3px solid $color-blue-primary;
        margin: 2px;
        border-radius: 10px;
        word-break: break-word;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        padding: 20px;
        text-align: start;
        width: 100%;
        height: 100%;
        min-height: 300px;
        .button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: end;
          flex-wrap: wrap;
          button {
            /* min-width: 90%; */
            border: none;
            text-align: center;
            flex-wrap: wrap;
            font-weight: 500;
            font-size: 1.2rem;
            img {
              width: 10%;
            }
          }
        }
        &:hover {
          background: $bg-degraded no-repeat;
          animation: fillBackground 1s ease 1;
        }
      }
    }
  }
}

@keyframes fillBackground {
  0% {
    background-size: 0;
  }
  100% {
    background-size: 100%;
  }
}
</style>
