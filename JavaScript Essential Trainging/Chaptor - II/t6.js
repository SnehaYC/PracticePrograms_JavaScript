/** @format */

const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const decending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

const sortedNumbers = mixedUpNumbers.slice().sort(decending);

console.log(sortedNumbers);
