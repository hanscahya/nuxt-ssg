<template lang="pug">
  div.header(v-if="header")
    b-container
      b-row.p-3
        b-col.d-flex.justify-content-between
          //- left
          nuxt-link(to="/")
            img(:srcset="header.logo_set")

          //- center
          div.menus(v-if="$screen.md")
            div.item(
              v-for="(menu, menuIndex) in header.menus"
              :key="menuIndex")
              nuxt-link(:to="menu.link") {{ menu.text }}&nbsp;
              b-icon(v-if="menu.sub_menus" icon="chevron-down")
              div.sub-menus(v-if="menu.sub_menus")
                div.sub-item(
                  v-for="(menu, menuIndex) in menu.sub_menus"
                  :key="menuIndex") {{ menu.text }}

          //- right
          div.lang(v-if="$screen.md")
            span EN&nbsp;
            b-icon(icon="chevron-down")
          div.lang(v-else)
            b-icon(icon="list")

</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  props: ["header"]
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  height: 10%;
  width: 100%;
  z-index: 10;

  color: #fff;
  font-family: "Eina_01_Regular";
  font-size: 14px;
  letter-spacing: 0.6px;

  .menus {
    display: flex;

    .item {
      margin-left: 20px;
      margin-right: 20px;

      cursor: pointer;

      a {
        color: #fff;
        text-decoration: none;
      }
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
