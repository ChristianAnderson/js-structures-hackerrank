// How would you find the greatest common divisor of two numbers?
const  greatestCommonDivisor = (a, b) => {
  var divisor = 2,
  greaterDivisor = 1;

  while(divisor <= a && divisor <= b){
    if(a%divisor == 0 && b%divisor ==0){
      greaterDivisor = divisor;
    } 
    divisor++;
  }
  return greaterDivisor;  
}

 const result = greatestCommonDivisor(1, 1);
 console.log(result);