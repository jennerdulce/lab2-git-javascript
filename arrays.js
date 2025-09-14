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
