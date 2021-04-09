/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    let first = 0;
    if (j > 0) {
      if (!arr[j].includes(0) && arr[j].length > 1) {
        for (let n = 0; n < arr[j].length; n++) {
          sum += arr[j][n];
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (arr[j].length === 1) {
          first = arr[j - 1];
          if (first > 0) {
            sum += Number(arr[j]);
          }
        } else {
          first = arr[j - 1][j];
          if (first > 0) {
            sum += arr[j][j];
          }
        }
      }
    } else {
      for (let n = 0; n < arr[j].length; n++) {
        sum += arr[j][n];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
