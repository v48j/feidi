const state = {
  way: ''
}

const mutations = {
  changeWay(state, type) {
    state.way = type
  }
}


const payway = { state, mutations }

export default payway