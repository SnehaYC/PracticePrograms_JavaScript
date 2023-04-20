/** @format */

const electionVotes = [
  "Pappu",
  "Mina",
  "Heena",
  "Mina",
  "Raju",
  "Heena",
  "Mina",
  "Heena",
  "Mina",
  "Pappu",
  "Mina",
  "Pappu",
  "Mina",
  "Heena",
  "Pappu",
  "Mina",
  "Mina",
  "Pappu",
  "Heena",
  "Mina",
];

const tallyVotes = (votes) => {
  return votes.reduce(
    (acc, name) => ({
      ...acc,
      [name]: acc[name] ? acc[name] + 1 : 1,
    }),
    {}
  );
};

console.log(tallyVotes(electionVotes));
