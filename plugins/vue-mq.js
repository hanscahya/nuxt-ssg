import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: Infinity
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})
