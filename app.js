'use strict';

const env = process.env.NODE_ENV;

let appPath;

if (env && env === 'production') {
    appPath = './dist/index';
    console.log('Production');
} else {
    appPath = './src/index';
    console.log('Development');
}

const startApp = require(appPath);

startApp();