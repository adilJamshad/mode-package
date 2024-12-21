/**
 * Calculates the modulo of a number without using `%`.
 * This ensures the result is always non-negative, even for negative numbers.
 *
 * @param {number} dividend - The number to divide.
 * @param {number} divisor - The divisor.
 * @returns {number} - The modulo result.
 */
function mod(dividend, divisor) {
  if (divisor === 0) {
    throw new Error("Divisor cannot be zero.");
  }

  // Calculate the mod using arithmetic manipulation
  const remainder = dividend - Math.floor(dividend / divisor) * divisor;

  // Ensure the result is always positive
  return remainder >= 0 ? remainder : remainder + Math.abs(divisor);
}

module.exports = { mod };
