const gulp = require('gulp');
const gulpIf = require('gulp-if');
const stylus = require('gulp-stylus');
const prefix = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const postcssSize = require('postcss-size');
const postcssPosition = require('postcss-position');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const csso = require('gulp-csso');

const {
  COMMON_STYLES_SOURCE,
  COMMON_CSS_FILENAME,
  BROWSERS,
  CSS_BUILD_PATH,
} = require('../../constants');

const isProdMode = process.env.NODE_ENV === 'production';

module.exports = function() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    ` - Task: css | Основные стили ${COMMON_STYLES_SOURCE} -> ${CSS_BUILD_PATH}`,
  );

  return gulp
    .src(COMMON_STYLES_SOURCE)
    .pipe(plumber())
    .pipe(gulpIf(!isProdMode, sourcemaps.init()))
    .pipe(stylus())
    .pipe(gulpIf(isProdMode, csso()))
    .pipe(gulpIf(!isProdMode, sourcemaps.write()))
    .pipe(concat(COMMON_CSS_FILENAME))
    .pipe(prefix(BROWSERS))
    .pipe(postcss([postcssPosition, postcssSize]))
    .pipe(gulp.dest(CSS_BUILD_PATH));
};
