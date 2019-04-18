export default store => {
	if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))  //store实例方法replaceState,用本地存储的state实例替换初始化的state实例
	store.subscribe((mutation,state) => {
		localStorage.state = JSON.stringify(state)
	})
}