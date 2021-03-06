const htmlwebpackplugin = require('html-webpack-plugin')
const path = require('path');


module.exports = {
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, "dist"),
        filename:"index_bundle.js"
    },
    module:{
        rules:[
            {test: /\.(js)$/, use:['babel-loader']},
            {test: /\.css$/, use:['style-loader','css-loader']}
        ]
    },
    plugins:[
        new htmlwebpackplugin({
            template:'./public/index.html'
        })
    ]
}