import http from '@utils/httpconfig';

export function cratesApi(params) {
  return http.get('/crate/list', params);
}

export function crateApi(slug, params) {
  return http.get(`/crate/${slug}`, params);
}
