/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns  {*}
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Connot divide by zero')
  }
  return a / b;
}

// Test the functions with console.log
console.log('Testing Math Functions');
console.log('add(5, 3) = ', add(5, 3)); // Should be 8
console.log('subtract(10, 4) = ', subtract(10, 4)); // Should be 6
console.log('mulitply(3, 7) = ', multiply(3, 7)); // Should be 21
console.log('divide(20, 4) = ', divide(20, 4)); // Should be 5