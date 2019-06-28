import axios from './index'
export const getInfo = () => {
	return axios.request({
		url:'/getInfo',
		method:'get'
	})
}