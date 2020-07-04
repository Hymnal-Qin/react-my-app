const { override, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

const resolveApp = (resolvePath) => path.join(__dirname, resolvePath);
// 别名
const alias = {
	"@": resolveApp("src"),
	"@assets": resolveApp('src/assets'),
	"@static": resolveApp('src/static'),
	"@modules": resolveApp('src/modules'),
	"@components": resolveApp('src/components'),
	"@layout": resolveApp('src/layout'),
	"@store": resolveApp('src/store'),
	"@routes": resolveApp('src/routes'),
	"@pages": resolveApp('src/pages'),
	"@utils": resolveApp('src/utils'),
}
//
// webpack别名覆写
module.exports = override(addWebpackAlias(alias), addDecoratorsLegacy());
// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
// }
