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
  const returnedFunc = () => {
    return 0;
  };

  return returnedFunc;
}

module.exports = generateZeroFunction;
