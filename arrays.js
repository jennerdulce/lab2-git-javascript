/**
 * Array utilities for Lab 2
 * @file 'arrays.js'
 * @author 'Jenner D. Dulce'
 */

/**
 * @param {number[]} arr - Array of numbers
 * @returns {numbers} Sum of all elements
 */
export function sum(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return arr.reduce((acc, num) => acc + num, 0)
}

/**
 * Calculate average of array
 * @param {number[]} arr - Array of numbers
 * @returns {Number} Average value
 */
export function average(arr) {
  if(!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  return sum(arr) / arr.length;
}

/**
 * Filter even numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} Array of even numbers
 */
export function filterEven(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return arr.filter(num => num % 2 === 0);
}

/**
 * Filter odd numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} Array of odd numbers
 */
export function filterOdd(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return arr.filter(num => num % 2 !== 0);
}

/**
 * Remove duplicate values
 * @param {Array} arr - Array with possible duplicates
 * @returns {Array} Array with unique values
 */
export function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return [...new Set(arr)];
}