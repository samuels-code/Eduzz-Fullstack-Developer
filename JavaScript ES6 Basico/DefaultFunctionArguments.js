/*
function multiply (a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
*/
// exatamente igual 
function multiply (a, b = 1) {
    return a * b;
}

//lazy evaluation

function randomNumber() {
    console.log('Generating a random number...')
    return Math.random() * 10;
}

function multiply (a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5));
console.log(randomNumber());