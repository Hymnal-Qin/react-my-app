// Actions Types
import {
	getApi,
	getListApi,
	getRelatedListApi,
	productCreate,
	productRemove,
	productTypes,
	productUpdate,
} from './api';
import { MESSAGE_SHOW, messageHide, messageShow } from '@store/common/actions';

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
	return async dispatch => {

		const [error, product] = await getApi(productId);
		if (product) {
			return product
		}
		if (error) {
			dispatch(messageShow(error || 'There was some error fetching product types. Please try again.'));
		}
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

export function createOrUpdate(product) {

	return async dispatch => {

		dispatch(messageShow('Saving product, please wait...'));

		const productCreateOrUpdate = (product) => {
			if (product.id > 0) {
				return productUpdate(product);
			} else {
				delete product.id;
				return productCreate(product);
			}
		};
		const [error, data] = await productCreateOrUpdate(product);

		if (data) {
			dispatch(messageShow('Product saved successfully.'));
			return data;
		}
		if (error) {
			dispatch(messageShow('There was some error. Please try again.'));
		}

		window.setTimeout(() => {
			dispatch(messageHide());
		}, 5000);
		return null;
	};
}

export function create(product) {
	return async dispatch => {

		dispatch(messageShow('Saving product, please wait...'));

		const [error, result] = await productCreate(product);
		if (result) {
			dispatch(messageShow('Product saved successfully.'));
			return result;
		}

		if (error) {
			dispatch(messageShow('There was some error. Please try again.'));
		}

		window.setTimeout(() => {
			dispatch(messageHide());
		}, 5000);
	};
}

export function update(product) {
	return async dispatch => {

	};
}

export function remove(variables) {
	return async dispatch => {

		dispatch(messageShow('Deleting, please wait...'));

		const [error, product] = await productRemove(variables);
		if (product) {
			dispatch(messageShow('Product deleted successfully.'));
			return product;
		}

		if (error) {
			dispatch(messageShow('There was some error. Please try again.'));
			return null;
		}
	};
}

export function getTypes() {
	return async dispatch => {

		const [error, types] = await productTypes()
		if (types) return types
		if (error) {
			dispatch(messageShow('There was some error fetching product types. Please try again.'))
		}
		return null;
	};
}
