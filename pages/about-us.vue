<template lang="pug">
  div(v-if="resAbout")
    //- header
    Header(:header="resHeader")

    //- hero-1
    div.hero-1
      b-img.w-100(:src="resAbout.hero_1.bg_image_lg" :srcset="`${resAbout.hero_1.bg_image_sm} 576w, ${resAbout.hero_1.bg_image_lg} 1440w`" sizes="100vw")
      b-container.content-wrapper
        b-row
          b-col
            div.title(v-html="resAbout.hero_1.title")
            div.paragraph(v-html="resAbout.hero_1.paragraph")
            b-button(pill size="sm") {{ resAbout.hero_1.button_text }}
          b-col
            b-img(fluid :src="resAbout.hero_1.bitmap" :src_set="resAbout.hero_1.bitmap_set")


    //- vision and mision
    b-container.section-vision-mision
      b-row
        b-col
          b-row
            b-col.anchor
              LineAnchor
              span &nbsp;{{ resAbout.section_vision_mision.anchor }}
          b-row
            b-col.title(v-html="resAbout.section_vision_mision.title")
          b-row.justify-content-center
            b-col.paragraph(cols="8" v-html="resAbout.section_vision_mision.paragraph")
      b-row
        b-col
          b-row.heading-1
            b-col(v-html="resAbout.section_vision_mision.heading_1")
          b-row.content-1
            b-col(v-html="resAbout.section_vision_mision.content_1")
          b-row.heading-2
            b-col(v-html="resAbout.section_vision_mision.heading_2")
          b-row.content-2
            b-col(v-html="resAbout.section_vision_mision.content_2")
        b-col
          b-img(:src="resAbout.section_vision_mision.bitmap" :srcset="resAbout.section_vision_mision.bitmap_set")

    //- timeline
    div.section-timeline-divider
    div.section-timeline
      b-container.py-5
        b-row
          b-col
            b-row
              b-col.anchor
                LineAnchor
                span &nbsp;{{ resAbout.section_timeline.anchor }}
            b-row
              b-col.title(cols="6" v-html="resAbout.section_timeline.title")
        b-row
          b-col
            b-row.item(v-for="(item, itemIndex) in resAbout.section_timeline.items" :key="itemIndex")
              b-col(cols="1")
                b-img(src="https://i.imgur.com/novOgMc.png")
              b-col.title(cols="2" v-html="item.text")
              b-col.paragraph(cols="8" v-html="item.description")
          b-col
            b-img(fluid :src="resAbout.section_timeline.bitmap" :srcset="resAbout.section_timeline.bitmap_set")

    //- service
    b-container.section-service
      b-row
        b-col
          b-row
            b-col.anchor
              LineAnchor
              span &nbsp;{{ resAbout.section_service.anchor }}
          b-row
            b-col.title( v-html="resAbout.section_service.title")
          b-row
            b-col.paragraph( v-html="resAbout.section_service.paragraph")
          b-row
            b-col.list-item(cols="6" v-for="(li, liIndex) in resAbout.section_service.list_items" :key="liIndex" v-html="li")
        b-col.items
          b-row
            b-col(cols="6" v-for="(item, itemIndex) in resAbout.section_service.items" :key="itemIndex")
              div.service-box
                div
                  b-img(fluid :src="item.icon" :srcset="item.icon_set")
                  div.text(v-html="item.text")
                  div.description(v-html="item.description")
    
    //- join
    b-container.section-join-us
      b-row
        b-col.title(v-html="resAbout.section_join_us.title")
      b-row
        b-col.paragraph(v-html="resAbout.section_join_us.paragraph")
      Ecosystem.mt-5

    //- mitra
    b-container.section-partners
      b-row
        b-col
          b-row
            b-col.anchor
              LineAnchor
              span &nbsp;{{ resAbout.section_partners_1.anchor }}
          b-row
            b-col.title( v-html="resAbout.section_partners_1.title")
            b-col.paragraph.pt-4( v-html="resAbout.section_partners_1.paragraph")
      b-row.mt-3
        b-col
          b-img.main(:srcset="resAbout.section_partners_1.image_sets[0]")
      b-row.mt-4
        b-col
          b-row
            b-col.anchor
              LineAnchor
              span &nbsp;{{ resAbout.section_partners_2.anchor }}
          b-row
            b-col.title(cols="6" v-html="resAbout.section_partners_2.title")
          b-row
            b-col.paragraph(cols="6" v-html="resAbout.section_partners_2.paragraph")
            b-col.d-flex.justify-content-end
              b-button(pill size="sm") {{ resAbout.section_partners_2.button_text }}
      b-row.mt-3
        b-col(cols="4" v-for="(image_set, index) in resAbout.section_partners_2.image_sets" :key="index")
          b-img.thumbnail(fluid :srcset="image_set")

    //- footer
    Footer(:footer="resFooter")

