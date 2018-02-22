// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import DhwaniViewPort from './components/dhwani-viewport'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#dhwani-viewport',
  router,
  components: { DhwaniViewPort },
  template: '<DhwaniViewPort/>'
})
