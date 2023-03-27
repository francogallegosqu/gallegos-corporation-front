<template>
  <div class="go-top" @click="goTop()">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>
<script>
import { mapActions } from 'pinia'
import { topStore } from '../../stores'
export default {
  methods: {
    ...mapActions(topStore, ['goTop']),
  },
}
</script>
<style scoped lang="scss">
.go-top {
  cursor: pointer;
  position: fixed;
  right: 24px;
  bottom: 90px;
  z-index: 996;
  background-color: $bg-color-dark;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px $color-blue-primary;
  svg {
    transform: rotate(180deg);
  }
}
</style>
