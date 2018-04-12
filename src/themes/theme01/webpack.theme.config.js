const path = require('path');
const webpackThemeConfig = require('../../../theme.config');

const mode = process.env.NODE_ENV || 'development';
const themeName = path.dirname(__filename).split(path.sep).pop();

module.exports = {
    ...webpackThemeConfig(themeName, __dirname, mode),
    mode,
};
