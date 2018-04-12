
const jsRules = () => ({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
        presets: ['env'],
    },
});

module.exports = jsRules;
