import http from '@utils/httpconfig';

export function getListApi(params) {
  return http.get('/product/list', params);
}

export function getApi(slug, params) {
  return http.get(`/product/${slug}`, params);
}

export function getRelatedListApi(slug, params) {
  return http.get(`/product/${slug}/related/list`, params);
}

export function productCreate(params) {
	return http.post('/product/create', params);
}

export function productUpdate(params) {
	return http.post('/product/update', params);
}

export function productRemove(params) {
	return http.post('/product/remove', params);
}

export function productTypes(params) {
	return http.get('/product/types', params);
}


