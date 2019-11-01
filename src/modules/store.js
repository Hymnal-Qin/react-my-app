import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

// App state
import common from './common/api/state'
import user from './user/api/state'
import logger from "redux-logger";

// App Reducer 合并状态
const appReducer = combineReducers({
    common,
    user
})

// Root Reducer
export const rootReducer = (state, action) => {
    //如果重新进入 重置state为空
    if (action.type === 'RESET') {
        state = undefined
    }
    return appReducer(state, action)
}

export const store = createStore(
    rootReducer,

    compose(
        applyMiddleware(thunk, logger)
    )
)