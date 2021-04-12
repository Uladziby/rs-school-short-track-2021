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
function getEmailDomain(mail) {
  let result;
  let found = false;
  for (let i = mail.length - 1; i >= 0; i--) {
    if (mail[i] === '@' && !found) {
      result = mail.slice(i + 1, mail.length);
      found = true;
    }
  }
  return result;
}

module.exports = getEmailDomain;
