const state = {
	userName:'peter'
}
const getters = {
	firstLetter:() => {
		return state.userName.substr(0,1)
	}
}
const mutations = {
	// userName:'用户名'
}
const actions = {
	
}

export default {
	state,
	getters,
	mutations,
	actions
}