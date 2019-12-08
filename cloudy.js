// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jumps = 0,
      arr = c,
      len = arr.length;
      for(let i = 0; i < len-1; i++){
        if(arr[i+1] == 1){
          jumps++
          console.log("jump" + i)
          i++;
        } else if(arr[i+1] == 0 && arr[i+2] == 0){
          jumps++
          console.log("jump" + i)
          i++;
        } else if(arr[i+2] == 1) {
          jumps++
          console.log("jump" + i)

        } else {
          jumps++
          console.log("jump" + i)
        }
      }
  return jumps;
}
const result = jumpingOnClouds([0, 0, 0, 1, 0, 0]);
console.log(result);