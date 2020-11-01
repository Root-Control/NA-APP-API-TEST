'use strict';

let env = process.env.NODE_ENV;

let appPath;

if (env && env === 'production' || env === 'development') {
    appPath = './dist/index';
    console.log(`env  = ${env}`);
} else {
    appPath = './src/index';
    console.log('Local');
}

const startApp = require(appPath);

startApp();