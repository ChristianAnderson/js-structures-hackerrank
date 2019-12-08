// Complete the countingValleys function below.
function countingValleys(n, s) {
    let arr = s.split(''),
        path = 0,
        seaLevel = 0,
        result = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] == 'U') {
            path++;
        } else {
            if(path == seaLevel){
                result++;
            }
            path--;
        }
        
    }
    return result;
}

const result = countingValleys(8, 'UDDDUDUU');
 console.log( "result: " + result);