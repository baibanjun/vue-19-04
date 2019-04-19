<template>
	<div>
		<h2>store page</h2>
		<div class="table_box">
			<p>双向绑定 data_1:<input type="text" v-model="data_1"></p>
			<table>
				
				<tr>
					<th>appName</th>
					<th>appNameWithVersion</th>
					<th>userName</th>
					<th>data_1</th>
					<th>data_2</th>
				</tr>
				<tr>
					<td>{{ appName }}</td>
					<td>{{appNameWithVersion}}</td>
					<td>{{ userName }}</td>
					<td>{{ data_1 }}</td>
					<td>{{ data_2 }}</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td>{{ firstLetter }}</td>
					<td></td>
					<td></td>
				</tr>
			</table>
		</div>
		<p><button @click="handleData">点击修改</button> | <button @click="addData">点击添加</button> | <button @click="handleAction">异步修改</button></p>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'store',
		computed:{
			...mapState({
				appName: state => state.appName,
				userName: state => state.user.userName,
				data_2: state => state.data_2
			}),
			...mapGetters([
				'appNameWithVersion',
				'firstLetter'
			]),
			data_1:{  //计算属性方式运行双向绑定，也可以单独用:value和@input运行双向绑定
				get(){
					return this.$store.state.data_1
				},
				set(value){ //以新值为参数
					this.set_data_1({new_data:value})
				}
			} ,
			//没有...mapState或者...mapGetters展开时用下面的方法
// 			appNameWithVersion(){
// 				return this.$store.getters.appNameWithVersion
// 			}
// 			appName(){
// 				return this.$store.state.appName
// 			},
// 			userName(){
// 				return this.$store.state.user.userName
// 			}
			
		},
		methods:{
			...mapMutations([
				'set_data_1',
				'set_user_name',
				'add_data'
			]),
			...mapActions([
				'updateAppName'
			]),
			handleData:function(){
				this.set_data_1({new_data:'new_data_1'})
				this.set_user_name({new_data:'Tom'})
				//在没有展开mapMutations方法时，用下面的方法
// 				this.$store.commit({
// 					type:'set_data_1',
// 					new_data:'new_data'
// 				})
// 				this.$store.commit({
// 					type:'set_user_name',
// 					new_data:'new_name'
// 				})		
			},
			addData:function(){
				this.add_data()  // 没有展开时 this.$store.commit('add_data')
			},
			handleAction:function(){
				this.updateAppName() //没有展开时 this.$store.dispatch('updateAppName',{})
			}
		}
	}
</script>

<style scoped>
	.table_box{
		text-align: center;
	}
	.table_box table{
		width: 60%;
		margin-left: 20%;
		border-spacing: 0;
	}
	.table_box table td{
		margin: 0;
		padding: 5px;
		border: 1px solid #ccc;
	}
	button{
		padding: 5px 10px;
	}
</style>
