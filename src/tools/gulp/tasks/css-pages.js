const gulp = require('gulp');
const gulpIf = require('gulp-if');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const prefix = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const postcssSize = require('postcss-size');
const postcssPosition = require('postcss-position');
const livereload = require('gulp-livereload');
const csso = require('gulp-csso');

const { CSS_PAGES_SOURCE, CSS_PAGES_BUILD_PATH, COMMON_STYLES_PATH, BROWSERS } = require('../../constants');

const isProdMode = process.env.NODE_ENV === 'production';

module.exports = function() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    `\n - Task: css-pages | Стили страниц ${CSS_PAGES_SOURCE} -> ${CSS_PAGES_BUILD_PATH}`,
  );

  return gulp
    .src(CSS_PAGES_SOURCE)
    .pipe(plumber())
    .pipe(gulpIf(!isProdMode, sourcemaps.init()))
    .pipe(stylus({
      paths:  ['node_modules', COMMON_STYLES_PATH],
      import: ['index']
    }))
    .pipe(gulpIf(isProdMode, csso()))
    .pipe(gulpIf(!isProdMode, sourcemaps.write()))
    .pipe(prefix(BROWSERS))
    .pipe(postcss([postcssPosition, postcssSize]))
    .pipe(gulp.dest(CSS_PAGES_BUILD_PATH))
    .pipe(livereload());
};
