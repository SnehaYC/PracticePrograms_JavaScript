/** @format */

// var evenNUmbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNUmbers.puch(numbers[i]);
//   }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (x) => x % 2 === 0;

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// 2nd way

const evenNumbers = numbers.filter((x) => x % 2 === 0);
// console.log(evenNumbers);

// 2.

const words = ["hello", "goodbye", "the", "Antarctica"];

// const isLongerThan5 = (word) => word.length > 5;

// const longWords = words.filter(isLongerThan5);
// console.log(longWords);

// 3.
const createLengthTest = (minLength) => (words) => words.length > minLength;

// const isLongerThan5 = createLengthTest(5);

const longWords = words.filter(createLengthTest(4));

console.log(longWords);
