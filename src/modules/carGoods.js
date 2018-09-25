const state = {
  selectAll: false,
  carGoods: [{
    id: "110",
    goodsName: "美国lung flute 正品 ”肺笛“ 正式进入中国",
    price: "2888",
    type: "肺笛单品",
    time: "2017.11.04 09:10:23",
    num: 1,
    sel: false
  }]
}

const mutations = {
  selGood(state, id) {
    state.carGoods.find(ele => ele.id === id).sel = !state.carGoods.find(ele => ele.id === id).sel
    state.selectAll = state.carGoods.every(ele => ele.sel === true)
  },
  selAll(state) {
    state.carGoods.map(ele => {
      ele.sel = state.selectAll
    })
  }
}

const getters = {
  getAllPrice(state) {
    let TotalPrice = 0
    TotalPrice = state.carGoods.map(ele => {
      if (ele.sel === true) {
        TotalPrice = TotalPrice + ele.num * ele.price
      }
      return TotalPrice
    })
    return TotalPrice[0].toFixed(2)
  }
}

const carGoods = { state, mutations, getters }

export default carGoods