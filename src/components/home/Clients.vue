<template>
  <div class="clients">
    <div class="row">
      <div class="client-item col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div id="id-project" class="number-icon">
          <div class="client-icon">
            <img src="/assets/icons/clients/briefcase-solid.svg" alt="Field" />
          </div>
          <h2>{{ projectNumber }}+</h2>
          <h3>{{ getPage?.content?.clients?.project?.title }}</h3>
        </div>
      </div>
      <div class="client-item col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div id="id-jobs" class="number-icon">
          <div class="client-icon">
            <img src="/assets/icons/clients/folder-solid.svg" alt="Field" />
          </div>
          <h2>{{ happyCustomers }}+</h2>
          <h3>{{ getPage?.content?.clients?.client?.title }}</h3>
        </div>
      </div>
      <div class="client-item col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div id="id-customer" class="number-icon">
          <div class="client-icon">
            <img src="/assets/icons/clients/user-group-solid.svg" alt="Field" />
          </div>
          <h2>{{ createdJobs }}+</h2>
          <h3>{{ getPage?.content?.clients?.job?.title }}</h3>
        </div>
      </div>
      <div class="client-item col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div id="id-experience" class="number-icon">
          <div class="client-icon">
            <img src="/assets/icons/clients/calendar-solid.svg" alt="Field" />
          </div>
          <h2>{{ yearsExperiences }}+</h2>
          <h3>{{ getPage?.content?.clients?.experience?.title }}</h3>
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
      projectNumber: 0,
      createdJobs: 0,
      happyCustomers: 0,
      yearsExperiences: 0,
    }
  },
  computed: {
    ...mapState(pageStore, ['getPage']),
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
      this.scrollClients('id-jobs', 23, this.addNumberJobs)
      this.scrollClients('id-customer', 200, this.addNumberCustomer)
      this.scrollClients('id-experience', 7, this.addNumberExperience)
    },
  },
  mounted() {
    // this.update()
    window.addEventListener('scroll', this.updateNumber)
  },
}
</script>

<style scoped lang="scss">
.clients {
  @media (min-width: $movil-size) {
    margin: 20px 60px 20px 60px;
  }
  margin: 20px;
  margin-top: 100px;
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
  border: 1px solid transparent;
  border-image: url('@/assets/clients/back-clients.jpg') 30 round;
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
