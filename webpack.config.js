// Imports
import path from 'path'
import Dotenv from 'dotenv-webpack'
const config = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/build",
		filename: "index.js"
	},
	devServer: {
		inline: true,
		port: 8082
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["@babel/preset-react", "@babel/preset-env"]
				}
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
	plugins: [
		new Dotenv()
	]
};

export default config;
