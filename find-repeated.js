// From a unsorted array, check whether there are any two numbers that will sum up to a given number?
function findRepeated(arr){
  var exist = {},
      resultArr  = [], 
      repeated = [];
      num = 0;
      
  for(var i = 0; i < arr.length; i++){
    num = arr[i];
    
    if(!exist[num]){
      exist[num] = 0;
      resultArr.push(arr[i]);
    }
    exist[num]++;
  }

  for(var prop in exist){
    if(exist[prop] >= 2){
      repeated.push(prop);
    }
  }
  console.log(repeated)
  console.log(exist)
  return resultArr;
}

// find a missing Number from an array of ordened

const result =  findRepeated([1,2,3,4,4,5,3]);
console.log(result);