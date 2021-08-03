/** Модифицирует json по названию файла.
 *
 * Пример:
 * Путь — `/app/source/blocks/test/test-data.json`
 *
 * В JSON попадет следующее:
 * @example
 * {
 *    "test-data": {
 *      ...
 *    }
 * }
 */
module.exports = function() {
  return function(parsedJson, file) {
    return {
      [file.basename.replace(/\.json$/, '')]: parsedJson,
    };
  };
};
