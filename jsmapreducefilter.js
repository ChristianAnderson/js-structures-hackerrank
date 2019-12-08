var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

//   Our objective: get the total score of force users only. Let’s do it step by step!

var jediPersonnel = personnel.filter(function (person) {
    return person.isForceUser;
  });
  // Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)
console.log(jediPersonnel)


// With that we have 3 elements left in our resulting array. We now need to create an array containing the total score of each Jedi.
var scorePerJedi = jediPersonnel.map(jedi => jedi.pilotingScore + jedi.shootingScore);
console.log(scorePerJedi)

// And let’s use reduce to get the total:
var totalScores = scorePerJedi.reduce((sum, jediScore) => sum + jediScore, 0)
console.log("total scores: " + totalScores)



var totalJediScore = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.shootingScore + jedi.pilotingScore)
    .reduce((acccumulator, totalScore) => acccumulator + totalScore, 0);

console.log("chained gfunctions(): " + totalJediScore)