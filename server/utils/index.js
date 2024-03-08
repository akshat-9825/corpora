/**
 * Checks if the given password matches the confirmed password.
 *
 * @param {string} password - The password to be checked.
 * @param {string} confirmPassword - The confirmed password for comparison.
 * @return {boolean} Returns true if the password matches the confirmed password, false otherwise.
 */
function checkPasswordMatch(password, confirmPassword) {
  return password === confirmPassword;
}

/**
 * Capitalizes the first letter of a word.
 *
 * @param {string} word - The word to be capitalized.
 * @return {string} The capitalized word.
 */
const Capitalize = (word) => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
};

module.exports = { Capitalize, checkPasswordMatch };
