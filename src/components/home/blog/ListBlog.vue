<template>
  <div class="row">
    <div
      v-for="item in grid"
      :key="item.id"
      class="col-item-blog col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
    >
      <div class="item-content">
        <div class="item-blog-img">
          <img
            :src="`${baseURL}${item?.attributes?.image?.data?.attributes?.url}`"
            :alt="item?.attributes?.image?.data?.attributes?.name"
          />
        </div>
        <div class="item-blog-content">
          <div class="item-blog-top">
            <span class="name"
              >{{ item?.attributes?.name }} <strong class="slash">|</strong>
            </span>
            <span class="creator"> {{ item?.attributes?.creator }}</span>
          </div>
          <div class="item-blog-inside">
            <h5 class="title">{{ item?.attributes?.title }}</h5>
            <p class="text">{{ item?.attributes?.description }}</p>
            <div class="button">
              <button>
                Ver Más
                <img
                  src="/assets/icons/arrow-blog-icon.svg"
                  alt="Arrow Right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { baseUrlStore } from '../../../stores'
export default {
  props: {
    grid: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState(baseUrlStore, ['baseURL']),
  },
}
</script>

<style scoped lang="scss">
.col-item-blog {
  z-index: 1;
  .item-content {
    height: 100%;
    border: solid 2px $color-blue-primary;
    border-radius: 5px;
    word-break: break-word;
    display: flex;
    flex-direction: column;
    .item-blog-img {
      flex: 0 1 40%;
      width: 100%;
      height: auto;
      img {
        border-radius: 5px;
      }
    }
    .item-blog-content {
      flex: 0 1 60%;
      word-break: break-word;
      height: 100%;
      .item-blog-top {
        word-break: break-word;
        padding: 20px;
        height: 20%;
        display: flex;
        .name {
          width: 40%;
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          font-size: 1rem;
          .slash {
            color: $color-blue-primary;
          }
        }
        .creator {
          width: 60%;
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
        }
      }
      .item-blog-inside {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 0 20px 20px 20px;
        .title {
          font-weight: 600;
          font-size: 1.2rem;
          line-height: 25px;
        }
        .text {
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 20px;
          /* or 133% */

          letter-spacing: 0.04em;
        }
        .button {
          width: 100%;
          display: flex;
          justify-content: end;
          button {
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            color: $color-blue-primary;
            /* width: 8rem; */
            font-size: 1rem;
            img {
              margin-left: 3px;
              max-width: 1.7rem;
            }
          }
        }
      }
    }
  }
  /* width: 100%; */
  min-height: 500px;
  padding: 12px 12px;
}
</style>
