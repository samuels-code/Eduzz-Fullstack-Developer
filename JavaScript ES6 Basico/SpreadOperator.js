// Spread operator
// usado em strings, arrays, objects e objetos iteraveis.

/*
const str = 'Digital Innovation One' 

function logArgs(...args){
    console.log(args);
}
logArgs(...str);
*/

const str = 'Digital Innovation One' 
const arr = [1,2,3,4];

function logArgs(...args){
    console.log(arguments);
}

// const arr2 = arr.concat([5,6,7])
const arr2 = [5,6,7, ...arr]

const arr3 = [...arr2, ...arr, 0,0,0]
//logArgs(...arr);
//logArgs(...str);
logArgs(...arr3);

const arrClone = [...arr, ...arr2   ];
console.log(arrClone);

/// com objetos

const obj = {
    test: 123
}
const obj2 = {
    ...obj,
    test2: 'hello'
}

const objMerged = {
    ...obj2,
    ...obj,
}
console.log(obj2)
console.log(objMerged)