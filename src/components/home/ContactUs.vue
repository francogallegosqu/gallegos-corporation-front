<template>
  <div class="contact-us">
    <div class="top-content">
      <h2>Inicia Tu Proyecto</h2>
      <p>
        Nos pondremos en contacto con usted dentro de las 24 horas y su
        información se mantendrá privada.
      </p>
    </div>
    <div class="content">
      <form id="formId" class="row g-3 needs-validation" novalidate>
        <div class="form-content">
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="Nombre"
            required
            v-model="form.name"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="form-content">
          <input
            type="email"
            class="form-control"
            id="validationCustom02"
            placeholder="Correo Electronico"
            required
            v-model="form.name"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="form-content">
          <input
            type="file"
            class=""
            id="validationCustom03"
            placeholder="File"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="form-content">
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="Empresa"
            required
            v-model="form.name"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="form-content">
          <textarea
            class="form-control"
            placeholder="Deja tu mensaje"
            id="validationCustom01"
            required
          ></textarea>
          <div class="valid-feedback">Looks good!</div>
        </div>
      </form>
      <div class="submit">
        <button @click="sendContactForm()">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
      },
    }
  },
  methods: {
    isFullForm() {
      return this.form.name !== ''
    },
    sendContactForm() {
      let form = document.getElementById('formId')
      form.classList.add('was-validated')
      if (this.isFullForm()) {
        console.log('send')
      }
    },
  },
}
</script>

<style scoped lang="scss">
.contact-us {
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  padding-top: 100px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  .top-content {
    margin-bottom: 40px;
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
    .form-content {
      input,
      textarea {
        background-color: $bg-color-dark;
        color: white;
      }
      #validationCustom03 {
        font-size: medium;
      }
      @media (max-width: $movil-xl-size) {
        #validationCustom03 {
        /* height: 120px;
        line-height: 2rem; */
        border: 3px solid red;
      }
        
      }
    }
  }
}
</style>
