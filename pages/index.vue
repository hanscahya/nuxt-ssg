<template lang="pug">
  div(v-if="resHome")
    //- header
    Header(:header="resHeader")

    //- hero-1
    div.hero-1
      b-img.w-100(:src="resHome.hero_1.bg_image_lg" :srcset="`${resHome.hero_1.bg_image_sm} 576w, ${resHome.hero_1.bg_image_lg} 1440w`" sizes="100vw")
      b-container.content-wrapper
        b-row
          b-col(cols="12" md="5")
            div.title(v-html="resHome.hero_1.title")
            div.paragraph(v-if="resHome.hero_1.paragraph" v-html="resHome.hero_1.paragraph")
            div.mt-3.d-flex
              b-img.mr-3(fluid :src="require('@/assets/icon/app-store-btn.png')" :srcset="`${require('@/assets/icon/app-store-btn.png')} 1x, ${require('@/assets/icon/app-store-btn@2x.png')} 2x`")
              b-img(fluid :src="require('@/assets/icon/google-play-btn.png')" :srcset="`${require('@/assets/icon/google-play-btn.png')} 1x, ${require('@/assets/icon/google-play-btn@2x.png')} 2x`")
          b-col(cols="12" md="7")
            b-img(fluid :src="resHome.hero_1.bitmap" :src_set="resHome.hero_1.bitmap_set")

    //- merchant
    div.section-merchant
      b-container
        b-row
          b-col(cols="12" md="6")
            div.title(v-html="resHome.section_merchant.title")
            div.paragraph(v-html="resHome.section_merchant.paragraph")
          b-col.action-link(cols="12" lg="6")
            div.text
              span {{ resHome.section_merchant.all_merchants_text }}&nbsp;
              ArrowRight
        b-row.mt-3
          b-col(
            cols="4"
            md="3"
            lg="2"
            style="padding: 8px 10px;"
            v-for="(item, itemIndex) in merchantItems($screen.md, resHome.section_merchant.items)"
            :key="itemIndex")
            div.merchant-box
              b-img(:src="item.img")
              div.mt-2 {{ item.text }}

    //- about
    div.section-about
      b-img.bg(:src="`${!$screen.md ? resHome.section_about.bg_image_sm : resHome.section_about.bg_image_lg}`")
      b-container
        b-row(v-if="!$screen.md")
          b-col
            b-img.bitmap(:src="resHome.section_about.bitmap" fluid)
        b-row
          b-col.anchor
            LineAnchor
            span &nbsp;{{ resHome.section_about.anchor }}
        b-row
          b-col.title_1(cols="12" md="5" v-html="resHome.section_about.title_1")
          b-col.paragraph_1(cols="12" md="6" offset-md="1" v-html="resHome.section_about.paragraph_1")
        b-row
          b-col(cols="12" md="5")
            div.title_2(v-html="resHome.section_about.title_2")
            div.paragraph_2(v-html="resHome.section_about.paragraph_2")
            ul
              li(
                v-for="(item, itemIndex) in resHome.section_about.list_items"
                :key="itemIndex")
                b-img(src="../assets/icon/list-item.png")
                div {{ item }}
          b-col(v-if="$screen.md" cols="7")
            b-img.bitmap(:src="resHome.section_about.bitmap" fluid)

    //- product
    div.section-product
      b-container
        b-row
          b-col.anchor
            LineAnchor
            span &nbsp;{{ resHome.section_product.anchor }}
        b-row
          b-col.title(cols="12" md="5" v-html="resHome.section_product.title")
          b-col.paragraph(cols="12" md="6" offset-md="1" v-html="resHome.section_product.paragraph")
      div.product-tabs
        b-container
          b-row
            b-col.active-bar(
              cols="3"
              :offset="slide*3")
          b-row
            b-col.items(
                v-for="(item, itemIndex) in resHome.section_product.items"
                :key="itemIndex"
                cols="3"
                :class="{ active: itemIndex === slide }"
                @click="changeProduct(itemIndex)")
                b-img(:src="item.icon_sm" fluid)
                div {{ item.title }}
                
      VueSlickCarousel(
        ref="product-carousel"
        :arrows="false"
        :swipe="false"
        :dots="false")
        div(
          v-for="(item, itemIndex) in resHome.section_product.items"
          :key="itemIndex")
          b-container
            b-row
              b-col.bitmap(cols="12" md="6")
                b-img(:src="item.bitmap" fluid)
              b-col.description(cols="12" md="6")
                div
                  img(:src="item.icon_lg")
                  div.title(v-html="item.title")
                  div.paragraph(v-html="item.paragraph")
                  div.action-link
                    span {{ item.action_text }}&nbsp;
                    ArrowRight

    div.section-infographics(
      :style="{ backgroundImage: `url(${resHome.section_infographics.bg_image})` }")
      b-container
        b-row.paragraph
          b-col(
            cols="12"
            md="8"
            lg="6"
            v-html="resHome.section_infographics.paragraph")
        b-row
          b-col.item
            div {{ resHome.section_infographics.user_number }}
            div {{ resHome.section_infographics.user_label }}
          b-col.item
            div {{ resHome.section_infographics.merchant_number }}
            div {{ resHome.section_infographics.merchant_label }}
          b-col.item
            div {{ resHome.section_infographics.partner_number }}
            div {{ resHome.section_infographics.partner_label }}

    div.section-other-feature
      b-container
        b-row
          b-col(cols="12" md="6")
            b-img(:src="resHome.section_other_feature.feature_1.img" fluid)
          b-col.d-flex.justify-content-center.align-items-center(cols="12" md="5")
            div
              div.title(v-html="resHome.section_other_feature.feature_1.title")
              div.paragraph(v-html="resHome.section_other_feature.feature_1.paragraph")
        b-row.mt-5
          b-col(v-if="!$screen.md" cols="12")
            b-img(:src="resHome.section_other_feature.feature_2.img" fluid)
          b-col.d-flex.justify-content-center.align-items-center(cols="12" md="5" offset-md="1")
            div
              div.title(v-html="resHome.section_other_feature.feature_2.title")
              div.paragraph(v-html="resHome.section_other_feature.feature_2.paragraph")
          b-col(v-if="$screen.md" cols="6")
            b-img(:src="resHome.section_other_feature.feature_2.img" fluid)

    b-img.w-100(src="https://i.imgur.com/WaYRNgS.png")
    div.section-testimony
      b-container
        b-row
          b-col
            div.title(v-html="resHome.section_testimony.title")
        b-row
          b-col.d-flex
            div.items(
              v-for="(item, itemIndex) in resHome.section_testimony.items"
              :key="itemIndex")
              b-avatar(:src="item.avatar")
              div.paragraph(v-html="item.paragraph")
              div.name {{ item.name }}
              div.label {{ item.label }}
    
    div.section-contact-us-divider
    div.section-contact-us
      b-container
        b-row
          b-col(cols="12" md="6")
            b-img(fluid :src="resHome.section_contact_us.bitmap" :srcset="resHome.section_contact_us.bitmap_set")
          b-col.d-flex.justify-content-center.align-items-center(cols="12" md="6")
            div
              div.title(v-html="resHome.section_contact_us.title")
              div.paragraph(v-html="resHome.section_contact_us.paragraph")
              b-button {{ resHome.section_contact_us.button_text }}

    //- footer
    Footer(:footer="resFooter")

