/** @format */
// I - Arrow function
// const createPrinter = () => () => console.log("Hey");

//------------------------------------------------------

// II - Normal function
// const createPrinter = function () {
//   return function () {
//     console.log("Hey");
//   };
// };

// III
// const double = x => x * 2;
// const triple = x => x * 3;
// const quadruple = x => x * 4;

// instead of creating 3 function we can create one function

const createMultiplier = (y) => (x) => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(3)); // 6
console.log(triple(3)); // 9
console.log(quadruple(3)); // 12
