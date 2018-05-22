var path = require('path');

module.exports = {
    entry: './src/app.js',
    // resolve: {
    //   modules: [
    //       path.join(__dirname,"src"),
    //       'node_modules'
    //   ]
    // },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'app.bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, './src'),
                loader: 'babel-loader'
            }
        ]
    }
}