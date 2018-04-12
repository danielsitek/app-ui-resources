const config = require('./global.config');
const cssLoader = require('./src/webpack/css-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlRules = require('./src/webpack/html-rules');
const imageRules = require('./src/webpack/image-rules');
const jsRules = require('./src/webpack/js-rules');
const path = require('path');
const postcssLoader = require('./src/webpack/postcss-loader');
const stylusLoader = require('./src/webpack/stylus-loader');

// Theme Webpack config.
const webpackThemeConfig = (themeName, dir, mode) => ({
    entry: {
        front: [
            'jquery',
            path.resolve(config.srcPath, 'vendors/index.js'),
            path.resolve(config.srcPath, 'front/styles/project.styl'),
            path.resolve(config.srcPath, 'front/index.js'),
        ],
        embed: [
            'jquery',
            path.resolve(config.srcPath, 'vendors/index.js'),
            path.resolve(config.srcPath, 'embed/styles/project.styl'),
            path.resolve(config.srcPath, 'embed/index.js'),
        ],
    },

    output: {
        filename: `[name]/project${mode === 'production' ? '.min' : ''}.js`,
        path: path.resolve(config.publicPath, `themes/${themeName}`),
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
                        stylusLoader(config.srcPath, {
                            import: [path.resolve(dir, 'styles/variables.styl')],
                            define: {
                                '$theme-images': `../../themes/${themeName}/images/`,
                            },
                        }),
                    ],
                    fallback: 'style-loader',
                }),
            },
            imageRules(),
            htmlRules(),
        ],
    },

    plugins: [
        new ExtractTextPlugin(`[name]/project${mode === 'production' ? '.min' : ''}.css`),
    ],

    devtool: `${(mode === 'production') ? 'inline-cheap-source-map' : ''}`,

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules|vendors/, // you may add "vendor.js" here if you want to
                    name: 'vendors',
                    chunks: 'initial',
                    enforce: true,
                },
            },
        },
    },
});

module.exports = webpackThemeConfig;
