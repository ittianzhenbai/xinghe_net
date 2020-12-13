import 'babel-polyfill';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./common/css/react.styl";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/dist/css/swiper.css';
// import 'bootstrap/dist/js/bootstrap.min'
// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'
import 'wowjs/css/libs/animate.css'//引入wow.js
import element from './element/element.js'
import VueAnimateNumber from 'vue-animate-number'//数字加载动效
import VueLazyload from 'vue-lazyload'//引入懒加载组件
import VueWaypoint from 'vue-waypoint' //滚动检测组件
Vue.use(VueLazyload, {
  loading: require('../src/assets/1.png'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('../src/assets/1.png')  //加载失败图片
});
Vue.use(VueAnimateNumber)//引用数字动态变化 组件 
Vue.use(VueAxios,axios);
Vue.use(VueWaypoint)//调用滚动检测组件
axios.defaults.baseURL = process.env.VUE_APP_API;
Vue.prototype.$axios = axios;
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
