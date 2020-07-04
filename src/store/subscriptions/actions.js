import { subscriptionApi, subscriptionCreate, subscriptionRemove, subscriptionsApi } from './api';
import product from '@assets/subscriptions.json';
import { MESSAGE_SHOW, messageHide, messageShow } from '../common/actions';

export const SUBSCRIPTIONS_GET_LIST_REQUEST = 'SUBSCRIPTIONS/GET_LIST_REQUEST';
export const SUBSCRIPTIONS_GET_LIST_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_RESPONSE';
export const SUBSCRIPTIONS_GET_LIST_FAILURE = 'SUBSCRIPTIONS/GET_LIST_FAILURE';

export const SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST = 'SUBSCRIPTIONS/GET_LIST_BY_USER_REQUEST';
export const SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_RESPONSE';
export const SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_FAILURE';

export const SUBSCRIPTIONS_GET_REQUEST = 'SUBSCRIPTIONS/GET_REQUEST';
export const SUBSCRIPTIONS_GET_RESPONSE = 'SUBSCRIPTIONS/GET_RESPONSE';
export const SUBSCRIPTIONS_GET_FAILURE = 'SUBSCRIPTIONS/GET_FAILURE';


// Actions

// Get list of subscriptions by admin
export function getList(isLoading = true) {
  return async dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_LIST_REQUEST,
      error: null,
      isLoading,
    });

    const [error, subscriptions] = await subscriptionsApi(null);

    if (subscriptions) {
      dispatch({
        type: SUBSCRIPTIONS_GET_LIST_RESPONSE,
        error: null,
        isLoading: false,
        list: subscriptions,
      });
    }

    if (error) {
      dispatch({
        type: SUBSCRIPTIONS_GET_LIST_FAILURE,
        error: 'Some error occurred. Please try again.',
        isLoading: false,
      });
    }
  };
}

// Get list of subscriptions by user
export function getListByUser(isLoading = true) {
  return async dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
      error: null,
      isLoading,
    });

    const [error, subscriptions] = await subscriptionsApi();

    if (subscriptions) {
      dispatch({
        type: SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
        error: null,
        isLoading: false,
        list: subscriptions,
      });
    }

    if (error) {
      dispatch({
        type: SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
        error: 'Some error occurred. Please try again.',
        isLoading: false,
      });
    }

  };
}

// Get single subscription
export function get(slug, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_REQUEST,
      isLoading,
    });

    const [error, subscription] = await subscriptionApi(slug);

    if (subscription) {
      dispatch({
        type: SUBSCRIPTIONS_GET_RESPONSE,
        error: null,
        isLoading: false,
        item: subscription,
      });
    }

    if (error) {
      dispatch({
        type: SUBSCRIPTIONS_GET_FAILURE,
        error: 'Some error occurred. Please try again.',
        isLoading: false,
      });
    }
  };
}

// Create subscription Admin
export function create(variables) {
  return async dispatch => {
    dispatch(messageShow('Subscribing, please wait...'));

    const [error, data] = await subscriptionCreate(variables);
    if (data) {
      dispatch(messageShow('Subscribed successfully.'));
    }
    if (error) {
      dispatch(messageShow(error));
    }

    window.setTimeout(() => dispatch(messageHide()), 5000);
    return data;
  };
}

// remove subscription
export function remove(variables) {
  return async dispatch => {

    dispatch(messageShow('Subscribing, please wait...'));

    const [error, data] = await subscriptionRemove(variables);
    if (data) {
      dispatch(messageShow('Unsubscribed successfully.'));
    }
    if (error) {
      dispatch(messageShow(error));
    }

    window.setTimeout(() => dispatch(messageHide()), 5000);
    return data;
  };
}
