import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VmeUI from '../packages/index'

Vue.use(VmeUI)
Vue.config.productionTip = false

// import './assets/fonts/iconfont.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
