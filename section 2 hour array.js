// Complete the hourglassSum function below.
function hourglassSum(arr) {

    const w = 6,
          h = 6;
    let arrSums = [],
        sumPerHourGlass = 0;

    for(let x = 1; x < w-1; x++){
        for(let y = 1; y < h-1; y++){
            sumPerHourGlass = arr[x][y];
            
            for(let render = -1; render <= 1; render++){
                sumPerHourGlass = sumPerHourGlass + arr[x-1][y+render] + arr[x+1][y+render];
            }
            
            arrSums.push(sumPerHourGlass);
            sumPerHourGlass = 0;
        }
    }
    // arrSums.sort((a, b) => b-a)
    
    // return arrSums[0];

    return (arrSums.length > 0) ? Math.max(...arrSums) : 0;
}


let arr = [
            [-9, -9, -9,  1, 1, 1],
            [ 0, -9,  0,  4, 3, 2],
            [-9, -9, -9,  1, 2, 3],
            [ 0,  0,  8,  6, 6, 0],
            [ 0,  0,  0, -2, 0, 0],
            [ 0,  0,  1,  2, 4, 0]
        ];

const result = hourglassSum(arr);
// console.log("-----")
console.log(result);

