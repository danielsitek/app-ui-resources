const config = require('../../../global.config');
const path = require('path');

const themeName = path.dirname(__filename).split(path.sep).pop();
const mode = process.env.NODE_ENV || 'development';

module.exports = [
    {
        ...config.themeConfig('front', themeName, __dirname, mode),
        mode,
    },
    {
        ...config.themeConfig('embed', themeName, __dirname, mode),
        mode,
    },
];
