import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
	constructor(base = baseURL) {
	    this.baseUrl = baseURL
		this.queue = {}
	}
	getInsideConfig () {
		const config = {
			
		}
		return config
	}
	interceptors(instance){
		instance.interceptors.request.use(config =>{
			//添加全局的loading...
			//Spin.show()
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
	request (options){
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(),options)
		return instance(options)
	}
}
export default HttpRequest