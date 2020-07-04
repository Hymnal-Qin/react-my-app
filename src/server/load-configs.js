// Imports
import path from 'path';
import Express from 'express';
import webpack from 'webpack';
import config from '../../webpack.config.js';
//自动更新编译代码中间件
import devMiddleWare from 'webpack-dev-middleware';
//自动刷新浏览器中间件
import hotMiddleWare from 'webpack-hot-middleware';
// App Imports


export default function(app) {
	console.info('SETUP - Load configs..');
	// const compiler = webpack(config);
	// app.use(devMiddleWare(compiler, {
	// 	publicPath: config.output.path
	// }))
	// app.use(hotMiddleWare(compiler))
}
