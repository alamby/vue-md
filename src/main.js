// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import './assets/css/mdui.min.css'
import './assets/css/docs.css'
import './assets/css/highlight/github-gist.css'
import './assets/css/highlight/railscasts.css'
import './assets/js/jquery.min.js'
//import './assets/js/highlight.pack.js'
import './assets/js/mdui.min.js'
//import './assets/js/holder.min.js'
import './assets/js/docs.js'




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
