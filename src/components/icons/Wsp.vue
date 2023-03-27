<template>
  <div class="wsp-icon">
    <a
      :href="`https://api.whatsapp.com/send?phone=+51960207415&text=${getPage?.content?.wsp?.text}`"
    >
      <img alt="Logo Whatsapp" src="/assets/icons/wsp.png" />
    </a>
  </div>
</template>
<script>
import { mapState } from 'pinia'
import { pageStore } from '../../stores'
export default {
  computed: {
    ...mapState(pageStore, ['getPage']),
  },
}
</script>
<style scoped lang="scss">
.wsp-icon {
  cursor: pointer;
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 996;
  /* background-color: $bg-color-dark; */
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: wspDownUp 3s linear infinite;
}
@keyframes wspDownUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
