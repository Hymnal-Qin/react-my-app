const {override, addWebpackAlias} = require('customize-cra');
const path = require("path");

const resolveApp = resolvePath => path.join(__dirname, '.', resolvePath)
// // 别名
const alias = {
    "@": resolveApp("src"),
    components: resolveApp('src/components'),
    pages: resolveApp('src/pages'),
    utils: resolveApp('src/utils'),
}
//
//webpack别名覆写
module.exports = override(
    addWebpackAlias(alias)
);
