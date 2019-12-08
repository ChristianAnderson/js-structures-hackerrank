const  isPrime = (n) => {
  let divisor = 2;
  while (Math.round(n/2) + 1 > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  console.log(divisor)
  return true;
}
const result = isPrime(5);
console.log(result);