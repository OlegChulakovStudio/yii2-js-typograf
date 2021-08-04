const gulp = require('gulp');

const { TYPOGRAF_PATH_MODULE, PLACE_TO_TRANSFER_TYPOGRAF } = require('../../constants');

module.exports = function() {
    console.log(
        '\x1b[36m%s\x1b[0m',
        ` — Task: move | Перенос typograf\n${TYPOGRAF_PATH_MODULE} -> ${PLACE_TO_TRANSFER_TYPOGRAF}`,
    );

    return gulp.src(TYPOGRAF_PATH_MODULE)
            .pipe(gulp.dest(PLACE_TO_TRANSFER_TYPOGRAF));
};