//maneira antiga
/*
function sum(a, b) {
   var value = 0;

   for (var i = 0; 1 <  arguments.length; i++) {
   value += arguments[i];
}
return value;
}
console.log(sum(5,5,5,2,3));
*/

//EC6 rest operator ...
/* function sum(...args) {
  return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5,5,5,2,3));
*/

//trabalhando com arrow functions


const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
}
console.log(sum(5,5,5,2,3));



