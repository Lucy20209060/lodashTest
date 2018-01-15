import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import babelpolyfill from "babel-polyfill"

Vue.use(Vuex)
Vue.use(babelpolyfill)

// 数据部分
const state = {
	latitude: '',
	shopDetail:''
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})