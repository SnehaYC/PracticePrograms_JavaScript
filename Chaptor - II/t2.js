/** @format */

// 1.
// const doubleNumbers = [1, 2, 3];
// for (let i = 0; i < doubleNumbers.length; i++) {
//   const doubled = doubleNumbers[i] * 2;
//   doubleNumbers.push(doubled);
// }
// console.log(doubled);

// 2.
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

// 3. Functional way
const numbers = [1, 2, 3, 4, 5];

const double = (x) => x * 2;

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);
