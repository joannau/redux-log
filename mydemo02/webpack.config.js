var webpack = require('webpack')
var path = require('path')

module.exports = {
    mode: 'development',
    context: __dirname + '/src',
    entry: './js/router.js',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    output: {
        path: __dirname + '/src/',
        filename: 'bundle.js'
    }
}