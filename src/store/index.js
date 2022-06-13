import {createStore} from 'vuex'

export default createStore({
    state: {

        currentProduct: {}
    },
    mutations: {
      UPDATE_CURRENT_PRODUCT(state, payload) {
        state.currentProduct = payload
      }
    },
    actions: {
      setCurrentProduct(context, payload){
        let currentProduct = context.state.currentProduct
        currentProduct = payload
        context.commit('UPDATE_CURRENT_PRODUCT', currentProduct)
      }
    },
    getters: {}
})