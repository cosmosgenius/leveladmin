const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AsyncAwaitPlugin = require('webpack-async-await');

const config = {
    devtool: 'source-map',

    entry: {
        bundle: [
            './lib/index.js'
        ],
    },

    output: {
        path: path.resolve(__dirname, 'app/'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
    },
    plugins: [
        new AsyncAwaitPlugin({})
    ],
    resolve: { },
    target: 'electron-renderer'
};

if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
    // config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;

// Hot mode
if (process.env.HOT) {
    module.exports = merge(config, {
        devtool: 'cheap-module-eval-source-map',
        output: {
            publicPath: 'http://localhost:8082/'
        },
        devServer: {
            historyApiFallback: true,
            progress: true,
            hot: true,
            inline: true,
            port: 8082,
            contentBase: 'app/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.LoaderOptionsPlugin({
                debug: true
            })
        ]
    });
}
