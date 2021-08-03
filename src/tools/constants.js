const TEMPLATES_BUILD_PATH = 'public';

const HTML_BUILD_PATH = [];

const COMMON_STYLES_SOURCE = './source/styles/common.styl';
const CSS_BUILD_PATH = './assets/assets/css/';
const COMMON_CSS_FILENAME = 'common.css';
const COMMON_STYLES_PATH = 'source/styles/modules';

const JS_LIBS_SOURCE = './source/scripts/libs/**/*.js';

const CSS_PAGES_SOURCE = './source/styles/pages/*.styl';
const CSS_PAGES_BUILD_PATH = './assets/css/pages/';

const CSS_LIBS_SOURCE = './source/styles/libs/*.styl';
const CSS_LIBS_BUILD_PATH = './assets/css/';

const JS_BUILD_PATH = './assets/js/';
const JS_COMMON_SOURCE = './source/scripts/common.js';
const JS_COMMON_FILENAME = 'common.js';

const JS_WATCH = './source/**/*.js';
const VUE_WATCH = './source/**/*.vue';
const STYLES_WATCH = './source/**/*.styl';

const DATA_OUTPUT_PATH = 'tmp';

module.exports = {
  COMMON_CSS_FILENAME,
  COMMON_STYLES_SOURCE,
  COMMON_STYLES_PATH,
  CSS_BUILD_PATH,
  CSS_PAGES_SOURCE,
  CSS_PAGES_BUILD_PATH,
  CSS_LIBS_BUILD_PATH,
  CSS_LIBS_SOURCE,
  DATA_OUTPUT_PATH,
  HTML_BUILD_PATH,
  JS_BUILD_PATH,
  JS_COMMON_FILENAME,
  JS_COMMON_SOURCE,
  JS_LIBS_SOURCE,
  JS_WATCH,
  STYLES_WATCH,
  TEMPLATES_BUILD_PATH,
  VUE_WATCH,
};
