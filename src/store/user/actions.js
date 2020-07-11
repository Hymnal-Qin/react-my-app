import axios from 'axios';
//import {query} from "gql-query-builder";
import cookie from 'js-cookie';
import { loginApi, registerApi, userGenders } from './api';
import { messageShow, messageHide } from '../common/actions';
import { store } from '../store';

// Actions Types
// 注册事件
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE';
export const SET_USER = 'AUTH/SET_USER';
export const LOGOUT = 'AUTH/LOGOUT';

export function initUser() {
	const token = window.localStorage.getItem('token');
	if (token && token !== 'undefined' && token !== '') {
		const user = JSON.parse(window.localStorage.getItem('user'));
		if (user) {
			// Dispatch action
			store.dispatch(setUser(token, user));

			loginSetUserLocalStorageAndCookie(token, user);
		}
	}
}

// 设置用户 token
export function setUser(token, user) {
	if (token) {
		//为所有的请求都带上token
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		//删除token
		delete axios.defaults.headers.common['Authorization'];
	}
	return { type: SET_USER, user };
}

export function login(userCredentials, isLoading = true) {
	return async (dispatch) => {
		//触发登录请求事件
		dispatch({
			type: LOGIN_REQUEST,
			isLoading,
		});
		dispatch(messageShow('Logging in, please wait...'));

		const [error, user] = await loginApi(userCredentials);

		// 正确返回数据
		if (user) {
			dispatch(messageHide());
			dispatch(setUser(user.token, user));
			loginSetUserLocalStorageAndCookie(user.token, user);
		}
		//触发登录请求结束事件
		dispatch({
			type: LOGIN_RESPONSE,
			error,
		});

		if (error) dispatch(messageShow(error));
		window.setTimeout(() => dispatch(messageHide()), 5000);
	};
}

export function register(userDetail) {
	return async (dispatch) => {
		dispatch(messageShow('Signing you up, please wait...'));

		const [error, user] = await registerApi(userDetail);

		// 正确返回数据
		if (user) {
			dispatch(messageHide());
		}
		if (error) dispatch(messageShow(error));
		window.setTimeout(() => dispatch(messageHide()), 5000);
	};
}

export function logout() {
	return (dispatch) => {
		logoutUnsetUserLocalStorageAndCookie();

		dispatch({
			type: LOGOUT,
		});
	};
}

// 设置令牌
// Set user token and info in localStorage and cookie
export function loginSetUserLocalStorageAndCookie(token, user) {
	// Update token
	window.localStorage.setItem('token', token);
	window.localStorage.setItem('user', JSON.stringify(user));

	// Set cookie for SSR
	cookie.set('auth', { token, user }, { path: '/' });
}

export function logoutUnsetUserLocalStorageAndCookie() {
	window.localStorage.removeItem('token');
	window.localStorage.removeItem('user');

	cookie.remove('auth');
}

// Get user gender
export function getGenders() {
	return async dispatch => {

		const [error, genders] = await userGenders()
		if (genders) return genders
		if (error) {
			dispatch(messageShow('There was some error fetching product types. Please try again.'))
		}
		return null
	};
}
