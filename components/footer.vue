<template lang="pug">
  div(v-if="footer")
    div.spacer
    div.footer
      b-img.w-100(:src="footer.separator_lg" :srcset="`${footer.separator_sm} 576w, ${footer.separator_lg} 1440w`" sizes="100vw" fluid)
      b-container.py-4
        b-row
          b-col
            b-img(:src="footer.logo" :srcset="footer.logo_set" width=110)
        b-row.justify-content-md-between
          b-col.sitemap-1(cols="6" md="auto")
            b-row
              b-col.title {{ footer.sitemap_1.title}}
            b-row(v-for="(item, itemIndex) in footer.sitemap_1.items" :key="itemIndex")
              b-col.item
                NuxtLink(:to="item.link") {{ item.text }}
          b-col.sitemap-2(cols="6" md="auto")
            b-row
              b-col.title {{ footer.sitemap_2.title}}
            b-row(v-for="(item, itemIndex) in footer.sitemap_2.items" :key="itemIndex")
              b-col.item
                NuxtLink(:to="item.link") {{ item.text }}
          b-col.sitemap-3(cols="6" md="auto")
            b-row
              b-col.title {{ footer.sitemap_3.title}}
            b-row(v-for="(item, itemIndex) in footer.sitemap_3.items" :key="itemIndex")
              b-col.item
                NuxtLink(:to="item.link") {{ item.text }}
          b-col.sitemap-4(cols="6" md="auto")
            b-row
              b-col.title {{ footer.sitemap_4.title}}
            b-row(v-for="(item, itemIndex) in footer.sitemap_4.items" :key="itemIndex")
              b-col.item
                NuxtLink(:to="item.link") {{ item.text }}
          b-col.sitemap-5(cols="12" md="auto")
            b-row
              b-col.title {{ footer.social_media_link.title}}
            b-row
              b-col.social-media-wrapper
                a(:href="footer.social_media_link.facebook" target="_blank")
                  b-img(:src="footer.social_media_link.facebook_icon" :srcset="footer.social_media_link.facebook_icon_set")
                a(:href="footer.social_media_link.twitter" target="_blank")
                  b-img(:src="footer.social_media_link.twitter_icon" :srcset="footer.social_media_link.twitter_icon_set")
                a(:href="footer.social_media_link.instagram" target="_blank")
                  b-img(:src="footer.social_media_link.instagram_icon" :srcset="footer.social_media_link.instagram_icon_set")
                a(:href="footer.social_media_link.youtube" target="_blank")
                  b-img(:src="footer.social_media_link.youtube_icon" :srcset="footer.social_media_link.youtube_icon_set")
            b-row
              b-col.title {{ footer.download_link.title}}
            b-row
              b-col.download-app-wrapper
                a(:href="footer.download_link.google_play" target="_blank")
                  b-img(:src="footer.download_link.google_play_icon" :srcset="footer.download_link.google_play_icon_set")
            b-row
              b-col.download-app-wrapper
                a(:href="footer.download_link.app_store" target="_blank")
                  b-img(:src="footer.download_link.app_store_icon" :srcset="footer.download_link.app_store_icon_set")

        b-row.my-4
          b-col
            hr

        b-row
          b-col.copyright
            div &copy; OVO 2021, All Right Reserved
            div Build with love by
              strong &nbsp;OVO Design

</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  props: ["footer"]
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.spacer {
  padding-top: 250px;
}
.footer {
  background-color: #f7f8fa;
  margin-top: -200px;
  position: relative;

  // site map
  .title {
    font-family: "Eina_01_Bold";
    font-size: 18px;

    margin-top: 30px;
    margin-bottom: 20px;
  }
  .item {
    font-family: "SF_Pro_Text_Regular";
    font-size: 16px;
    margin-bottom: 10px;

    a {
      color: #212529;
    }
  }

  .social-media-wrapper img {
    height: 40px;
    margin-bottom: 10px;
    margin-right: 10px;
    width: 40px;
  }

  .download-app-wrapper img {
    height: auto;
    margin-bottom: 10px;
    width: 175px;
  }

  .copyright {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      & > div {
        margin-bottom: 10px;
      }
    }

    strong {
      color: #00c6ce;
    }
  }
}
</style>
