<template>
	<div>
		<input type="text" @input="handleClick" v-model="msg"/>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:''
			}
		},
		mounted(){
			var _self = this
			// _self.$bus.$emit('on-click',_self.msg)
		},
		methods:{
			handleClick:function(){
				var _self = this
				_self.$bus.$emit('click-1',_self.msg) //在$bus实例上触发click-1事件，在tel.vue中监听该事件名，事件名自定义。
			}
		}	
	}
</script>

