function compareTriplets(a, b) {
  let arrA = a;
  let arrB = b,
      resultArr = [0 ,0];
  
  for(let i = 0; i < 3; i++){
          if(arrA[i]>arrB[i]){
              resultArr[0]++;
          } else {
              resultArr[1]++;
          }
  }

  return resultArr;

}

// find a missing Number from an array of ordened
const result =  compareTriplets([17, 28, 30], [99,16,8]);
console.log(result);