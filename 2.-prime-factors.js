const  primeFactors = (n) => {
  let factors = [];
  let divisor = 2;
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}
const result = primeFactors(4);

console.log(result);