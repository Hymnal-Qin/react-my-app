// 公共事件 event
export const MESSAGE_SHOW = 'COMMON_MESSAGE_SHOW';
export const MESSAGE_HIDE = 'COMMON_MESSAGE_HIDE';

// 公共方法 dispatch
export function messageShow(message) {
	return { type: MESSAGE_SHOW, message };
}

export function messageHide() {
	return { type: MESSAGE_HIDE };
}
