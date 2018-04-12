const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const ENV = process.env.NODE_ENV || 'development';

const postcssLoader = () => ({
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        plugins: () => {
            if (ENV === 'production') {
                return [
                    autoprefixer(),
                    cssnano(),
                ];
            }
            return [
                autoprefixer(),
            ];
        },
        sourceMap: true,
    },
});

module.exports = postcssLoader;
