
//动态路由匹配
//router.js:
{
	path:'/argu/:xxx',
	component: () => import('@/views/argu.vue')
}
//argu.vue:
<div>
	{{ $route.params.xxx }} //$route当前路由对象 .params参数对象，包含自定义参数名xxx
</div>

//嵌套路由匹配
//router.js
{
	path:'/parent',
	component: () => import('@/views/parent.vue'),
	children: [
		{
			path:'child',   // 即匹配/parent/child
			component: () => import('@/views/child.vue')
		}
	]
}