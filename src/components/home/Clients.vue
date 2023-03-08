<template>
  <div class="clients">
    <div class="row">
      <div class="client-item col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div id="id-project" class="number-icon">
          <div class="client-icon">
            <img src="@/assets/icons/clients/briefcase-solid.svg" alt="Field" />
          </div>
          <h2>{{ projectNumber }}+</h2>
          <h3>Proyectos Terminados</h3>
        </div>
      </div>
      <div class="client-item col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div id="id-jobs" class="number-icon">
          <div class="client-icon">
            <img src="@/assets/icons/clients/folder-solid.svg" alt="Field" />
          </div>
          <h2>{{ createdJobs }}+</h2>
          <h3>Trabajos Creados</h3>
        </div>
      </div>
      <div class="client-item col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div id="id-customer" class="number-icon">
          <div class="client-icon">
            <img
              src="@/assets/icons/clients/user-group-solid.svg"
              alt="Field"
            />
          </div>
          <h2>{{ happyCustomers }}+</h2>
          <h3>Clientes Satisfechos</h3>
        </div>
      </div>
      <div class="client-item col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div id="id-experience" class="number-icon">
          <div class="client-icon">
            <img src="@/assets/icons/clients/calendar-solid.svg" alt="Field" />
          </div>
          <h2>{{ yearsExperiences }}+</h2>
          <h3>Años de Experiencia</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectNumber: 0,
      createdJobs: 0,
      happyCustomers: 0,
      yearsExperiences: 0,
    }
  },
  methods: {
    addNumberProject(number) {
      let myInterval = setInterval(() => {
        if (this.projectNumber < number) {
          this.projectNumber += 1
        }
      }, 100)
      if (this.projectNumber > number) {
        clearInterval(myInterval)
      }
    },
    addNumberJobs(number) {
      let myInterval = setInterval(() => {
        if (this.createdJobs < number) {
          this.createdJobs += 1
        }
      }, 100)
      if (this.createdJobs > number) {
        clearInterval(myInterval)
      }
    },
    addNumberCustomer(number) {
      let myInterval = setInterval(() => {
        if (this.happyCustomers < number) {
          this.happyCustomers += 1
        }
      }, 100)
      if (this.happyCustomers > number) {
        clearInterval(myInterval)
      }
    },
    addNumberExperience(number) {
      let myInterval = setInterval(() => {
        if (this.yearsExperiences < number) {
          this.yearsExperiences += 1
        }
      }, 100)
      if (this.yearsExperiences > number) {
        clearInterval(myInterval)
      }
    },
    scrollClients(id, number, addNumber) {
      setTimeout(() => {
        let myElement = document.getElementById(id)
        if (this.isElementInViewport(myElement)) {
          addNumber(number)
        }
      }, 2000)
    },
    updateNumber() {
      this.scrollClients('id-project', 600, this.addNumberProject)
      this.scrollClients('id-jobs', 200, this.addNumberJobs)
      this.scrollClients('id-customer', 23, this.addNumberCustomer)
      this.scrollClients('id-experience', 7, this.addNumberExperience)
    },
  },
  mounted() {
    // this.update()
    window.addEventListener('scroll', this.updateNumber)
  },
}
</script>

<style lang="scss">
.clients {
  margin: 20px;
}
.client-item {
  padding: 10px;
}
.number-icon {
  .client-icon {
    width: 100%;
    img {
      width: 15%;
    }
  }
  border: 1px solid $color-blue-primary;
  border-radius: 0px 0px 10px 10px;
  border-top: 6px solid $color-blue-primary;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 200px;
}
</style>
