/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString().split('').map((item) => (parseInt(item, 10)));
  const outStr = str.filter((item) => (item !== Math.min(...str)));
  const result = parseInt(outStr.join(''), 10);
  return result;
}

module.exports = deleteDigit;
