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
  let generateZero = () => 0;

  return generateZero;
}

module.exports = generateZeroFunction;
