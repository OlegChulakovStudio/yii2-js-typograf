const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const pug = require('gulp-pug');
const beautify = require('gulp-jsbeautifier');
const livereload = require('gulp-livereload');
const classnames = require('classnames');

const {
  TEMPLATES_SOURCE,
  TEMPLATES_BUILD_PATH,
  DATA_OUTPUT_PATH,
  DATA_FILENAME,
} = require('../../constants');

module.exports = function() {
  console.log('\x1b[36m%s\x1b[0m', '\n - Task: pug | Собираются pug шаблоны');

  if (process.env.PRETTIFY == 1) {
    console.log('\x1b[33m%s\x1b[0m', '\nWARNING: Минификация отключена');
  }

  // Загрузка глобальных переменных pug из json файлов в блоках
  const pugGlobalVariables = (function() {
    const dbFile = path.join(process.cwd(), DATA_OUTPUT_PATH, DATA_FILENAME);

    if (!fs.existsSync(dbFile)) {
      return {};
    }

    return JSON.parse(fs.readFileSync(dbFile, 'utf8'));
  })();

  return gulp
    .src(TEMPLATES_SOURCE)
    .pipe(
      pug({
        locals: {
          db: pugGlobalVariables,
          cn: classnames,
        },
      }),
    )
    .pipe(gulpIf(process.env.PRETTIFY == 1, beautify()))
    .pipe(gulp.dest(TEMPLATES_BUILD_PATH))
    .pipe(livereload());
};
