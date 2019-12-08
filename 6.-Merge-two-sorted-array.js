// How would you merge two sorted array?
const  merge = (a, b) => {
  var aElm = a[0],
      bElm = b[0],
      merged = [],
      //counters
      i = j = 1;

  // return empty values
  if(a.length == 0) return b;
  if(b.length == 0) return a;

  while(aElm || bElm){
    if((aElm && !bElm) || (aElm < bElm)){
      merged.push(aElm);
      aElm = a[i++];
    } else {
      merged.push(bElm);
      bElm = b[j++]
    }
  }


  // console.log(exists);
  return merged;
}

const result = merge([2,5,6,9], [1,2,3,29,5]);
console.log(result);