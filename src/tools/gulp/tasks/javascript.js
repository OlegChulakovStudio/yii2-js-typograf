const gulp = require('gulp');
const plumber = require('gulp-plumber');
const merge = require('merge-stream');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const { JS_TYPOGRAF_SOURCE, JS_TYPOGRAF_BUILD_PATH, JS_BUILD_PATH, JS_TINY_MCE_BUILD_PATH, JS_TINY_MCE_SOURCE } = require('../../constants');

module.exports = function() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    ` — Task: javascript | Скрипт для типографа общего\n${JS_TYPOGRAF_SOURCE} -> ${JS_BUILD_PATH}${JS_TYPOGRAF_BUILD_PATH}\n`);
  console.log(
      '\x1b[36m%s\x1b[0m',
    ` — Task: javascript | Скрипт для типографа в TinyMCE\n${JS_TINY_MCE_SOURCE} -> ${JS_BUILD_PATH}${JS_TINY_MCE_BUILD_PATH}`,
  );

  const first = gulp
    .src(JS_TYPOGRAF_SOURCE)
      .pipe(uglify())
      .pipe(concat(JS_TYPOGRAF_BUILD_PATH))
    .pipe(gulp.dest(JS_BUILD_PATH))
  const second = gulp
      .src(JS_TINY_MCE_SOURCE)
      .pipe(uglify())
      .pipe(concat(JS_TINY_MCE_BUILD_PATH))
      .pipe(gulp.dest(JS_BUILD_PATH))
  return merge(first, second);
};

