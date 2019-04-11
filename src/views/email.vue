<template>
	<div>
		<input type="text" @input="handleClick" v-model="msg"/>
		{{ msg }}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'33'
			}
		},
		mounted(){
			var _self = this
			// _self.$bus.$emit('on-click',_self.msg)
		},
		methods:{
			handleClick:function(){
				var _self = this
				_self.$bus.$emit('on-click',_self.msg)
			}
		}	
	}
</script>

