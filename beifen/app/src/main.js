// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import { ToastPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import 'styles/index.scss';
import App from './App'
import 'lib-flexible'
import VueClipboards from 'vue-clipboards';
// var keythereum = require('utils/keythereum');
global.keythereum = require('keythereum');
var Web3 = require('web3');

Vue.use(VueRouter)
Vue.use(VueClipboards)

Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)

sync(store, router)

if (typeof web3 !== 'undefined') {
  global.web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  global.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/fAwfCBb0kqGbPPGyhhz8"));
}
FastClick.attach(document.body)

Vue.config.productionTip = false

store.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
router.beforeEach((to, from, next) => {
  next();
  store.commit('updateLoadingStatus', { isLoading: true })
})
router.afterEach(function (to) {
  setTimeout(function () {
    store.commit('updateLoadingStatus', { isLoading: false })
  }, 500)
})

// 全局导航钩子
// const whiteList = ['/index'];// 不重定向白名单
// router.beforeEach((to, from, next) => {
//    console.log(store.getters.info)
//   if (store.getters.info == null || store.getters.info == undefined) { 
     
//     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//         next()
//       } else {
//         next('/index'); // 否则全部重定向到登录页
//       }
//   } else {
//     if (to.path === '/index' || to.path === '/') { 
//       next({ path: '/user' }); 
//     } else {
//       next(); 
//     }
//   }
// })
// router.beforeEach((to, from, next) => {
//   console.log(store.getters.info)
//   next()
// })
// router.afterEach(function (to) {
//   console.log(to.path)
// })
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
