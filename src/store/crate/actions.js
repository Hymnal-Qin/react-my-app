// Actions Types
import { crateApi, cratesApi } from './api';

import cratesTest from '../../assets/crates';

export const CRATES_GET_LIST_REQUEST = 'CRATES/GET_LIST_REQUEST';
export const CRATES_GET_LIST_RESPONSE = 'CRATES/GET_LIST_RESPONSE';
export const CRATES_GET_LIST_FAILURE = 'CRATES/GET_LIST_FAILURE';

export const CRATES_GET_REQUEST = 'CRATES/GET_REQUEST';
export const CRATES_GET_RESPONSE = 'CRATES/GET_RESPONSE';
export const CRATES_GET_FAILURE = 'CRATES/GET_FAILURE';

// Get list of crates
export function getList(orderBy = 'DESC', isLoading = true) {
  return async dispatch => {
    dispatch({
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading,
    });

    const [error, crates] = await cratesApi(orderBy);

    if (crates || cratesTest.data) {
      dispatch({
        type: CRATES_GET_LIST_RESPONSE,
        error: null,
        isLoading: false,
        list: crates || cratesTest.data,
      });
    }

    if (error) {
      dispatch({
        type: CRATES_GET_LIST_FAILURE,
        error: 'Some error occurred. Please try again.',
        isLoading: false,
      });
    }
  };
}

// Get single crate
export function get(slug, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: CRATES_GET_REQUEST,
      isLoading,
    });

    const [error, crate] = await crateApi(slug);

    if (crate) {
      dispatch({
        type: CRATES_GET_RESPONSE,
        error: null,
        isLoading: false,
        list: crate,
      });
    }

    if (error) {
      dispatch({
        type: CRATES_GET_FAILURE,
        error: 'Some error occurred. Please try again.',
        isLoading: false,
      });
    }
  };
}

