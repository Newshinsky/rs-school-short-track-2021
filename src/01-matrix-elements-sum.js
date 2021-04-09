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
  const newArr = [...arr];
  let sum = 0;
  const arrLen = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arrLen; j++) {
      if (arr[i][j] === 0 && i < arr.length - 1) {
        newArr[i + 1][j] = 0;
      }

      sum += newArr[i][j];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
