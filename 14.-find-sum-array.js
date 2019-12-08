// From a unsorted array, check whether there are any two numbers that will sum up to a given number?
function missingNumber(arr, sum){
  var len = arr.length;
    for(var i =0; i<len-1; i++) {
      for(var j = i+1; j < len; j++) {
        console.log(j);
        if(arr[i] + arr[j] == sum) return true;
      }
    }

    // var len = arr.length;
    
    // for(var i =0; i<len-1; i++){  
    //   for(var j = i+1;j<len; j++){
    //       if (arr[i] + arr[j] == sum)
    //           return true;
    //   }
    // }
  return false;
      // return charCount;
}  

// find a missing Number from an array of ordened

const result =  missingNumber([1,2,3,5], 2);
console.log(result);