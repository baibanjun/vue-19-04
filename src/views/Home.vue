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
