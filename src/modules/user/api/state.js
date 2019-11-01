import {LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, SET_USER} from "./action";
import {isEmpty} from "../../helpers";

// Initial State
// 初始化用户状态
export const userInitialState = {
    error: null,
    isLoading: false,
    isAuthenticated: false,
    detail: null
}

// State
// 根据不同的事件 触发不同的状态改变
export default (state = userInitialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,//继承state
                isAuthenticated: !isEmpty(action.user),
                detail: action.user
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: action.isLoading
            }

        case LOGIN_RESPONSE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        case LOGOUT:
            return {
                ...state,
                error: null,
                isLoading: false,
                isAuthenticated: false,
                detail: null
            }

        default:
            return state
    }
}