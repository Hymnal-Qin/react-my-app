// Imports
const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.(js?|jsx?)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images/"
                }
            },
            {
                test: /\.(ts?|tsx?)$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
                // The filename should be preserved, if not then tack on ?name=[name].[ext] to either loader
                // e.g. 'style-loader?name=[name].[ext]' ...
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     favicon: 'public/images/favicon/favicon.ico',
        //     template: path.resolve(__dirname, 'public/index.html')
        // }),
        // new webpack.HashedModuleIdsPlugin(),
        new Dotenv()
    ],
    // devServer: {
    //     contentBase: "./build",//本地服务器所加载的页面所在的目录
    //     // historyApiFallback: true,//不跳转
    //     index: 'index.html', // 为了可以展示目录
    //     // contentBase: __dirname, // 默认值就是项目根目录
    //     publicPath: '/',
    //     host: 'localhost',
    //     inline: true,//实时刷新
    //     port: 8008,
    //     compress: true,
    //     open: true
    //     //hot: true
    // },
    resolve: {
        //别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@static': path.resolve(__dirname, 'static')
        },
        // 一定不要忘记配置ts tsx后缀
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.fs'],
    },
    target: 'node',
    node: {
        fs: 'empty',
        net: 'empty',
        tls: "empty",
    }
};
