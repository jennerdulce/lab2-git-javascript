/**
 * Main entry point for Lab 2
 * @file 'index.js'
 * @author 'Jenner D. Dulce'
 */

// Import math function
import * as math from './math.js';
import * as strings from './strings.js';

console.log('\n=== Testing Math Module ===');
console.log('add(5, 3) = ', math.add(5, 3)); // Should be 8
console.log('subtract(10, 4) = ', math.subtract(10, 4)); // Should be 6
console.log('mulitply(3, 7) = ', math.multiply(3, 7)); // Should be 21
console.log('divide(20, 4) = ', math.divide(20, 4)); // Should be 5
console.log('power(2, 8) = ', math.power(2, 8)); // Should be 256
console.log('sqrt(16) = ', math.sqrt(16)); // Should be 4
console.log('factorial(5) = ', math.factorial(5)); // Should be 120

console.log('\n=== Testing String Module ===');
console.log('reverse("Hello") = ', strings.reverse('hello'));
console.log('capitalize("javascript") = ', strings.capitalize('javascript'));
console.log('countVowels("hello world") = ', strings.countVowels('hello world'));
console.log('isPalindrome("racecar") = ', strings.isPalindrome('racecar'));
console.log('isPalindrome("hello") = ', strings.isPalindrome('hello'));
