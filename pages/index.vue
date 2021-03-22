<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>hello</h1>
        <p>{{ res }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      res: null
    }
  },
  async mounted () {
    await this.$axios.get('content/home').then(response => {
      if (response.status !== 200) throw new Error(response.data.message.reason)
      else this.res = response.data
    })
  }
})
</script>

<style>
</style>
