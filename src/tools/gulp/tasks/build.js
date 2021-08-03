const gulp = require('gulp');
const cssTask = require('./css');
const jsLibsTask = require('./js-libs');


module.exports = gulp.series(
  cssTask,
  jsLibsTask,
);
