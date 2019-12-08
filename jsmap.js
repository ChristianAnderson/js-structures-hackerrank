// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  // What you need
//   [20, 24, 56, 88]
  
let arrForEach = [];
//   Using forEach()
  officers.forEach((officer) =>{
      arrForEach.push(officer.id);
  })

// Using map() that help us to create the var at the moment
var arrMapped = officers.map(function(officer){
    return officer.id;
})

// Using map() and features of ES6
const officersIds = officers.map(officer => officer.id);

console.log('result from using forEach(): ' + arrForEach)
console.log('result from using map(): ' + arrMapped)
console.log('result from using map() and es6: ' + officersIds)