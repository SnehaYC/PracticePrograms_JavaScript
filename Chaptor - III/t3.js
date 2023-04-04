/** @format */

// name, length, toString(), call, apply, bind
// name
const sayHello = () => console.log("hey");
console.log(sayHello.name);

// length
const add1 = (x, y, z) => x + y + z;
console.log(add1.length);

// toString
const add2 = (x, y, z) => x + y + z;
console.log(add2.toString());

// call
const sum = (x, y, z) => x + y + z;
console.log(sum.call(null, 1, 2, 3));
//console.log(add(1, 2, 3)); //call 2

// apply
const add = (x, y, z) => x + y + z;
console.log(add.apply(null, [1, 2, 3]));

const args = [1, 2, 3];
console.log(add(...args));

// bind
const add__ = (x, y, z) => x + y + z;
const args_ = [1, 2, 3];
const add_1 = add.bind(null, 1);
console.log(add_1(2, 3));
