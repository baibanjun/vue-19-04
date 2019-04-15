<template>
	<div>
		<h2>store page</h2>
		<p>appName:{{ appName }} appNameWithVersion:{{appNameWithVersion}}</p>
		<p>{{ userName }}</p>
	</div>
</template>

<script>
	import {mapState,mapGetters} from 'vuex'
	export default{
		name:'store',
		computed:{
			...mapState({
				appName: state => state.appName,
				userName: state => state.user.userName
			}),
			...mapGetters('user',[
				'firstLetter'
			]),
			appNameWithVersion(){
				return this.$store.getters.appNameWithVersion
			},
			firstLetter(){
				return this.$store.getters.appNameWithVersion
			}
// 			appName(){
// 				return this.$store.state.appName
// 			},
// 			userName(){
// 				return this.$store.state.user.userName
// 			}
			
		}
	}
</script>

<style>
	
</style>
