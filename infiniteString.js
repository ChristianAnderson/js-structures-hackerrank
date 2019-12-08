// Complete the repeatedString function below.
function repeatedString(s, n) {
    // const sLen = s.length,
    //       modulus = n % sLen,
    //       timesItFills = (n - modulus) / sLen;
    // let newString = s.repeat(timesItFills);

    // for(let i = 0; i < modulus;i++){
    //     newString = newString+newString[i];
    // }
    // newString = newString.split("");
    // let result = newString.filter(string => string === "a")


    const min = 1;
    const maxs = 100;
    const maxn = 1000000000000;

    // count the a's in the string
    let as = s.split('').filter(i => i === "a").length;
    if (typeof s === "string"
          && s.length >= min
          && s.length <= maxs
          && n === parseInt(n, 0)
          && n >= min
          && n <= maxn) {
        console.log((s.slice(0, (n % s.length)).split('').filter(i => i === "a").length));
            as = (parseInt(n / s.length, 0) * as) + (s.slice(0, (n % s.length)).split('').filter(i => i === "a").length);

     }
     
     return as;

}

const result = repeatedString("aba", 10);
console.log(result);