<template lang="pug">
  div.footer(v-if="res")
    b-img.w-100(:src="$mq === 'sm' ? res.bg_image_sm : res.bg_image_lg")
    b-container
      b-row
        b-col
          b-img(:src="res.logo" :srcset="res.logo_set.join(', ')" fluid)
      b-row
        b-col.sitemap-1
          b-row
            b-col.title {{ res.sitemap_1.title}}
          b-row(v-for="(item, itemIndex) in res.sitemap_1.items" :key="itemIndex")
            b-col.item {{ item.text }}
        b-col.sitemap-2
          b-row
            b-col.title {{ res.sitemap_2.title}}
          b-row(v-for="(item, itemIndex) in res.sitemap_2.items" :key="itemIndex")
            b-col.item {{ item.text }}
        b-col.sitemap-3
          b-row
            b-col.title {{ res.sitemap_3.title}}
          b-row(v-for="(item, itemIndex) in res.sitemap_3.items" :key="itemIndex")
            b-col.item {{ item.text }}
        b-col.sitemap-4
          b-row
            b-col.title {{ res.sitemap_4.title}}
          b-row(v-for="(item, itemIndex) in res.sitemap_4.items" :key="itemIndex")
            b-col.item {{ item.text }}
        b-col.sitemap-4
          b-row
            b-col.title {{ res.social_media_link.title}}
          b-row.d-flex
            b-col fb
            b-col tw
            b-col ig
            b-col yt

      b-row.my-4
        b-col
          hr

      b-row
        b-col &copy; OVO 2021, All Right Reserved
        b-col.text-right Build with love by <strong style="color: rgb(78,81,100);">OVO Design</strong>

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
    this.fetchFooter()
  },

  methods: {
    async fetchFooter () {
      // show loading
      this.$store.commit('loading', true)

      // api request
      try {
        let response = await this.$axios.get('footer')
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
.footer {
  position: relative;
  margin-top: -200px;

  .title {
    font-family: 'Eina_01_Bold';
    font-size: 18px;

    margin-top: 30px;
    margin-bottom: 20px;
  }
  .item {
    font-family: 'SF_Pro_Text_Regular';
    font-size: 16px;

    margin-bottom: 10px;
  }

  .container {
    position: absolute;
    top: 300px;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
