
const htmlRules = () => ({
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
    },
});

module.exports = htmlRules;
