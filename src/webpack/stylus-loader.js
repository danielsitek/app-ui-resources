
const stylusLoader = (srcPath, addOptions) => ({
    loader: 'stylus-loader',
    options: {
        sourceMap: true,
        set: {
            paths: [
                srcPath,
            ],
        },
        ...addOptions,
    },
});

module.exports = stylusLoader;
