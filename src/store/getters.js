const getters = {
	appNameWithVersion:(state) => { //state是当前实例同级
		// return state.appName + 'v2.0'
		return `${state.appName}v2.0`
	}
}
export default getters