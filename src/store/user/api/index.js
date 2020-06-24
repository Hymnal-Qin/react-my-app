import http from '@utils/httpconfig';
// 登录接口
export function loginApi(params) {
	return http.post('user/login', params);
}

export function registerApi(params) {
	return http.post('user/register', params);
}
