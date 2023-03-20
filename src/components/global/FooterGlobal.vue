<template>
  <footer>
    <div class="row">
      <div
        class="item col-10 col-sm-4 col-md-4 d-flex justify-content-center align-items-center"
      >
        <div class="item-content">
          <Logo class="logo" />
          <span class="name-logo" v-if="getWidthScreen >= 1200"
            >GALLEGOS CORPORATION</span
          >
        </div>
      </div>
      <div class="item col-10 col-sm-4 col-md-4 text-start">
        <div class="item-content">
          <h3>{{ getPage?.content?.footer?.contact }}</h3>
          <ul class="contact">
            <li><Phone /> +51 960 207 415</li>
            <li><Email /> info@gallegoscorporation.com</li>
            <li>
              <Location />
              <span> Lima, Perú</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="item col-10 col-sm-4 col-md-4 text-start">
        <div class="item-content">
          <h3>{{ getPage?.content?.footer?.network }}</h3>
          <ul class="networks">
            <li>
              <img alt="Logo Instagram" src="/src/assets/icons/insta.png" />
              /GallegoCorporation
            </li>
            <li>
              <img alt="Logo Instagram" src="/src/assets/icons/face.png" />
              @GallegoCorporation
            </li>
            <li>
              <img alt="Logo Instagram" src="/src/assets/icons/wsp.png" />
              +51 933 571 960
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'pinia'
import { useSizeStore, pageStore } from '../../stores'
import Logo from '../icons/Logo.vue'
import Location from '../icons/Location.vue'
import Phone from '../icons/Phone.vue'
import Email from '../icons/Email.vue'
export default {
  components: {
    Logo,
    Location,
    Phone,
    Email,
  },
  computed: {
    ...mapState(useSizeStore, ['getWidthScreen']),
    ...mapState(pageStore, ['getPage']),
  },
}
</script>
<style scoped lang="scss">
footer {
  min-height: 450px !important;
  background: no-repeat url('@/assets/footer/footer.gif');
  background-size: cover;
  background-position: bottom;
}
.row {
  position: relative;
  display: flex;
  padding-top: 100px;
  justify-content: center;
  align-items: start;
  background: linear-gradient(180deg, #060922 18.75%, rgba(6, 9, 34, 0) 100%);
  height: 80%;
  margin: 0;
  z-index: 3;
  .item {
    display: flex;
    align-items: start;
    justify-content: start;
    .name-logo {
      font-weight: 700;
      line-height: 20px;
      margin-left: 20px;
      letter-spacing: 0.04em;
    }
    .item-content {
      h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 35px;
      }
    }
    .contact {
      padding: 0px;
      overflow-wrap: break-word;
      li {
        div {
          display: inline-block;
        }
        font-weight: 400;
        margin: 9px 0;
      }
      .location,
      .phone,
      .email {
        max-width: 20px;
        width: 4rem;
        margin-right: 0.5rem;
      }
    }
    .networks {
      padding: 0px;
      overflow-wrap: break-word;
      li {
        margin-right: 3rem;
        img {
          max-width: 30px;
          margin-right: 10px;
        }
        font-weight: 400;
        margin: 9px 0;
      }
    }
  }
}
</style>
