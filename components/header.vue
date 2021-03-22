<template lang="pug">
  div.header(v-if="res")
    b-container
      b-row.p-3
        b-col.d-flex.justify-content-between
          img(:src="res.logo" :srcset="res.logo_set.join(', ')")
          div.menus
            div.item(
              v-for="(menu, menuIndex) in res.menus"
              :key="menuIndex")
              span {{ menu.text }}
              span(v-if="menu.sub_menus") &nbsp;<b-icon icon="chevron-down"></b-icon>
              div.sub-menus(v-if="menu.sub_menus")
                div.sub-item(
                  v-for="(menu, menuIndex) in menu.sub_menus"
                  :key="menuIndex") {{ menu.text }}
          div.lang
            span EN&nbsp;
            b-icon(icon="chevron-down")

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      res: null
    }
  },

  mounted () {
    this.fetchHeader()
  },

  methods: {
    async fetchHeader () {
      // show loading
      this.$store.commit('loading', true)

      // api request
      try {
        let response = await this.$axios.get('header')
        if (response.status !== 200) throw new Error(response.data.message.reason)
        else this.res = response.data

        // hide loading
        this.$store.commit('loading', false)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  height: 10%;
  width: 100%;
  z-index: 10;

  color: #fff;
  font-family: 'Eina_01_Regular';
  font-size: 14px;
  letter-spacing: 0.6px;

  .menus {
    display: flex;

    .item {
      margin-left: 20px;
      margin-right: 20px;

      cursor: pointer;
    }

    .item:hover .sub-menus {
      display: block;
    }

    .sub-menus {
      position: absolute;
      display: none;

      .sub-item {
        margin-top: 10px;
      }
    }
  }
}
</style>
