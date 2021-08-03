const gulp = require('gulp');
const plumber = require('gulp-plumber');


const { JS_COMMON_SOURCE, JS_BUILD_PATH } = require('../../constants');

module.exports = function() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    ` — Task: javascript | Основной бандл\n${JS_COMMON_SOURCE} -> ${JS_BUILD_PATH}`,
  );

  return gulp
    .src(JS_COMMON_SOURCE)
    .pipe(plumber())
    .pipe(gulp.dest(JS_BUILD_PATH));
};
