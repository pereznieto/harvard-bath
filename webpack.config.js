var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ENV = process.env.NODE_ENV;

module.exports = {
	entry: ( ENV == 'production' ? ['./js/main'] :
		[
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/dev-server',
			'./js/main'
		]
	),
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		loaders: [
			// JavaScript
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: __dirname,
				exclude: /node_modules/
			},
			// Sass
			{
				test: /index.scss/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
			},
			// Images
			{
				test: /\.(jpe?g|png|gif|svg|ico)/,
				loader: 'url-loader?limit=1&name=assets/images/[name].[ext]'
			}
		]
	},
	plugins: ( ENV == 'production' ?
		[
			new webpack.optimize.UglifyJsPlugin({minimize: true}),
			new ExtractTextPlugin('style.css', {
				allChunks: true
			})
		] :
		[
			new webpack.HotModuleReplacementPlugin(),
			new ExtractTextPlugin('style.css', {
				allChunks: true
			})
		]
	),
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		hot: true
	}
};
