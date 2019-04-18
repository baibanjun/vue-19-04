import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveLocal from './plugin/saveLocal'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: process.env.NODE_ENV === 'development', //严格模式，不规范或无意义操作会报错
	state,
	getters,
	mutations,
	actions,
	modules:{
		user
	},
	// plugins:[ saveLocal ]  //相关插件
})
