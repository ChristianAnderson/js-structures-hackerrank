// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const len = n-1;
    let arrayOut = [],
        arrObj = {},
        elem,
        result = 0;

        for(let i = 0; i <= len; i++){
            elem = ar[i];
            if(!arrObj[elem]){
                arrObj[elem] = 1;
            } else {
                arrObj[elem]++;
            }
        }
 
        // now we have hour repeated numbers Object
        for(let j in arrObj){
            // console.log(arrObj[j]);

            if(arrObj[j] >= 2) {
                console.log(j);
                console.log(arrObj[j]);
                
                while (arrObj[j] > 1) {
                    result++;
                    arrObj[j] = arrObj[j] - 2;     
                }   
            } 
        }
        
    return result;

}
const result = sockMerchant(9, [10,20,20,10,10,30,50,10,20]);
 console.log( "result: " + result);