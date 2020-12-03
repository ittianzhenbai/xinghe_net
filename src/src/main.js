import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./common/css/react.styl";
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/element.js'
import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)
Vue.use(VueAxios,axios);
Vue.prototype.$axios = axios;
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
