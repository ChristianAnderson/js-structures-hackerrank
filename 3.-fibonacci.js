const  fibonacci = (n) => {
  fibo = [0,1];
  // let sum = 0;

  if(n <= 2) return 1;
  // We start from 2 because we have two parameters in array
  for(let i = 2; n >= i; i++) {
    fibo[i] = fibo[i-1]+fibo[i-2];

  }
  console.log(fibo[n]);
  return fibo;
}
const result = fibonacci(12);


// console.log(result);