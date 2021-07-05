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
  let sendZero = () => 0;
  return sendZero;
}

module.exports = generateZeroFunction;
