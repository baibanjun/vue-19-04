<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<button @click="handleClick('back')">返回上一页</button>
		<button @click="handleClick('push')">跳转到</button>
		<button @click="handleClick('replace')">替换到</button>
		<p>{{food}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	},
	props:{
		food:{
			type:String,
			default:'aaa'
		}
	},
	beforeRouteEnter(to,from,next){ //组件内前置守卫
// 		console.log(to.name)
// 		console.log(from.name)
		next()
	},
	beforeRouteLeave(to,form,next){ //页面即将离开的时候调用，在编辑内容时经常用到
		const leave = confirm('确定要离开此页面?')
		// const leave = true
		if(leave) next()
		else next(false)
	},
	methods:{
		handleClick(type){
				if(type === 'back') this.$router.go(-1);//可用back()			
				if(type === 'push') {
					this.$router.push({ //在路由记录中添加一条，正常跳转
						name:'argu',
						params:{
							xxx:'lison'
						}
					})
				}
				if(type === 'replace') {
					this.$router.replace({ //将当前路由替换成新路由，回退将不再是当前路由
						name:'argu',
						params:{
							xxx:'change'
						}
					})
				}
		}
	}
}
</script>
