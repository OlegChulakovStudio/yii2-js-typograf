const gulp = require('gulp');
const cssTask = require('./css');
const typografMove = require('./typografMove')
const jsTask = require('./javascript');


module.exports = gulp.series(
    cssTask,
    typografMove,
    jsTask
);
