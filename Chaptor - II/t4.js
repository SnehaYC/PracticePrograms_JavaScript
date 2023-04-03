/** @format */

const employees = [
  {
    name: "Raju Dev",
    salary: 90000,
  },
  {
    name: "Mina Raje",
    salary: 65000,
  },
  {
    name: "Veena Kale",
    salary: 1500000,
  },
  {
    name: "Pappu Kale",
    salary: 250000,
  },
];

const makesMoreThanOneMilion = (employee) => employee.salary > 1000000;

const result = employees.some(makesMoreThanOneMilion);
// console.log(result);

//------------------------------------
const formValues = ["Pappu", "Kale", "Pune", ""];

const isNotEmpty = (string) => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled);
