/** @format */

const createPrinter = () => {
  const myFavoriteNumber = 13;
  return () => console.log(`My favorite number is ${myFavoriteNumber}`);
};

const printer = createPrinter();
printer();

console.log(myFavoriteNumber); //error - myFavoriteNumber is not defined
