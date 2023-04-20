/** @format */

const add = (x, y, z) => x + y + z;

// Way 1 - Passing one arg
const addPartial_1 = (x) => (y, z) => add(x, y, z);

const add5 = addPartial_1(5);
const sum = add(5, 6, 7);

// Way 2 - Passing two arg
const addPartial_2 = (x, y) => (z) => add(x, y, z);
const add5and6 = addPartial_2(5, 6);
const summ = add5and6(7);

//Way 3 - Passing arg one by one

const addPartial_3 = (x) => (y) => (z) => add(x, y, z);

// calling fun - 1
// const add_5 = addPartial_3(5);
// const add5_6 = addPartial_3(6);
// const sum3 = add5_6(7);

// calling fun - 2
const sum3 = addPartial_3(5)(6)(7);

console.log(sum3);
