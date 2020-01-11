// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Component from './components/component'
import '../node_modules/fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(VueFullPage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Component },
  render: h => h(Component)
})
