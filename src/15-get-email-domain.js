/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  let result = str;
  for (let i = result.length; i > 0; i--) {
    if (result[i] === '@') {
      result = result.slice([i + 1]);
    }
  }
  return result;
}

module.exports = getEmailDomain;
