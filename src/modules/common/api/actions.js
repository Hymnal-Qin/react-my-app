import axios from "axios/index";

export const MESSAGE_SHOW = "COMMON_MESSAGE_SHOW";
export const MESSAGE_HIDE = "COMMON_MESSAGE_HIDE";

export function messageShow(message) {
	return { type: MESSAGE_SHOW, message };
}

export function messageHide() {
	return { type: MESSAGE_HIDE };
}

export function upload(data) {
	return dispatch => {
		return axios.post("" + "/upload", data, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	};
}
