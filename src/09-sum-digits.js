/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const newArr = [n];
  let arr = newArr.toString().replace(/\D/g, '0').split('').map(Number);
  if (arr.length > 1) {
    arr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return getSumOfDigits(arr);
  }

  return +arr;
}

module.exports = getSumOfDigits;
