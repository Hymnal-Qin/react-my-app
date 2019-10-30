import axios from "axios";
import { query } from "gql-query-builder";

// Actions Types
export const LOGIN_REQUEST = "AUTH/LOGIN_REQUEST";
export const LOGIN_RESPONSE = "AUTH/LOGIN_RESPONSE";
export const SET_USER = "AUTH/SET_USER";
export const LOGOUT = "AUTH/LOGOUT";

export function setUser(token, user) {
	if (token) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
	return { type: SET_USER, user };
}

export function login(userCredentials, isLoading = true) {
	return dispatch => {
		dispatch({
			type: LOGIN_REQUEST,
			isLoading
		});

		return axios
			.post(
				"",
				query({
					operation: "userLogin",
					variables: userCredentials,
					fields: ["user {name, email, role}", "token"]
				})
			)
			.then(response => {
				let error = "";

				if (response.data.errors && response.data.errors.length > 0) {
					error = response.data.errors[0].message;
				} else if (response.data.data.userLogin.token !== "") {
					const token = response.data.data.userLogin.token;
					const user = response.data.data.userLogin.user;

					dispatch(setUser(token, user));

					loginSetUserLocalStorageAndCookie(token, user);
				}

				dispatch({
					type: LOGIN_RESPONSE,
					error
				});
			})
			.catch(error => {
				dispatch({
					type: LOGIN_RESPONSE,
					error: "Please try again"
				});
			});
	};
}

export function loginSetUserLocalStorageAndCookie(token, user) {}
