import Vuex from "vuex"
import Vue from "vue"
import goods from "../modules/goods"
import payway from "../modules/payway";
import carGoods from "../modules/carGoods";
import newOrder from "../modules/newOrder";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    goods, payway, carGoods, newOrder
  }
})

export default store
