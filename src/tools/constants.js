const COMMON_STYLES_SOURCE = './source/styles/common.styl';
const CSS_BUILD_PATH = './assets/css/';
const COMMON_CSS_FILENAME = 'common.css';

const JS_BUILD_PATH = './assets/js/';
const JS_TYPOGRAF_SOURCE = [
  './source/scripts/MenuItem.js',
  './source/scripts/SearchMenuFilter.js',
  './source/scripts/TypografButton.js',
  './source/scripts/input.js'
];
const JS_TYPOGRAF_BUILD_PATH = 'typografText.js';

const JS_TINY_MCE_SOURCE = [
  './source/scripts/plugins.js'
];
const JS_TINY_MCE_BUILD_PATH = 'typografTinyMCE.js';

const TYPOGRAF_PATH_MODULE = './node_modules/typograf/dist/*.js';
const PLACE_TO_TRANSFER_TYPOGRAF = './assets/js/typograf';

module.exports = {
  COMMON_CSS_FILENAME,
  COMMON_STYLES_SOURCE,
  CSS_BUILD_PATH,
  JS_BUILD_PATH,
  JS_TYPOGRAF_SOURCE,
  TYPOGRAF_PATH_MODULE,
  PLACE_TO_TRANSFER_TYPOGRAF,
  JS_TINY_MCE_SOURCE,
  JS_TINY_MCE_BUILD_PATH,
  JS_TYPOGRAF_BUILD_PATH
};
