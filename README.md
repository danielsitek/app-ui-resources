# UI Resources

This project serves as a test case for the refactoring of Symfony Application's assets. The application is divided into several interfaces - Admin, Wysiwyg, Front and Embed. And so are the assets, where each interface had its own assets building setup with [Grunt.js](https://gruntjs.com/) and [componentsjs v0.x](https://github.com/componentjs/component/tree/0.x).

But, because we need to move forward, we had to build new assets building setup. The new solution utilizes only Webpack to build assets. With full ES6 support (babel), ESLint, theming for Front and Embed interfaces, and npm Script as a task runner.

**Old toolbelt**:

* [Node v6](https://nodejs.org/en/)
* [npm v3](https://www.npmjs.com/)
* [Grunt.js](https://gruntjs.com/)
* [componentsjs v0.x](https://github.com/componentjs/component/tree/0.x)
* [Stylus](http://stylus-lang.com/)
* [ChameleonUI](https://github.com/chameleonui)
* Makefile

**New toolbelt setup**:

* [Node (latest)](https://nodejs.org/en/)
* [npm (latest)](https://www.npmjs.com/)
* [Webpack v4.5](https://webpack.js.org)
* [Stylus](http://stylus-lang.com/)
* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/)
* [PostCSS](http://postcss.org/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [CSSnano](http://cssnano.co/)
* [npm Script](https://docs.npmjs.com/cli/run-script)

## Use

### Main commands

``` shell
npm run build
```

Build whole project in development mode.

``` shell
npm run prod
```

Build whole project in production mode.

``` shell
npm run watch
```

Run watch mode on whole project.

### Sub commands

``` shell
npm run admin:build
npm run admin:prod
npm run admin:watch
```

Run development build, production build or watch only on admin parts of project.

``` shell
npm run themes:default:build
npm run themes:default:prod
npm run themes:default:watch

npm run themes:theme01:build
npm run themes:theme01:prod
npm run themes:theme01:watch
```

Run development build, production build or watch on specific themes.
