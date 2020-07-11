import http from '@utils/httpconfig';

export function uploadApi(data) {
	return http.post('/upload', data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
}
