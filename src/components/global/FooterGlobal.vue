<template>
  <footer class="row w-100 d-flex justify-content-center align-items-start">
    <div
      class="item col-10 col-sm-4 col-md-4 d-flex justify-content-center align-items-center"
    >
      <Logo class="logo" />
      <span class="name-logo" v-if="getWidthScreen >= 1200"
        >GALLEGOS CORPORATION</span
      >
    </div>
    <div class="item col-10 col-sm-4 col-md-4 text-start">
      <h3>Contacto</h3>
      <ul class="contact">
        <li><Phone />+51 960 207 415</li>
        <li><Email />info@gallegoscorporation.com</li>
        <li>
          <Location />
          <span>Lima, Perú</span>
        </li>
      </ul>
    </div>
    <div class="item col-10 col-sm-4 col-md-4 text-start">
      <h3>Redes Sociales</h3>
      <ul class="networks">
        <li>
          <img alt="Logo Instagram" src="/src/assets/icons/insta.png" />
        </li>
        <li>
          <img alt="Logo Instagram" src="/src/assets/icons/face.png" />
        </li>
        <li>
          <img alt="Logo Instagram" src="/src/assets/icons/wsp.png" />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'pinia'
import { useSizeStore } from '../../stores/size'
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
  },
}
</script>
<style lang="scss">
.row {
  height: 7%;
  padding-left: 3%;
  padding-right: 3%;
  .item {
    /* overflow-wrap: break-word; */
    .name-logo {
      font-weight: 700;
      line-height: 20px;
      margin-left: 20px;
      letter-spacing: 0.04em;
    }
    .contact {
      padding: 0px;
      overflow-wrap: break-word;
      li {
        div {
          display: inline-block;
        }
      }
      .location,
      .phone,
      .email {
        max-width: 15px;
        width: 3rem;
        margin-right: 0.5rem;
        svg {
          * {
            fill: white;
          }
        }
      }
    }
    .networks {
      padding: 0px;
      display: flex;
      li {
        margin-right: 3rem;
        img {
          max-width: 30px;
        }
      }
    }
  }
}
</style>
