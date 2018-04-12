
const imageRules = () => ({
    test: /\.(jpg|jpeg|gif|png|svg)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]?[hash:7]',
                publicPath: '../',
            },
        },
    ],
});

module.exports = imageRules;
