import http from '../../../config/httpconfig';

export function cratesApi(params) {
  return http.get('/crates', params);
}

export function crateApi(slug, params) {
  return http.get(`/crate/${slug}`, params);
}
