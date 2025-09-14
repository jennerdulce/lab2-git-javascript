/**
 * String utilities for learning purposes
 * @file 'strings.js'
 * @author 'Jenner D. Dulce
 */

/**
 * Reverse a string
 * @param {string} str - String to reverse
 * @returns {string} Reversed String
 */
export function reverse(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.split(',').reverse().join();
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export function capitalize(str) {
  return "stubbed";
}

/**
 * Count vowels in a string
 * @param {string} str - String to count vowels
 * @returns {number} Number of vowels
 */
export function countVowels(str) {
  return "stubbed";
}

/**
 * Check if a string is a palindrome
 * @param {string} - String to check
 * @returns {boolean} True if palindrome
 */
export function isPalindrome(str) {
  return "stubbed";
}