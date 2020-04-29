import axios from "axios/index";
import {routeApi} from "@/routes";

// 公共事件
export const MESSAGE_SHOW = "COMMON_MESSAGE_SHOW";
export const MESSAGE_HIDE = "COMMON_MESSAGE_HIDE";

// 公共方法
export function messageShow(message) {
    return {type: MESSAGE_SHOW, message};
}

export function messageHide() {
    return {type: MESSAGE_HIDE};
}

//
export function upload(data) {
    return dispatch => {
        return axios.post(routeApi + '/upload', data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    };
}
