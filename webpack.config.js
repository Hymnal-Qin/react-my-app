// Imports
const Dotenv = require("dotenv-webpack");
const path = require("path");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash:8].js"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
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
			}
		]
	},
	plugins: [new Dotenv()],
	node: {
		fs: "empty"
	}
};
