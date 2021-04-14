<template lang="pug">
  div(v-if="resCareer")
    //- header
    Header(:header="resHeader")

    //- hero-1
    div.hero-1
      b-img.w-100(:src="resCareer.hero_1.bg_image_lg" :srcset="`${resCareer.hero_1.bg_image_sm} 576w, ${resCareer.hero_1.bg_image_lg} 1440w`" sizes="100vw")
      b-container.content-wrapper
        b-row
          b-col
            div.title(v-html="resCareer.hero_1.title")
            div.paragraph(v-html="resCareer.hero_1.paragraph")
          b-col
            b-img(fluid :src="resCareer.hero_1.bitmap" :src_set="resCareer.hero_1.bitmap_set")

    //- about
    b-container.section-about
      b-row
        b-col
          b-row
            b-col.anchor
              LineAnchor
              span &nbsp;{{ resCareer.section_about.anchor }}
          b-row
            b-col.title(v-html="resCareer.section_about.title")
      b-row.ml-0
        b-col
          b-row.heading-1
            b-col(v-html="resCareer.section_about.heading_1")
          b-row.content-1
            b-col(v-html="resCareer.section_about.content_1")
          b-row.heading-2
            b-col(v-html="resCareer.section_about.heading_2")
          b-row.content-2
            b-col(v-html="resCareer.section_about.content_2")
        b-col
          b-img(:src="resCareer.section_about.bitmap" :srcset="resCareer.section_about.bitmap_set")

    //- challenge
    div.section-challenge
      b-container
        b-row
          b-col
            b-row
              b-col.anchor
                LineAnchor
                span &nbsp;{{ resCareer.section_challenge.anchor }}
            b-row
              b-col.title(v-html="resCareer.section_challenge.title")
        b-row
          b-col.items
            ul
              li(v-for="(item, itemIndex) in resCareer.section_challenge.items" :key="itemIndex")
                b-img(src="../assets/icon/list-item.png")
                div
                  div.item-title {{ item.title }}
                  div.item-description {{ item.description }}
          b-col
            b-img(:src="resCareer.section_challenge.bitmap" :srcset="resCareer.section_challenge.bitmap_set")

    //- value
    b-img.w-100(src="../assets/images/divider-to-f9fcfd-lg.png")
    div.section-value
      b-container
        b-row
          b-col
            b-row
              b-col.anchor
                LineAnchor
                span &nbsp;{{ resCareer.section_value.anchor }}
            b-row
              b-col.title(v-html="resCareer.section_value.title")
            b-row.justify-content-center
              b-col.paragraph(cols="8" v-html="resCareer.section_value.paragraph")
      div.value-tabs
        div.items(
          v-for="(item, itemIndex) in resCareer.section_value.items"
          :key="itemIndex"
          :class="{ active: itemIndex === slide }"
          @click="changeValue(itemIndex)")
          b-img(fluid :src="item.icon_sm")
          span.item-title(v-html="item.title")
      VueSlickCarousel(
        ref="value-carousel"
        :arrows="false"
        :swipe="false"
        :dots="false")
        div.value-content(
          v-for="(item, itemIndex) in resCareer.section_value.items"
          :key="itemIndex")
          b-container
            b-row
              b-col
                b-img(fluid :src="item.bitmap")
              b-col
                b-img(:src="item.icon_lg")
                div.title(v-html="item.title")
                div.paragraph(v-html="item.paragraph")

    //- testimony
    div.section-testimony
      b-container
        b-row
          b-col(cols="7")
            div.title(v-html="resCareer.section_testimony.title")
        b-row
          b-col.d-flex
            div.items(
              v-for="(item, itemIndex) in resCareer.section_testimony.items"
              :key="itemIndex")
              b-avatar(:src="item.avatar")
              div.paragraph(v-html="item.paragraph")
              div.name {{ item.name }}
              div.label {{ item.label }}

    //- list jobs from greenhouse
    b-img.w-100(src="../assets/images/divider-to-f9fcfd-lg.png")
    div.greenhouse-jobs
      pre {{ jobs }}

    //- footer
    Footer(:footer="resFooter")

</template>

<script lang="javascript">
// external
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// local
import LineAnchor from "@/assets/svg/line-anchor.vue";

