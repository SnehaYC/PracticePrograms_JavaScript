/** @format */

const person = {
  name: "Pappu Kale",
  age: 25,
  hairColor: "brown",
  eyeColor: "blue",
};

const careerData = {
  name: "Raju Kale", //overides the person.name
  title: "developer",
  company: "ABC software",
};

// const personWithCareerData = {
//   //...person, //combines two objects
//   name: person.name, // name,title,company
//   ...careerData,
// };

const updates = {
  name: "Babu Dev",
};

const updatedPerson = {
  ...person,
  ...updates,
};
// console.log(personWithCareerData);
console.log(updatedPerson);

// Oprator with array

const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = [0, ...numbers, 7];

console.log(newNumbers);
