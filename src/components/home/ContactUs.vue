<template>
  <div class="contact-us">
    <div class="title">
      <h2 class="circle"></h2>
      <h2>Contacto</h2>
      <h2 class="circle"></h2>
    </div>
    <div class="top-content">
      <h2>Inicia Tu Proyecto</h2>
      <p>
        Nos pondremos en contacto con usted dentro de las 24 horas y su
        información se mantendrá privada.
      </p>
    </div>
    <div class="content">
      <form
        id="formId"
        class="row g-3 needs-validation"
        novalidate
        enctype="multipart/form-data"
      >
        <div v-if="danger" class="form-danger">
          ¡Rellena los Campos Correctamente!
        </div>
        <div class="form-content">
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="Nombre"
            required
            v-model="form.name"
          />
        </div>
        <div class="form-content">
          <input
            type="email"
            class="form-control"
            id="validationCustom02"
            placeholder="Correo Electronico"
            required
            v-model="form.email"
          />
        </div>
        <div class="form-content form-file">
          <label id="labelInput" for="inputTag">
            <span class="cross">+</span>
            Archivo de Desarrollo
            <input id="inputTag" type="file" />
          </label>
          <span id="imageName"></span>
        </div>
        <div class="form-content">
          <input
            type="text"
            class="form-control"
            id="validationCustom04"
            placeholder="Empresa"
            required
            v-model="form.business"
            @change="fileImage"
          />
        </div>
        <div class="form-content">
          <input
            type="text"
            class="form-control"
            id="validationCustom04"
            placeholder="Asunto"
            required
            v-model="form.subject"
            @change="fileImage"
          />
        </div>
        <div class="form-content">
          <textarea
            class="form-control"
            placeholder="Deja tu mensaje"
            id="validationCustom05"
            required
            v-model="form.message"
          ></textarea>
        </div>
      </form>
      <div class="submit mt-3">
        <button
          type="button"
          class="btn btn-primary w-100"
          @click="sendContactForm()"
          :disabled="!isFullForm"
        >
          <span v-if="!buttonChange">Enviar</span>
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
            v-if="buttonChange"
          ></span>
          <span v-if="buttonChange">Enviando...</span>
        </button>
      </div>
      <div
        id="popup"
        class="popup panel panel-primary"
        :style="
          statusRequest ? `visibility: visible; opacity: 1; ${stylesPopUp}` : ''
        "
      >
        <div class="body-popup">
          <div class="title">
            <button id="close" @click="closePopUp">X</button>
          </div>
          <div class="popup-content">
            <p class="popup-text">¡TU NUEVO PROYECTO ESTA EN CAMINO!</p>
            <p>¡¡GRACIAS!!</p>
          </div>
        </div>
      </div>
    </div>
    <ConfettiExplosion
      id="confetti"
      :style="confetti ? stylesConfe : ''"
      v-if="confetti"
      :particleCount="300"
      :force="0.5"
    />
  </div>
</template>

