// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 处理移动端单击300毫秒延迟问题
import fastclick from 'fastclick'
// ajax--axios
import axios from 'axios'
// swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 淘宝团队处理移动端分辨率自适应的解决方案插件
import 'lib-flexible'
// ElementUI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// mintUI框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 使用处理移动端单击300毫秒延迟问题
fastclick.attach(document.body)
// 使用ajax--axios
Vue.prototype.$axios = axios
// 使用swiper插件
Vue.use(VueAwesomeSwiper)
// 使用elementui
Vue.use(ElementUI)
// 使用mintUI
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
