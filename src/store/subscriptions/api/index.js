import http from '../../../config/httpconfig';

export function subscriptionsApi(params) {
  return http.get('/subscriptions', params);
}

export function subscriptionApi(slug, params) {
  return http.get(`/subscription/${slug}`, params);
}

export function subscriptionCreate(params) {
  return http.post('subscriptionCreate', params);
}

export function subscriptionRemove(params) {
  return http.post('subscriptionRemove', params);
}