<script>
import ConfettiExplosion from 'vue-confetti-explosion'
import { mapActions } from 'pinia'
import { contact } from '../../stores/contact'
import { validateEmail } from '../../utils/filters'
export default {
  components: {
    ConfettiExplosion,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        file: null,
        business: '',
        subject: '',
        message: '',
      },
      buttonChange: false,
      statusRequest: false,
      stylesPopUp: '',
      timeout: null,
      danger: false,
      confetti: false,
      stylesConfe: '',
    }
  },
  computed: {
    isFullForm() {
      return (
        this.form.name !== '' &&
        this.form.email !== '' &&
        this.form.businesss !== '' &&
        this.form.subject !== '' &&
        this.form.message !== ''
      )
    },
  },
  methods: {
    ...mapActions(contact, ['sendContact']),
    cleanForm() {
      this.form = {
        name: '',
        email: '',
        file: null,
        business: '',
        subject: '',
        message: '',
      }
      let imageName = document.getElementById('imageName')
      imageName.innerText = ''
    },
    closePopUp() {
      this.statusRequest = false
      this.confetti = false
      clearTimeout(this.timeout)
    },
    updatePositionPopup() {
      const elemento = document.getElementById('popup')
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight
      const elementoWidth = elemento.offsetWidth
      const elementoHeight = elemento.offsetHeight
      const leftPosition = (viewportWidth - elementoWidth) / 2
      const topPosition = (viewportHeight - elementoHeight) / 2
      this.stylesPopUp = `position:fixed; background-color:red; top:${topPosition}px; left: ${leftPosition}px`
      this.stylesConfe = `position:fixed; background-color:red; top:${topPosition}px; left: ${leftPosition}px`
    },
    async sendContactForm() {
      let form = document.getElementById('formId')
      form.classList.add('was-validated')
      if (!validateEmail(this.form.email)) {
        this.danger = true
        return
      }
      if (this.isFullForm) {
        this.buttonChange = true
        try {
          // this.statusRequest = await this.sendContact(this.form)
          this.updatePositionPopup()
          this.statusRequest = true
          if (this.statusRequest) {
            this.confetti = true
          }
        } finally {
          this.buttonChange = false
          this.danger = false
          if (this.statusRequest) {
            this.timeout = setTimeout(() => {
              this.statusRequest = false
              this.confetti = false
              this.cleanForm()
              form.classList.remove('was-validated')
            }, 5000)
          }
        }
      }
    },
  },
  mounted() {
    let input = document.getElementById('inputTag')
    let imageName = document.getElementById('imageName')
    input.addEventListener('change', () => {
      let file = document.querySelector('input[type=file]').files[0]
      imageName.innerText = file.name
      this.form.file = file
    })
  },
}
</script>

<style scoped lang="scss">
@keyframes shadowAnimation {
  0% {
    box-shadow: 0px 0px 20px 3px $color-purple-primary;
  }

  50% {
    box-shadow: 0px 0px 30px 10px $color-purple-primary;
  }

  100% {
    box-shadow: 0px 0px 20px 3px $color-purple-primary;
  }
}

#popup {
  position: fixed;
  opacity: 0;
  visibility: hidden;
  transition: opacity 700ms;
  animation: shadowAnimation 2s linear infinite;
  display: flex;
  align-items: start;
  background-image: url('@/assets/blue-target.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 200px;
  margin: 0 auto;
  width: 21rem;
  .body-popup {
    height: 100%;
    transition: all 5s ease-in-out;
    border-radius: 15px;
    box-shadow: 0 0 5px #ccc;
    .title {
      display: flex;
      justify-content: end;
      margin: 0;
      height: 15%;
      button {
        height: 100%;
        width: 10%;
      }
    }
    .popup-content {
      height: 85%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;
      .popup-text {
        margin: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 20px;
        font-weight: 800;
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
  }
}
/* #popup:target {
  visibility: visible;
  opacity: 1;
} */
.contact-us {
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    letter-spacing: 0.04em;
    color: $color-blue-primary;
    display: flex;
    align-items: center !important;
    justify-content: center;
    align-content: end;
    text-align: center;
    gap: 0.5rem;
    margin-bottom: 50px;
    .circle {
      height: 10px !important;
      width: 10px !important;
      border-radius: 20px;
      background: $color-blue-primary;
    }
  }
  .top-content {
    margin-bottom: 40px;
    h2 {
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 50px;
    }
  }
  .top-content,
  .content {
    z-index: 1;
    @media (min-width: $movil-xl-size) {
      width: 60%;
    }
    @media (min-width: $desktop-size) {
      width: 40%;
    }
    width: 90%;
    text-align: center;
    .form-danger {
      color: $color-danger-primary;
    }
    .form-content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      input,
      textarea {
        background-color: $bg-color-dark;
        color: white;
        border-color: $color-purple-primary;
      }
      #labelInput {
        cursor: pointer;
        #inputTag {
          display: none;
        }
        .cross {
          height: 30px;
          width: 30px;
          font-weight: 600;
          font-size: 20px;
          margin-right: 5px;
          padding: 2px 5px;
          border: 2px solid $color-purple-primary;
          border-radius: 5px;
        }
      }
    }
    .submit {
      button {
        background: $bg-degraded;
        transition: filter 1s ease-out 100ms;
        &:hover {
          filter: brightness(1.3);
        }
      }
    }
  }
}
</style>
