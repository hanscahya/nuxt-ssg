<template lang="pug">
  div
    //- loading
    //- div.loading(v-if="$store.state.loading")
      img(src="/images/logo-ios-app.png")

    Header
    Nuxt
    Footer
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
}
</style>
