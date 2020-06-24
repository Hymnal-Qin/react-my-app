import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// App state
import common from './common/state';
import user from './user/state';
import logger from 'redux-logger';
import { subscription, subscriptions, subscriptionsByUser } from './subscriptions/state';
import { crate, crates } from './crate/state';
import { product, products, productsRelated } from './product/state';

// App Reducer 合并状态
const appReducer = combineReducers({
  common,
  user,
  subscriptions,
  subscriptionsByUser,
  subscription,
  crate,
  crates,
  product,
  products,
  productsRelated
});

// Root Reducer
export const rootReducer = (state, action) => {
  // 如果重新进入 重置state为空
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = createStore(
  rootReducer,

  compose(applyMiddleware(thunk, logger)),
);
