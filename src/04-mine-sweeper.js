/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  /* let newArr = matrix.reduce(function(a, b) {
    return a.concat(b);
  }) */

  const result = [];
  const final = [];
  const newArr = [...matrix];
  const arrLen = newArr[0].length;

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < arrLen; j++) {
      let count = 0;
      if (newArr[i][j] === true) {
        result.push(1);
      } else {
        if (newArr[i] !== undefined && newArr[i][j + 1] === true) {
          count++;
        }
        if (newArr[i] !== undefined && newArr[i][j - 1] === true) {
          count++;
        }
        if (newArr[i + 1] !== undefined && newArr[i + 1][j - 1] === true) {
          count++;
        }
        if (newArr[i + 1] !== undefined && newArr[i + 1][j] === true) {
          count++;
        }
        if (newArr[i + 1] !== undefined && newArr[i + 1][j + 1] === true) {
          count++;
        }
        if (newArr[i + 1] !== undefined && newArr[i + 1][j + 1] === true) {
          count++;
        }
        if (newArr[i - 1] !== undefined && newArr[i - 1][j - 1] === true) {
          count++;
        }
        if (newArr[i - 1] !== undefined && newArr[i - 1][j] === true) {
          count++;
        }
        if (newArr[i - 1] !== undefined && newArr[i - 1][j + 1] === true) {
          count++;
        }
        result.push(count);
      }
    }
  }

  for (let i = 0; i < result.length; i += arrLen) {
    final.push(result.slice(i, i + arrLen));
  }

  return final;
}

module.exports = minesweeper;