</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "nuxt-property-decorator";
// external
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// local
import ArrowRight from "@/assets/svg/arrow-right.vue";
import LineAnchor from "@/assets/svg/line-anchor.vue";

@Component({
  components: {
    VueSlickCarousel,
    ArrowRight,
    LineAnchor
  },

  data() {
    return {
      slide: 0
    };
  },

  async asyncData({ $axios }: Context) {
    const header = await $axios.$get("header");
    const resHeader = header[0];

    const footer = await $axios.$get("footer");
    const resFooter = footer[0];

    const home = await $axios.$get("home");
    const resHome = home[0];

    return { resHeader, resFooter, resHome };
  },

  methods: {
    merchantItems(md: Boolean, param: Array<object>) {
      if (!md) return param.slice(0, 3);
      else return param.slice(0, 12);
    },
    changeProduct(itemIndex: number) {
      (this.$refs["product-carousel"] as HTMLFormElement).goTo(itemIndex);
      // this.slide = itemIndex
    }
  }
})
export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  font-family: "Eina_01_Bold";
  font-size: 24px;
}
.paragraph {
  font-family: "SF_Pro_Text_Regular";
  font-size: 14px;
}

.hero-1 {
  img {
    width: 100%;
  }

  .content-wrapper {
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    text-align: center;
    color: #fff;

    .paragraph {
      margin-top: 1rem;
    }

    & > .row {
      flex-direction: column-reverse;

      .col-md-5:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }

    @media screen and (min-width: 992px) {
      text-align: left;

      .title {
        font-size: 48px;
      }
      .paragraph {
        font-size: 16px;
      }

      & > .row {
        flex-direction: row;
      }
    }
  }
}

.section-merchant {
  padding-top: 100px;

  .title {
    font-size: 18px;
  }
  .paragraph {
    padding-top: 16px;
  }

  .action-link {
    padding-top: 16px;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      text-align: right;
    }

    .text {
      cursor: pointer;

      font-family: "Eina_01_Bold";
      font-size: 16px;
      color: #5f33ba;
      text-align: left;

      @media screen and (min-width: 768px) {
        text-align: right;
      }
    }
  }

  .merchant-box {
    cursor: pointer;

    border: 1px solid #e5edef;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 24px;

    text-align: center;
    font-family: Eina_01_Bold;
    font-size: 16px;

    img {
      width: 70px;
      height: 70px;
    }
  }
}

