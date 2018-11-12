
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//分模块化处理，引入购物车模块(专门处理购物车逻辑的模块)
import cart from './cart'
const store = new Vuex.Store({
    modules:{
        cart
    }
})  
export default store