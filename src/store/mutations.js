import vue from 'vue'
const mutation = {
	set_data_1(state,params){ //state为实例对象，params为传过来的参数，单值或对象形式
		state.data_1 = params.new_data
	},
	set_app_name(state,params){ //state为实例对象，params为传过来的参数，单值或对象形式
		state.appName = params.new_data
	},
	add_data(state){
		vue.set(state,'data_2','old_2') //调用vue的set方法，第二个参数为字段名，第三个为字段值
	}
}

export default mutation