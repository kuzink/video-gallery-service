const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
	devtool: 'cheap-module-eval-source-map',
    cache: false,
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
      port: 3000,
      compress: true
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-env"],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            "@babel/syntax-object-rest-spread",
                            [
                                "@babel/plugin-transform-spread",
                                {"loose": true}
                            ],
                            "@babel/plugin-transform-parameters",
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-destructuring"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            },

            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.LoaderOptionsPlugin({debug: true}),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body',
            favicon: './src/assets/favicon.ico'
        })
    ]
};