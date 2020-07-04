import http from '@utils/httpconfig';

export function subscriptionsApi(params) {
  return http.get('/subscription/list', params);
}

export function subscriptionApi(slug, params) {
  return http.get(`/subscription/${slug}`, params);
}

export function subscriptionCreate(params) {
  return http.post('subscription/create', params);
}

export function subscriptionRemove(params) {
  return http.post('subscription/remove', params);
}
