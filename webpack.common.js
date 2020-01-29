var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', //3. Inject styles into dom
                    'css-loader', //2. turns css into commonjs
                    'sass-loader' //1. turns sass into css
                ]
            }
        ]
    }
};