.section-about {
  position: relative;
  margin-top: 100px;
  background-color: #f9fcfd;

  img.bg {
    width: 100%;
  }
  img.bitmap {
    width: 100%;

    @media screen and (min-width: 1440px) {
      width: 120%;
    }
  }

  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding-top: 50px;
    @media screen and (min-width: 1440px) {
      padding-top: 100px;
    }

    .title_1 {
      font-family: "Eina_01_Bold";
      font-size: 24px;

      @media screen and (min-width: 1024px) {
        font-size: 30px;
      }
      @media screen and (min-width: 1440px) {
        font-size: 40px;
      }
    }
    .paragraph_1 {
      padding-top: 5px;
      font-family: "SF_Pro_Text_Regular";
      font-size: 14px;

      @media screen and (min-width: 1024px) {
        padding-top: 10px;
        font-size: 16px;
      }
      @media screen and (min-width: 1440px) {
        padding-top: 20px;
        font-size: 16px;
      }
    }
    .title_2 {
      font-family: "Eina_01_Bold";
      font-size: 16px;

      margin-top: 60px;
      @media screen and (min-width: 1440px) {
        font-size: 24px;
        margin-top: 160px;
      }
    }
    .paragraph_2 {
      margin-top: 10px;
      font-family: "SF_Pro_Text_Regular";
      font-size: 14px;

      @media screen and (min-width: 1024px) {
        font-size: 16px;
      }
    }
    ul {
      padding: 0;
      margin-top: 24px;

      li {
        font-family: "Eina_01_Bold";
        font-size: 14px;
        margin-top: 10px;

        display: flex;

        img {
          margin-right: 10px;
        }

        @media screen and (min-width: 1024px) {
          font-size: 16px;
          margin-top: 16px;
        }
      }
    }
  }
}

.section-product {
  background-color: #f9fcfd;
  padding-top: 50px;

  .container {
    .title {
      @media screen and (min-width: 1024px) {
        font-size: 30px;
      }
      @media screen and (min-width: 1440px) {
        font-size: 40px;
      }
    }
    .paragraph {
      padding-top: 20px;

      @media screen and (min-width: 1024px) {
        font-size: 16px;
      }
    }

    .bitmap {
      img {
        width: 100%;
      }
    }
    .description {
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 425px) {
        margin-top: 40px;
      }

      .action-link {
        cursor: pointer;
        margin-top: 20px;

        font-family: "Eina_01_Bold";
        font-size: 16px;
        color: #5f33ba;
        text-align: left;
      }
    }
  }

  .product-tabs {
    margin-top: 80px;
    border-top: 1px solid #f0ebfa;
    border-bottom: 1px solid #f0ebfa;

    .active-bar {
      border-top: 1px solid #7f4fe3;
    }

    .items {
      cursor: pointer;
      padding: 28px 0;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 10px;
      }

      div {
        font-family: "Eina_01_Bold";
        font-size: 16px;
      }
    }
  }
}

.section-infographics {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  padding: 80px 0;
  color: #fff;
  text-align: center;

  .paragraph {
    justify-content: center;
    font-size: 16px;
    margin-bottom: 60px;
  }

  .item {
    font-family: "Eina_01_Bold";

    // number
    div:first-child {
      font-size: 48px;
      @media screen and (max-width: 768px) {
        font-size: 32px;
      }
    }
    // label
    div:last-child {
      font-size: 18px;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
}

.section-other-feature {
  padding-top: 150px;

  @media screen and (min-width: 1024) {
    .title {
      font-size: 40px;
    }
    .paragraph {
      font-size: 16px;
    }
  }
}

.section-testimony {
  background-color: #f6f7fa;
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: hidden;

  .title {
    font-size: 40px;
  }

  .items {
    background-color: #fff;
    border: 1px solid #e5edef;
    border-radius: 24px;

    margin-top: 20px;
    margin-right: 20px;
    padding: 20px;

    min-width: 322px;
    min-height: 302px;

    .paragraph {
      margin-top: 24px;
    }
    .name {
      margin-top: 24px;
      font-family: "Eina_01_Bold";
      font-size: 18px;
    }
    .label {
      margin-top: 10px;
      font-family: "SF_Pro_Text_Regular";
      font-size: 14px;
    }
  }
}

.section-contact-us-divider {
  height: 100px;
  margin-top: -50px;
  margin-bottom: 100px;

  -ms-transform: skewY(-3deg);
  transform: skewY(-3deg);

  background-color: #f6f7fa;
}
.section-contact-us {
  margin-top: -50px;
  background-color: #fff;

  button {
    background-color: #5f33ba;
    border-radius: 100px;
    margin-top: 10px;
  }
}
</style>
