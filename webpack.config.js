var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, './node_modules');

var dir_client = path.resolve(__dirname, './src/app');

module.exports = {
    entry: path.resolve(dir_client, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'), // for standalone building
        publicPath: '/assets/', // for hot building
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src','app')
        },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less/, loader: 'style-loader!less-loader'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};