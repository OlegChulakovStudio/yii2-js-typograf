const path = require('path');

/**
 * Возвращает функцию, которая проверяет была ли
 * минифицирована библиотека.
 *
 * @param {string} mode - production | development
 */
module.exports = function uglifyCondition(mode) {
  return function(file) {
    const filename = path.basename(file.path, '.js');

    return mode === 'production' && filename.indexOf('.min') < 0;
  };
};
