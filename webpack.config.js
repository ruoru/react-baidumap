const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const version = require('./package').version;

module.exports = {
    entry: {
        app: './example/app.js',
        index: './src/index.js'
    },
    output: {
        path: join(__dirname, './docs'),
        filename: `./[name].js`,
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    module: {
        rules: [
            //处理js文件
            {
                test: /\.(js)$/,
                exclude: [/node_modules/],  //不通过该babel处理，提高打包速度。
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                },
            },
            //处理css文件
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        },
                    }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/index.html',
            filename: 'index.html',
            inject: 'body',    // 打包之后js放置在那里 body header false不引入打包后的js
            chunks: ['app'],
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true,
            },
            compress: {
                screw_ie8: true,
            },
            comments: false,
        }),

    ],
    devServer: {
        open: true,
        inline: true,
        hot: true,
        publicPath: '/',
        contentBase: join(__dirname, './docs'),
        compress: true,    //启用所有服务的gzip压缩
        host: '0.0.0.0',
        port: 9003,
        historyApiFallback: {
            index: '/index.html',
        },

        //lazy: true,    //当lazy启用时，当它被请求的DEV-服务器将只编译软件包。这意味着webpack不会看到任何文件更改。我们称这个懒惰模式。
        //filename: '[name].bundle.js',    ///[name].bundle.js请求时才编译 。filename在没有延迟模式的情况下使用时不起作用。
    },
};