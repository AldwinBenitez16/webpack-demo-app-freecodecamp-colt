const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common, {
    mode: "development",
    output: { 
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [new CleanWebpackPlugin(),]
}); 