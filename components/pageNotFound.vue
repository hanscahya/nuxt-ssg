<template lang="pug">
  div.wrapper
    b-container(v-if="res404.data")
      b-row.justify-content-center
        b-col(cols="6")
          b-img(fluid :src="res404.data[0].bitmap" :srcset="res404.data[0].bitmap_set")
      b-row.mt-3
        b-col.title(v-html="res404.data[0].title")
      b-row.mt-3.justify-content-center
        b-col.paragraph(cols="6" v-html="res404.data[0].paragraph")
      b-row.mt-3
        b-col
          b-btn(pill size="sm" to="/") {{ res404.data[0].button_text }}

</template>

<script>
export default {
  data() {
    return {
      res404: []
    };
  },
  async mounted() {
    this.res404 = await this.$axios.get("404");
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}
.col {
  text-align: center;
}
.title {
  font-size: 30px;
}
.paragraph {
  text-align: center;
}
.btn {
  padding: 10px;

  font-size: 14px;

  background-color: #5f33ba;
  color: #fff;
}
</style>
