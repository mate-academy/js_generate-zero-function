'use strict';

/**
 * Implement generateZeroFunction function:
 *
 * It returns function which returns 0
 *
 * const getZero = generateZeroFunction();
 * getZero() === 0;
 *
 * @return {function}
 *
 */
function generateZeroFunction() {
  const getZero = function() {
    return 0;
  };

  return getZero;
}

module.exports = generateZeroFunction;
