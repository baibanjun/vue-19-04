const state = {
	userName:'peter'
}
const getters = {
	firstLetter:(state) => {
		return state.userName.substr(0,1)
	}
}
const mutations = {
	set_user_name:(state,params) => {   //可以使用set_user_name(){}
		state.userName = params.new_data
	}
}
const actions = {
	xxx_action({ commit,state,rootState,dispatch,getters,rootGetters }){
		dispatch('xxx',{}) //当前实例继续执行actions
	},
	xxx(){
		
	}
}

export default {
	// namespaces:true,  //开启命名空间后，user相对独立、密闭。...mapState等方法需要定义
	state,
	getters,
	mutations,
	actions
	// modules:{xxx} //可在模块中继续添加模块
}