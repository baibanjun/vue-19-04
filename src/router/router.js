import Home from '@/views/Home.vue'

export default [
	{
		path: '/',
		name: 'home', //路由名,js调用时用
		alias:'/home_page', //别名，访问时用
		component: Home,
		props:route => ({
			food:route.query.food //路由参数传值，即 ?food=123
		}),
		beforeEnter:(to,from,next) => {  //路由独享前置守卫
			if(from.name === 'login') alert('这是从登录页来的')
			next() //必须执行next()才能跳转
		},
		meta:{   //配置路由元数据
			title:'Home',
			need_login:true  //可以在这里进行登录权限配置
		}
		
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
		props:{
			food:'banana' //对象模式传值
		},
		meta:{
			title:'关于'
		}
	},
	{
		path:'/argu/:xxx',
		name:'argu',
		component: () => import('@/views/argu.vue'),
		props:true  //布尔模式传值，当true时需匹配xxx属性值，否则路由404
	},
	//嵌套路由
	{
		path:'/parent',
		component: () => import('@/views/parent.vue'),
		children: [
			{
				path:'child',
				component: () => import('@/views/child.vue')
			},
			{
				path:'child_1',
				component: () => import('@/views/child_1.vue')
			}
		]
	},
	//路由，命名视图
	{
		path:'/named_view',
		components: { //这里是components
			default:() => import('@/views/child.vue'),
			email:() => import('@/views/email.vue'),
			tel:() => import('@/views/tel.vue')
		}
	},
	//重定向路由
	{
		path:'/main',
		redirect:'/' //或者{name:'home'}  ,或者to => {return '/'},或者to => {return {name:'home'}} ,可简写to => '/'
	},
	{
		path:'/login',
		name:'login',
		component: () => import('@/views/login.vue')
	},
	{
		path:'/store',
		component: () => import('@/views/store.vue')
	},
	{
		path:'/email',
		component: () => import('@/views/email.vue')
	},
	//history找不到时404
	{
		path:'*',
		component: () => import('@/views/error_404.vue')
	}
	
	
]