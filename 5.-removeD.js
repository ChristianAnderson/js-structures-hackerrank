const  removeD = (arr) => {
  var exists ={},
  outArr = [], 
  elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }

  console.log(exists);
  return outArr;
}

const result = removeD([1,6,3,3,3,1,5,6,7,8,1]);
console.log(result);