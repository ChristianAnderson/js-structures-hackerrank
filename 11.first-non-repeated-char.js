function firstNonRepeatChar(str){
  var len = str.length,
      char, 
      charCount = {};

      for(var i = 0; i < len; i++){
        char = str[i];
        // Check if the char exists in the object
        if(charCount[char]){
          //if it does, lets count add ++ by using it as key
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }
      for(j in charCount){
        if(charCount[j] == 1){
          return j;
        }
      }
      // return charCount;
}  

const result =  firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
console.log(result);