const gulp = require('gulp');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');

const { CSS_LIBS_SOURCE, CSS_LIBS_BUILD_PATH } = require('../../constants');

module.exports = function() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    `\n - Task: css-libs | Библиотеки ${CSS_LIBS_SOURCE} -> ${CSS_LIBS_BUILD_PATH}`,
  );

  return gulp
    .src(CSS_LIBS_SOURCE)
    .pipe(plumber())
    .pipe(
      stylus({
        'include css': true,
      }),
    )
    .pipe(gulp.dest(CSS_LIBS_BUILD_PATH));
};
