<template>
	<div>
		<p>内容显示:{{ message }}</p>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				message:''
			}
		},
		mounted(){ //在实例创建后监听click-1事件
			this.$bus.$on('click-1',mes =>{ //监听 自定义事件名 click-1
				this.message = mes
			})
		}
		
	}
</script>

