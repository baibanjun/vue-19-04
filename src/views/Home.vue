<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<button @click="handleClick('back')">返回上一页</button>
		<button @click="handleClick('push')">跳转到</button>
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
		console.log(to.name)
		console.log(from.name)
		next()
	},
	beforeRouteLeave(to,form,next){ //页面即将离开的时候调用
		const leave = confirm('确定要离开此页面?')
		if(leave) next()
		else next(false)
	},
	methods:{
		handleClick(type){
				if(type === 'back') this.$router.go(-1);			
				if(type === 'push') {
					this.$router.push({
						name:'argu',
						params:{
							xxx:'lison'
						}
					})
				}
		}
	}
}
</script>
