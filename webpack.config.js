const config = require('./global.config');
const cssLoader = require('./src/webpack/css-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlRules = require('./src/webpack/html-rules');
const imageRules = require('./src/webpack/image-rules');
const jsRules = require('./src/webpack/js-rules');
const path = require('path');
const postcssLoader = require('./src/webpack/postcss-loader');
const stylusLoader = require('./src/webpack/stylus-loader');
const webpack = require('webpack');

const mode = process.env.NODE_ENV || 'development';

// Main Webpack config
module.exports = {
    mode,
    entry: {
        admin: [
            'jquery',
            path.resolve(config.srcPath, 'vendors/index.js'),
            path.resolve(config.srcPath, 'admin/index.js'),
            path.resolve(config.srcPath, 'admin/styles/project.styl'),
        ],
        wysiwyg: [
            path.resolve(config.srcPath, 'wysiwyg/styles/project.styl'),
        ],
    },

    output: {
        filename: `[name]/project${(mode === 'production') ? '.min' : ''}.js`,
        path: config.publicPath,
    },

    module: {
        rules: [
            jsRules(),
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        cssLoader(),
                        postcssLoader(),
                        stylusLoader(config.srcPath),
                    ],
                    fallback: 'style-loader',
                }),
            },
            imageRules(),
            htmlRules(),
        ],
    },

    plugins: [
        new ExtractTextPlugin(`[name]/project${(mode === 'production') ? '.min' : ''}.css`),
    ],

    devtool: `${(mode === 'production') ? 'inline-cheap-source-map' : ''}`,

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules|vendors/,
                    name: 'vendors',
                    chunks: 'initial',
                    enforce: true,
                },
            },
        },
    },
};
