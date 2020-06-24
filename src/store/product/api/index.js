import http from '@utils/httpconfig';

export function getListApi(params) {
  return http.get('/products', params);
}

export function getApi(slug, params) {
  return http.get(`/product/${slug}`, params);
}

export function getRelatedListApi(slug, params) {
  return http.get(`/products/related/${slug}`, params);
}
