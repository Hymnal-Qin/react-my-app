const { createProxyMiddleware } = require('http-proxy-middleware');

// 配置代理 解决跨域问题
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/api', {
			target: process.env.REACT_APP_URL_API,
			changeOrigin: true,
			pathRewrite: {
				'^/api': '',
			},
		}),
	);
};
