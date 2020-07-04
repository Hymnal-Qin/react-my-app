// Actions Types
import { getApi, getListApi, getRelatedListApi } from './api';

export const PRODUCTS_GET_LIST_REQUEST = 'PRODUCTS/GET_LIST_REQUEST';
export const PRODUCTS_GET_LIST_RESPONSE = 'PRODUCTS/GET_LIST_RESPONSE';
export const PRODUCTS_GET_LIST_FAILURE = 'PRODUCTS/GET_LIST_FAILURE';
export const PRODUCTS_GET_LIST_RESET = 'PRODUCTS/GET_LIST_RESET';

export const PRODUCTS_GET_REQUEST = 'PRODUCTS/GET_REQUEST';
export const PRODUCTS_GET_RESPONSE = 'PRODUCTS/GET_RESPONSE';
export const PRODUCTS_GET_FAILURE = 'PRODUCTS/GET_FAILURE';

export const PRODUCTS_GET_RELATED_LIST_REQUEST = 'PRODUCTS/GET_RELATED_LIST_REQUEST';
export const PRODUCTS_GET_RELATED_LIST_RESPONSE = 'PRODUCTS/GET_RELATED_LIST_RESPONSE';
export const PRODUCTS_GET_RELATED_LIST_FAILURE = 'PRODUCTS/GET_RELATED_LIST_FAILURE';

// Get list of products
export function getList(isLoading = true, forceRefresh = false) {
  return async dispatch => {
    dispatch({
      type: PRODUCTS_GET_LIST_REQUEST,
      error: null,
      isLoading,
    });

    const [error, products] = await getListApi();
    if (products) {
      dispatch({
        type: PRODUCTS_GET_LIST_RESPONSE,
        isLoading: false,
        error: null,
        list: products,
      });
    }

    if (error) {
      dispatch({
        type: PRODUCTS_GET_LIST_FAILURE,
        error: 'Some error occurred. Please try again.',
        isLoading: false,
      });
    }
  };
}

// Get single product
export function get(slug, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: PRODUCTS_GET_REQUEST,
      isLoading,
    });
    const [error, product] = await getApi(slug);

    if (product) {
      dispatch({
        type: PRODUCTS_GET_RESPONSE,
        error: null,
        isLoading: false,
        item: product,
      });
    }

    if (error) {
     dispatch({
       type: PRODUCTS_GET_FAILURE,
       error: 'Some error occurred. Please try again.',
       isLoading: false,
     });
    }
  };
}

// Get single product by Id
export function getById(productId) {
  return dispatch => {

  };
}

// Get list of products related to a product
export function getRelatedList(productId, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: PRODUCTS_GET_RELATED_LIST_REQUEST,
      error: null,
      isLoading,
    });

    const [error, products] = await getRelatedListApi(productId);

    if (products) {
      dispatch({
        type: PRODUCTS_GET_RELATED_LIST_RESPONSE,
        error: null,
        isLoading: false,
        list: products,
        productId: productId,
      });
    }

    if (error) {
      dispatch({
        type: PRODUCTS_GET_RELATED_LIST_FAILURE,
        error: 'Some error occurred. Please try again.',
        isLoading: false,
      });
    }
  };
}
