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
    throw new Error('Connot divide by zero');
  }
  return a / b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function sqrt(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

function factorial(n) {
  let result = 1;

  if (n < 0) {
    throw new Error('Factorial not defined for negative numbers');
  }

  if (n === 0 || n === 1) return 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}




// Test the functions with console.log
console.log('Testing Math Functions');
console.log('add(5, 3) = ', add(5, 3)); // Should be 8
console.log('subtract(10, 4) = ', subtract(10, 4)); // Should be 6
console.log('mulitply(3, 7) = ', multiply(3, 7)); // Should be 21
console.log('divide(20, 4) = ', divide(20, 4)); // Should be 5
console.log('power(2, 8) = ', power(2, 8)); // Should be 256
console.log('sqrt(16) = ', sqrt(16)); // Should be 4
console.log('factorial(5) = ', factorial(5)); // Should be 120