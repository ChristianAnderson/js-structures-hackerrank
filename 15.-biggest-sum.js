// From a unsorted array, check whether there are any two numbers that will sum up to a given number?
function missingNumber(arr, sum){
  var len = arr.length,
      biggestNumber = arr[0],
      second = arr[1];
      i = 2;
  if (len < 2) return null;

  if(biggestNumber < second){
    biggestNumber = arr[1];
    second = arr[0];
  }

  for(; i<len; i++){

    if(arr[i] > biggestNumber){
       second = biggestNumber;
       biggestNumber = arr[i];
     }
    else if (arr[i]>second){
       second = arr[i];
    }
  }
  return Math.floor(sum) ;
      // return charCount;
}  

// find a missing Number from an array of ordened

const result =  missingNumber([1,2,5,8,6,1], 5.9);
console.log(result);