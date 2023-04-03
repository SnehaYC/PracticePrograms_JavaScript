/** @format */

const employees = [
  {
    name: "Raju Dev",
    age: 54,
    jobTitle: "developer",
    salary: 70000,
  },
  {
    name: "Mina Raje",
    age: 34,
    jobTitle: "engineer",
    salary: 75000,
  },
  {
    name: "Atul Naik",
    age: 25,
    jobTitle: "secretary",
    salary: 54000,
  },
  {
    name: "Rahul Datte",
    age: 40,
    jobTitle: "developer",
    salary: 100000,
  },
  {
    name: "Khushi Raut",
    age: 29,
    jobTitle: "engineer",
    salary: 40000,
  },
  {
    name: "Heena Pandit",
    age: 20,
    jobTitle: "developer",
    salary: 65000,
  },
  {
    name: "Amol Kale",
    age: 60,
    jobTitle: "developer",
    salary: 90000,
  },
];
// average salary of developers
const developers = employees.filter(
  (employee) => employee.jobTitle === "developer"
);

const developerSalaries = developers.map((developer) => developer.salary);

const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x, 0);

const averageDeveloperSalary =
  totalDeveloperSalaries / developerSalaries.length;

console.log(averageDeveloperSalary);

//average salary of non-developers

const nonDevelopers = employees.filter(
  (employee) => employee.jobTitle !== "developer"
);
const nonDeveloperSalaries = nonDevelopers.map(
  (nonDeveloper) => nonDeveloper.salary
);

const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce(
  (acc, x) => acc + x,
  0
);

const averageNonDeveloperSalary =
  totalNonDeveloperSalaries / nonDeveloperSalaries.length;

console.log(averageNonDeveloperSalary);
