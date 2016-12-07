
var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReplacePlugin = require('replace-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const BUILD_PATH = 'dist';
const BUILD_FULL_PATH = helpers.root(BUILD_PATH);

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: BUILD_FULL_PATH,
        publicPath: './',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new ReplacePlugin({
            entry: 'src/Employee.aspx',
            hash: '[hash]',
            output: BUILD_PATH + '/Employee.aspx'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.aspx'
        })
    ]
});
