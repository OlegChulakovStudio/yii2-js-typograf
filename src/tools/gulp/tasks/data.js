const gulp = require('gulp');
const jsonMerge = require('gulp-merge-json');
const jsonEdit = require('../utils/jsonEdit');

const { DATA_SOURCE_PATH, DATA_OUTPUT_PATH, DATA_FILENAME } = require('../../constants');

module.exports = function() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    ` — Task: data | Сбор данных из блоков${DATA_SOURCE_PATH} -> ${DATA_OUTPUT_PATH}`,
  );

  return gulp
    .src(DATA_SOURCE_PATH)
    .pipe(
      jsonMerge({
        fileName: DATA_FILENAME,
        edit: jsonEdit(),
      }),
    )
    .pipe(gulp.dest(DATA_OUTPUT_PATH));
};
