// How would you swap two values without using a temporary var
const  swap = (a, b) => {
  console.log("before swap : a:" + a + " b:" + b)
  b = b -a ;
  a = b + a;
  b = a -b;
  console.log("after swap : a:" + a + " b:" + b)
  


  // console.log(exists);
  return true;
}

const result = swap(10,20);
console.log(result);