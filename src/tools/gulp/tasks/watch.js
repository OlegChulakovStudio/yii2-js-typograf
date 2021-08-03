const gulp = require('gulp');
const livereload = require('gulp-livereload');

// Tasks
const dataTask = require('./data');
const pugTask = require('./pug');
const jsTask = require('./javascript');
const cssTask = require('./css');
const cssLibsTask = require('./css-libs');
const cssPagesTask = require('./css-pages');

const {
  TEMPLATES_WATCH,
  DATA_SOURCE_PATH,
  STYLES_WATCH,
  JS_WATCH,
  VUE_WATCH,
} = require('../../constants');

module.exports = function() {
  console.log('\x1b[36m%s\x1b[0m', '\nАктивизируется вотчер...');

  livereload.listen({ port: process.env.LR_PORT });
  gulp.watch(DATA_SOURCE_PATH, gulp.series([dataTask, pugTask]));
  gulp.watch(TEMPLATES_WATCH, gulp.series(pugTask));
  gulp.watch(STYLES_WATCH, gulp.series([cssTask, cssLibsTask, cssPagesTask]));
  gulp.watch(JS_WATCH, gulp.series(jsTask));
  gulp.watch(VUE_WATCH, gulp.series(jsTask));

  console.log('\x1b[36m%s\x1b[0m', 'Вотчер запущен.\n');
};
