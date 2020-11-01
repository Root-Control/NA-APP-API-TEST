'use strict';

const env = process.env.NODE_ENV;

let appPath;

if (env && env === 'production') {
    appPath = './dist/index';
    console.log('Production');
} else {
    appPath = './src/index';
    console.log('Development');
    const error = 'Your environment is develoment, you cannot use or run "node app.js" since your environment is production';
    throw error
}

const startApp = require(appPath);

startApp();