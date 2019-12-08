// From a unsorted array, check whether there are any two numbers that will sum up to a given number?
function countZero(n){
  var count = 0;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
      // return charCount;
}  

// find a missing Number from an array of ordened

const result =  countZero(100);
console.log(result);