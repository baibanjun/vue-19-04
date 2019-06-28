import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
	constructor(baseUrl = baseURL) { //每个类必须有的方法  参数意思是baseUrl = baseUrl||baseURL
	    this.baseUrl = baseUrl
		this.queue = {}
	}
	getInsideConfig () {  //全局默认配置
		const config = {
			baseURL:this.baseUrl,
			header:{
				//
			}
		}
		return config
	}
	interceptors(instance){  //拦截器
		instance.interceptors.request.use(config =>{
			//添加全局的loading...
			//Spin.show()
			return config
		},error => {
			return Promise.reject(error)
		})
		instance.interceptors.response.use(res =>{
			console.log(res)
			return res
		},error => {
			return Promise.reject(error)
		})
	}
	request (options){ //
		const instance = axios.create()  //创建一个实例
		options = Object.assign(this.getInsideConfig(),options) //assign方法进行配置对象合并，相同字段覆盖，没有的新增。把传入的options放在后面，
		return instance(options)
	}
}
export default HttpRequest