import axios from 'axios';

const http = {};

const instance = axios.create({
	timeout: 5000,
	baseURL: '/api/',
	headers: {
		'Accept-Language': 'zh-cn',
	},
	validateStatus(status) {
		switch (status) {
			case 400:
				break;
		}
		// 更改状态码 不怎么用
		return status >= 200 && status < 300;
	},
});

// 添加响应拦截器
instance.interceptors.response.use(
	(response) => {
		// 这里可以获取错误
		const status = response.status;
		if (status !== 200) {
			console.log(response);
			throw new Error(response.data.message);
		}
		// 对响应数据做点什么
		return response;
	},
	(error) => {
		// 404
		// 对响应错误做点什么
		if (error && error.response) {
			switch (error.response.status) {
				case 400:
					error.message = '请求错误';
					break;
				case 401:
					error.message = '未授权，请登录';
					break;
				case 403:
					error.message = '拒绝访问';
					break;
				case 404:
					error.message = `请求地址出错: ${error.response.config.url}`;
					break;
				case 408:
					error.message = '请求超时';
					break;
				case 500:
					error.message = '服务器内部错误';
					break;
				case 501:
					error.message = '服务未实现';
					break;
				case 502:
					error.message = '网关错误';
					break;
				case 503:
					error.message = '服务不可用';
					break;
				case 504:
					error.message = '网关超时';
					break;
				case 505:
					error.message = 'HTTP版本不受支持';
					break;
				default:
			}
		}
		console.log(error);
		return Promise.reject(error);
	},
);

/**
 * token 管理
 */
instance.interceptors.response.use(
	(response) => {
		//获取token
		const token = response.headers.Authorization || response.headers.authorization;
		if (response.status === 200 && token) {
			response.data.data = { ...response.data.data, token: token };
		}
		return response;
	},
	(error) => {
		//证书未验证通过
		if (error && error.response && error.response.status === 401) {
			//刷新token
			//if (sessionStorage.getItem('refreshToken')) {
			//	//有刷新需要的token 去刷新api刷新token
			//	const refreshToken = sessionStorage.getItem('refreshToken');
			//} else {
			//	//重新登录
			//}
		}
		return Promise.reject(error);
	},
);

//instance.interceptors.request.use(
//	(config) => {
//		if (sessionStorage.getItem('token')) {
//			const token = sessionStorage.getItem('token');
//			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//		}
//		return config;
//	},
//	(error) => Promise.reject(error),
//);

http.get = (url, options) =>
	new Promise((resolve, reject) => {
		instance
			.get(url, options)
			.then((response) => {
				if (response.data.code && response.data.code === 200) {
					resolve(response.data.data);
				} else {
					reject(response.data.message || response.data);
				}
			})
			.catch((e) => reject(e.message || e));
	})
		.then((data) => [null, data])
		.catch((e) => [e, undefined]);

http.post = (url, data, options) =>
	new Promise((resolve, reject) => {
		instance
			.post(url, data, options)
			.then((response) => {
				if (response.data.code && response.data.code === 200) {
					resolve(response.data.data);
				} else {
					// reject 方法会发送数据给catch
					reject(response.data.message || response.data);
				}
			})
			.catch((e) => reject(e.message || e));
	})
		.then((data) => [null, data])
		.catch((e) => [e, undefined]);

export default http;
