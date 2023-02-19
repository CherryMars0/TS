const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        'page': "./src/App.ts"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './public'),
        },
        compress: true,
        hot: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, "../public"),
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
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 16 * 1024,
                    name: '[hash:6].[ext]',
                    outputPath: 'assets/images'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false,
                }
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