var sum = function (a, b) {
    return a + b;
}

//Arrow functions

var createObj = () => ({ test: 123 }) //criando objeto retorno implicito

console.log(createObj())

var sum = (a, b) => {
    return a + b
}

var sum = (a, b) => a + b; // tem return implicito

console.log(sum(5, 15));

/** 
 outras maneiras 

function Car() {
    this.foo =  'bar';
}

// com arrow functions

var Car = () => {
    this.foo = 'bar'
}

console.log(new Car());
**/

log('teste');
function log(value) {
    console.log(value)
}

