// 公共事件 event
import { uploadApi } from './api';

export const MESSAGE_SHOW = 'COMMON_MESSAGE_SHOW';
export const MESSAGE_HIDE = 'COMMON_MESSAGE_HIDE';

// 公共方法 dispatch
export function messageShow(message) {
	return { type: MESSAGE_SHOW, message };
}

export function messageHide() {
	return { type: MESSAGE_HIDE };
}

export function upload(data) {

	return async dispatch => {

		const [error, file] = await uploadApi(data)
		if (file) {
			dispatch(messageShow('File uploaded successfully.'))
			return file
		}

		if (error) {
			dispatch(messageShow('There was some error. Please try again.'))
		}

		window.setTimeout(() => {
			dispatch(messageHide())
		}, 5000)
		return null
	}
}