</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "nuxt-property-decorator";
// external

// local
import LineAnchor from "@/assets/svg/line-anchor.vue";
import Ecosystem from "@/components/ecosystem.vue";

@Component({
  components: {
    LineAnchor,
    Ecosystem
  },

  data() {
    return {};
  },

  async asyncData({ $axios }: Context) {
    const header = await $axios.$get("header");
    const resHeader = header[0];

    const footer = await $axios.$get("footer");
    const resFooter = footer[0];

    const about = await $axios.$get("about");
    const resAbout = about[0];

    return { resHeader, resFooter, resAbout };
  },

  methods: {}
})
export default class AboutPage extends Vue {}
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

    & > .row > .col:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .title {
    font-size: 40px;
  }
  .paragraph {
    margin-top: 24px;
    width: 75%;
  }
  button {
    width: 150px;
    margin-top: 24px;
    padding: 10px;

    font-size: 14px;
    font-weight: 900;

    background-color: #fff;
    color: #5f33ba;
  }
}

.section-vision-mision {
  & > .row:first-child {
    text-align: center;
    margin-top: 50px;

    .title {
      font-size: 40px;
    }
    .paragraph {
      margin-top: 16px;
    }
  }
  & > .row:last-child {
    margin-top: 50px;
    margin-bottom: 100px;

    & > .col:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
    .content-1,
    .content-2 {
      margin-top: 6px;
      padding-left: 5px;

      font-family: "SF_Pro_Text_Regular";
      font-size: 14px;
    }

    .heading-2 {
      padding-top: 24px;
    }
  }
}

.section-timeline-divider {
  height: 100px;
  margin-bottom: 10px;

  -ms-transform: skewY(-3deg);
  transform: skewY(-3deg);

  background-color: #f6f7fa;
}
.section-timeline {
  margin-top: -60px;
  padding-top: 50px;

  background-color: #f6f7fa;

  & > .container > .row:first-child {
    .title {
      font-size: 40px;
    }
  }

  & > .container > .row:last-child {
    margin-top: 60px;

    .item {
      padding-bottom: 30px;
    }
    .title {
      font-size: 16px;
    }
    .paragraph {
      color: #444444;
    }
  }
}

.section-service {
  padding-top: 100px;
  padding-bottom: 100px;

  .title {
    font-size: 40px;
  }
  .paragraph {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .list-item {
    display: flex;
    align-items: flex-start;

    &::before {
      content: url("https://i.imgur.com/FK6WYxL.png");
      padding-right: 10px;
    }
  }

  .items .col-6 > .service-box {
    display: flex;
    justify-content: center;
    align-items: center;

    height: calc(100% - 2rem);
    margin: 1rem;
    padding: 1rem;

    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0px 10px 20px rgba(72, 38, 140, 0.05);

    .text {
      font-family: "Eina_01_Bold";
      font-weight: 700;
      font-size: 20px;
    }
    .description {
      margin-top: 24px;

      font-family: "SF_Pro_Text_Regular";
      font-size: 14px;
    }
  }
}

.section-join-us {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;

  .title {
    font-size: 40px;
  }
}

.section-partners {
  .title {
    font-size: 40px;
  }

  img.main {
    width: 100%;
    max-height: 80%;
    object-fit: cover;
    border-radius: 20px;
  }
  img.thumbnail {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
  }

  button {
    width: 150px;
    margin-bottom: 24px;
    padding: 5px;

    font-size: 14px;
    font-weight: 900;

    background-color: #5f33ba;
    color: #fff;
  }
}
</style>
