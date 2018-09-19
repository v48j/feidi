const state = {
  goods: [
    {
      id: "20180910",
      goodsName: "美国lung flute 正品 ”肺笛“ 正式进入中国",
      price: "2888",
      type: "肺笛单品",
      time: "2017.11.04 09:10:23",
      num: 1,
      goodsState: "pay"
    },
    {
      id: "20180911",
      goodsName: "美国lung flute 正品 ”肺笛“ 正式进入中国",
      price: "2888",
      type: "肺笛单品",
      time: "2017.12.04 09:10:23",
      num: 2,
      goodsState: "nopay"
    },
    {
      id: "20180912",
      goodsName: "美国lung flute 正品 ”肺笛“ 正式进入中国",
      price: "2888",
      type: "肺笛单品",
      time: "2017.12.04 09:10:23",
      num: 3,
      goodsState: "way"
    },
    {
      id: "20180913",
      goodsName: "美国lung flute 正品 ”肺笛“ 正式进入中国",
      price: "2888",
      type: "肺笛单品",
      time: "2017.12.04 09:10:23",
      num: 4,
      goodsState: "achieve"
    }
  ]
}

const mutations = {
  addGoods(state, id) {
    state.goods.find(ele => ele.id === id).num++
  },
  subGoods(state, id) {
    state.goods.find(ele => ele.id === id).num--
  }
}

const getters = {
  getShowGoods(state) {
    return function(goodsState) {
      if (goodsState === "all") {
        return state.goods
      }
      return state.goods.filter(ele => ele.goodsState === goodsState)
    }
  }
}

const goods = { state, mutations, getters }

export default goods
