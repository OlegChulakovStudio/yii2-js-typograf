const gulp = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const uglifyCondition = require('../utils/uglifyCondition');

const { JS_LIBS_SOURCE, JS_BUILD_PATH } = require('../../constants');

module.exports = function() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    `\n - Task: js-libs | Библиотеки\n${JS_LIBS_SOURCE} -> ${JS_BUILD_PATH}`,
  );

  return gulp
    .src(JS_LIBS_SOURCE)
    .pipe(plumber())
    .pipe(gulpif(uglifyCondition(process.env.NODE_ENV), uglify()))
    .pipe(gulp.dest(JS_BUILD_PATH));
};