export default {
  components: {
    VueSlickCarousel,
    LineAnchor
  },

  data() {
    return {
      jobs: [],
      slide: 0
    };
  },

  async mounted () {
    console.log('hello');
    this.jobs = await this.$axios.$get('https://605416b645e4b30017292aed.mockapi.io/job')
  },

  async asyncData({ $axios }) {
    const resHeader = await $axios.$get("header").then(response => { return response[0] });
    const resFooter = await $axios.$get("footer").then(response => { return response[0] });
    const resCareer = await $axios.$get("career").then(response => { return response[0] });
    return { resHeader, resFooter, resCareer };
  },

  // async fetch() {
  //   this.jobs = await fetch('https://605416b645e4b30017292aed.mockapi.io/job')
  //     .then(res => res.json());
  // },

  methods: {
    changeValue(itemIndex) {
      this.$refs["value-carousel"].goTo(itemIndex);
      this.slide = itemIndex;
    }
  }
}
</script>

<!-- <script lang="ts">
  import { Context } from "@nuxt/types";
  import { Component, Vue } from "nuxt-property-decorator";
  // external
  import VueSlickCarousel from "vue-slick-carousel";
  import "vue-slick-carousel/dist/vue-slick-carousel.css";
  import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
  // local
  import LineAnchor from "@/assets/svg/line-anchor.vue";

  @Component({
    components: {
      VueSlickCarousel,
      LineAnchor
    },

    data() {
      return {
        slide: 0
      };
    },

    async asyncData({ $axios }: Context) {
      const resHeader = await $axios.$get("header");
      const resFooter = await $axios.$get("footer");
      const resCareer = await $axios.$get("content/career");
      return { resHeader, resFooter, resCareer };
    },

    methods: {
      changeValue(itemIndex) {
        (this.$refs["value-carousel"] as HTMLFormElement).goTo(itemIndex);
      }
    }
  })
  export default class CareerPage extends Vue {}
</script> -->

<style lang="scss" scoped>
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

    color: #fff;

    @media screen and (max-width: 576px) {
      & > .row {
        flex-direction: column-reverse;
      }
    }

    & > .row > .col:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .title {
    font-size: 40px;
    @media screen and (max-width: 576px) {
      margin-top: 24px;
      font-size: 30px;
    }
  }
  .paragraph {
    margin-top: 24px;
  }
}

.section-about {
  .title {
    font-size: 40px;
  }
  .paragraph {
    margin-top: 16px;
  }

  .heading-1,
  .heading-2 {
    font-family: "Eina_01_Bold";
    font-size: 20px;

    &::before {
      content: url("https://i.imgur.com/z3AXFws.png");
      // content: "|";
      // color: #5f33ba;
    }
  }
  .heading-2 {
    padding-top: 24px;
  }

  .content-1,
  .content-2 {
    margin-top: 6px;
    padding-left: 5px;

    font-family: "SF_Pro_Text_Regular";
    font-size: 14px;
  }

  & > .row:first-child {
    margin-top: 50px;
  }
  & > .row:last-child {
    margin-top: 50px;
    margin-bottom: 100px;

    & > .col:first-child {
      display: flex;
      flex-direction: column;
    }
  }
}

.section-challenge {
  background-color: #F6F7FA;

  .container {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .title {
    font-size: 40px;
  }

  .items {
    display: flex;
    align-items: center;

    ul {
      padding: 0;

      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 25px;

        img {
          object-fit: contain;
          margin-right: 15px;
          width: 35px;
        }

        & > div {
          width: 80%;
        }

        .item-title {
          font-family: "Eina_01_Bold";
          font-size: 14px;
        }
        .item-description {
          color: #444444;
          font-family: "SF_Pro_Text_Regular";
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
}

.section-value {
  background-color: #F9FCFD;
  padding-top: 50px;

  & > .container {
    .row {
      text-align: center;
    }

    .title {
      font-size: 40px;
    }
    .paragraph {
      margin-top: 16px;
    }
  }

  .value-tabs {
    margin-top: 40px;
    border-top: 1px solid #f0ebfa;
    border-bottom: 1px solid #f0ebfa;

    width: 100%;

    display: flex;
    justify-content: center;

    .items {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: 20px;
      margin-right: 20px;
      padding-top: 10px;
      padding-bottom: 10px;

      &.active {
        border-top: 1px solid #7f4fe3;
      }
    }

    .item-title {
      margin-left: 10px;
      font-family: "Eina_01_Bold";
      font-size: 14px;
    }
  }
  .value-content {
    padding-top: 80px;
    padding-bottom: 80px;
    
    .col:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        max-width: 70px;
      }
      .title {
        margin-top: 20px;
        font-size: 30px;
      }
      .paragraph {
        width: 80%;
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
}

.section-testimony {
  padding-top: 100px;
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

.greenhouse-jobs {
  background-color: #F9FCFD;
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
