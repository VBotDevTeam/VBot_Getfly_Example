const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
	entry: {
		app: './src/index.js',
	},		
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',		
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							// Cache lại các thông tin babel biên dịch ở thư mục node_modules/.cache
							cacheCompression: false,
							cacheDirectory: true,
						},
					}
				],
			},
			{
				test: /\.tsx?/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							// Cache lại các thông tin babel biên dịch ở thư mục node_modules/.cache
							cacheCompression: false,
							cacheDirectory: true,
						},
					}
				]
				,
			},
			{
				test: /\.html$/,
				loader: 'text-loader',
			},
			{ test: /\.ejs$/, use: [{ loader: 'ejs-loader', options: { esModule: false } }] },
		],
	},
	resolve: {
		modules: [
			'node_modules',
			path.resolve('./node_modules'),
			path.resolve(__dirname),
		],

		alias: {
			'@': path.join(__dirname, 'src')
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			_: 'lodash',
		}),
		// new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new NodePolyfillPlugin()
	],
};
