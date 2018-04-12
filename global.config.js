const path = require('path');

const publicPath = path.resolve(__dirname, 'public');
const srcPath = path.resolve(__dirname, 'src');

// General config.
const config = {
    publicPath,
    srcPath,
};

module.exports = config;
