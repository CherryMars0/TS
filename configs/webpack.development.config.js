const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        'page': "./src/App.ts"
    },
    devtool: false,
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        hot: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false,
        },
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['page']
        }),
    ],
};

//多页面打包的原理就是：配置多个entry和多个HtmlWebpackPlugin