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

    //- footer
    Footer(:footer="resFooter")

</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "nuxt-property-decorator";
// external

// local

@Component({
  components: {},

  data() {
    return {};
  },

  async asyncData({ $axios }: Context) {
    const header = await $axios.$get("header");
    const resHeader = header[0];

    const footer = await $axios.$get("footer");
    const resFooter = footer[0];

    const career = await $axios.$get("career");
    const resCareer = career[0];

    return { resHeader, resFooter, resCareer };
  },

  methods: {}
})
export default class CareerPage extends Vue {}
</script>

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
</style>
