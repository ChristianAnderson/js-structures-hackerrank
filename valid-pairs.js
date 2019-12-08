function countPairs(numbers, k) {
    // Write your code here
    let validPairs = 0,
        len = numbers.length,
        exists = {},
        arr = [],
        elm,
        outArr = [];
        

        for(let i = 1; i < (len-1); i++){
            for(let j = i+1; j <= len; j++){
                if( (numbers[i] + k) == numbers[j]){
                    arr.push(numbers[i]+","+numbers[j]);
                }
            }
        }

        for(var i =0; i<arr.length; i++){
            elm = arr[i];
            if(!exists[elm]){
              outArr.push(elm);
              exists[elm] = true;
           }
          }
    return outArr.length;

}

// find a missing Number from an array of ordened
const result =  countPairs([1,1,2,2,3,3], 1);

// 1,2,3,4,5,6  2
 // 1,1,2,2,3,3
// 6,1,2,3,4,5,6,
// 2
console.log(result);


// 6,1,1,2,2,3,3
// 1