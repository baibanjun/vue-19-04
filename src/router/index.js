import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
	routes
})

const HAS_LOGINED = true

router.beforeEach((to,from,next) => {  //注册全局前置守卫，to表示即将跳转的路由对象，from表示当前将要离开的路由对象，next跳转函数
	//登录和未登录状态跳转控制
	if(to.name !== 'login'){
		if(HAS_LOGINED) next()
		else next({name:'login'})
	}
	else{
		if(HAS_LOGINED) next('/')
		else next()
	}
	
})

export default router
// export default new Router({
// 	// mode:'history',  //history路由模式 默认has
//   routes
// })
