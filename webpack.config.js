const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: './public/index.html'
        })
    ]
};