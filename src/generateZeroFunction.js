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
  // write code here
  const generateZero = function() {
    return 0;
  };
  return generateZero;
}

module.exports = generateZeroFunction;
