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
  const zero = a => {
    let b = a;
    b = 0;
    return b;
  };
  return zero;
}

module.exports = generateZeroFunction;
