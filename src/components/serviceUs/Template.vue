<template>
  <div>
    <Hero :title="title" />
    <div class="row template-service">
      <div
        class="col-service-item-one col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"
      >
        <div class="img">
          <img :src="photo" alt="Photo" />
        </div>
        <div class="content">
          <div class="phrase">{{ phrase }}</div>
          <p class="message">{{ message }}</p>
        </div>
        <div class="video">
          <iframe
            width="100%"
            :src="video"
            title="YouTube video player"
            frameborder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div
        class="col-service-item-two col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
        v-if="getWidthScreen >= 768"
      >
        <ul class="ul-service">
          <li
            class="li-service"
            v-for="item in getPage?.content?.service?.grid"
            :key="item.id"
          >
            <img :src="item?.img" :alt="item?.title" /><RouterLink
              :to="item?.path"
              class="router-link"
              >{{ item?.title }}</RouterLink
            >
          </li>
        </ul>
      </div>
      <div
        class="col-service-item-three col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"
        v-if="listNumber"
      >
        <div class="row row-second">
          <div
            :id="item.id"
            v-for="item in listNumber"
            :key="item.id"
            class="row-second-item col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div class="icon-title">
              <h3 class="number">{{ item?.number }}</h3>
              <h3>{{ item?.title }}</h3>
            </div>
            <p>
              {{ item?.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bar" class="row bar-template">
      <div class="col-item-bar col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="title">{{ bar?.title }}</div>
        <ul>
          <li v-for="item in bar?.list" :key="item.id">
            <span class="circle"></span> {{ item }}
          </li>
        </ul>
      </div>
      <div class="col-item-bar-img col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="content-images">
          <img class="developer" :src="barPhoto" alt="World" />
        </div>
      </div>
    </div>
    <div v-if="important" class="row important-template">
      <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
        <div class="title">
          {{ important?.title }}
        </div>
        <div
          class="important-content"
          v-for="item in important?.list"
          :key="item.id"
        >
          <div class="important-icon">
            <img :src="item?.img" :alt="item.id" />
          </div>
          <div class="important-text">
            <p>{{ item?.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="strategy" class="row strategy-template">
      <div class="strategy-top">
        <div class="title">{{ strategy?.title }}</div>
        <div class="subtitle">{{ strategy?.subtitle }}</div>
      </div>
      <div
        v-for="item in strategy?.list"
        :key="item.id"
        class="strategy-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
      >
        <div class="item-inside">
          <div class="top">
            <span class="number"> {{ item?.number }}</span
            ><span class="title"> {{ item?.title }}</span>
          </div>
          <div class="text">
            {{ item?.text }}
          </div>
          <div class="list">
            <ul>
              <li v-for="fact in item?.list" :key="fact.id">
                <span class="circle"></span>{{ fact }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ContactUs />
  </div>
</template>

<script>
import Hero from '../global/Hero.vue'
import ContactUs from '../home/ContactUs.vue'
import { mapState } from 'pinia'
import { pageStore, useSizeStore } from '../../stores'
export default {
  components: {
    Hero,
    ContactUs,
  },
  data() {
    return {
      isLoad: false,
    }
  },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    phrase: {
      type: String,
      default: () => '',
    },
    message: {
      type: String,
      default: () => '',
    },
    photo: {
      type: String,
      default: () => '',
    },
    video: {
      type: String,
      default: () => '',
    },
    listNumber: {
      type: Array,
      default: () => [],
    },
    bar: {
      type: Object,
      default: () => {},
    },
    barPhoto: {
      type: String,
      default: () => '',
    },
    important: {
      type: Object,
      default: () => {},
    },
    strategy: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
    ...mapState(useSizeStore, ['getWidthScreen']),
  },
}
</script>

<style scoped lang="scss">
.template-service {
  position: relative;
  z-index: 1;
  margin: 30px 2px 30px 2px;
  @media (min-width: $movil-size) {
    margin: 20px 40px 20px 40px;
  }
  @media (min-width: $tablet-size) {
    margin: 20px 60px 20px 60px;
  }
  @media (min-width: $desktop-size) {
    margin: 20px 70px 20px 70px;
  }
  .col-service-item-one {
    .img {
      width: 100%;
      img {
        border-radius: 5px;
        width: 100%;
      }
    }
    .content {
      margin: 4rem 0px;
      .phrase {
        font-size: 2rem;
        font-weight: 900;
        color: $color-blue-primary;
      }
      .message {
        font-size: 17px;
        line-height: 1.6;
      }
    }
    .video {
      width: 100%;
      iframe {
        border-radius: 5px;
        /* min-height: 360px; */
        @media (min-width: $movil-size) {
          min-height: 260px;
        }
        @media (min-width: $tablet-size) {
          min-height: 360px;
        }
        @media (min-width: $desktop-size) {
          min-height: 460px;
        }
      }
    }
  }
  .col-service-item-two {
    display: flex;
    justify-content: center;
    height: auto;
    .ul-service {
      background-color: $color-blue-primary;
      padding: 10px;
      border-radius: 5px;
      height: fit-content;
      width: fit-content;
      .li-service {
        background-color: $bg-color-dark;
        margin: 10px 8px;
        padding: 2px 15px;
        border-radius: 5px;
        text-align: start;
        cursor: pointer;
        /* font-weight: 500;
        font-size: 1.02rem; */
        height: 100%;
        /* line-height: 50px; */
        /* display: flex;
        justify-content: start;
        align-items: end; */
        img {
          width: 10%;
        }
        .router-link {
          font-weight: 500;
          font-size: 1.02rem;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  .col-service-item-three {
    margin: 4rem 0px;
    padding: 0 2rem;
    .row-second {
      .row-second-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 3rem 0;
      }
      .icon-title {
        display: flex;
        justify-content: start;
        align-content: center;
        gap: 0.5rem;
        .number {
          font-size: 3rem;
          font-weight: 700;
          height: fit-content;
          /* line-height: 0.8; */
          color: $color-blue-primary;
        }
        h3 {
          font-weight: 600;
          font-size: 18px;
          line-height: 1.5rem;
          color: white;
        }
      }
      p {
        color: white;
      }
    }
  }
}
.bar-template {
  position: relative;
  z-index: 1;
  .col-item-bar {
    background-color: white;
    color: $bg-color-dark;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 4vh;
      font-weight: 600;
      text-align: center;
    }
    ul {
      li {
        display: flex;
        margin: 2rem 0;
        justify-content: start;
        align-items: center;
        font-size: 2vh;
        font-weight: 600;
        .circle {
          min-width: 10px;
          min-height: 10px;
          background-color: rgba($color: $bg-color-dark, $alpha: 0.5);
          border-radius: 50%;
          margin-right: 9px;
        }
      }
    }
  }

  .col-item-bar-img {
    padding: 0;
    .content-images {
      height: 100%;
      .developer {
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

.important-template {
  position: relative;
  z-index: 1;
  margin: 30px 2px 30px 2px;
  @media (min-width: $movil-size) {
    margin: 20px 40px 20px 40px;
  }
  @media (min-width: $tablet-size) {
    margin: 20px 60px 20px 60px;
  }
  @media (min-width: $desktop-size) {
    margin: 20px 70px 20px 70px;
  }
  .title {
    font-size: 2rem;
    font-weight: 900;
    color: $color-blue-primary;
  }
  .important-content {
    display: flex;
    align-items: start;
    margin: 3.5rem 0;
    .important-icon {
      border-radius: 5px;
      background: $bg-degraded;
      min-width: 7rem;
      min-height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.5s ease;
      img {
        width: 50%;
      }
      &:hover {
        transform: translateY(-5px);
      }
    }
    .important-text {
      /* border: solid 2px $color-blue-primary;
      border-radius: 5px; */
      display: flex;
      justify-content: center;
      align-content: center;
      min-height: 5rem;
      padding-left: 2rem;
      p {
        display: flex;
        align-items: center;
        margin: 0;
        font-weight: 700;
        font-size: 1rem;
      }
    }
  }
}
.strategy-template {
  position: relative;
  z-index: 1;
  margin: 30px 2px 30px 2px;
  @media (min-width: $movil-size) {
    margin: 20px 40px 20px 40px;
  }
  @media (min-width: $tablet-size) {
    margin: 20px 60px 20px 60px;
  }
  @media (min-width: $desktop-size) {
    margin: 20px 70px 20px 70px;
  }
  .strategy-top {
    text-align: center;
    .title {
      font-size: 2rem;
      font-weight: 900;
      color: $color-blue-primary;
    }
    .subtitle {
      font-size: 2.5rem;
      font-weight: 900;
    }
  }
  .strategy-item {
    transition: transform 0.5s ease;
    /* background: $bg-degraded; */
    margin: 1rem 0;
    .item-inside {
      padding: 10px 0;
      margin: 5px;
      background-color: white;
      border-radius: 5px;
      height: 100%;
    }
    .top {
      color: $bg-color-dark;
      .number {
        font-size: 2rem;
        font-weight: 700;
        line-height: 0.8;
      }
      .title {
        padding-left: 6px;
        font-weight: 700;
        font-size: 1.3rem;
      }
    }
    .top,
    .text {
      margin: 1rem;
      color: $bg-color-dark;
      font-weight: 700;
    }
    .list {
      ul {
        li {
          display: flex;
          align-items: center;
          .circle {
            margin: 0;
            min-width: 5px;
            min-height: 5px;
            max-width: 5px;
            max-height: 5px;
            background-color: rgba($color: $bg-color-dark, $alpha: 0.5);
            border-radius: 50%;
            margin-right: 9px;
          }
          color: $bg-color-dark;
          font-weight: 700;
        }
      }
    }
    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
