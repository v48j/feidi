import Vue from "vue"
import App from "./components/App.vue"
import router from "./router/index.js"
import "./assets/global.css"
import "./assets/iconfont/iconfont.css"
import "./assets/icon2/iconfont.css"
import store from "./sotre/index"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app")
