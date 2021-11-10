import Vue from 'vue'
import Vuex from 'vuex'
import { carproducts } from './modules/carproducts'
import { products } from './modules/products'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerCarProduct:false,
  },
  getters:{
    
    getDraweCarProduct: state=>state.drawerCarProduct,
  },
  mutations: {
    handleDrawerCar(state,payload){
      state.drawerCarProduct = payload;
    },
  },
  actions: {

  },
  modules: {
    products,
    carproducts
  },
  plugins:[
    new VuexPersistence({
      storage: window.localStorage
    }).plugin    
  ]
  
})
