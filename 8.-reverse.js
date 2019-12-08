// How would you swap two values without using a temporary var
const  swap = (str) => {
  str = str.split(' ').reverse().join(' ').split('').reverse().join('');
            // split(' ').reverse().join(' ').split('').reverse().join('')
  return str;
}

const result = swap("hola soy christian");
console.log(result);