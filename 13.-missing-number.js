// find a missing Number from an array of ordened

function missingNumber(str){
      var n = str.length + 1,
          sum = 0,
          expectedSum = n*(n+1)/2;

          for(var i = 0; str.length > i; i++) {
            console.log("i: "+  i + " and value: " + str[i]);
            sum += str[i];
          }

          // for(var i = 0, len = arr.length; i < len; i++){
          //   sum += arr[i];
          // }
          console.log(sum);
      return expectedSum - sum;
      // return charCount;
}  

// find a missing Number from an array of ordened

const result =  missingNumber([1,2,3,5]);
console.log(result);