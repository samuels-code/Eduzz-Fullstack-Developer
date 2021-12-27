//maneira classica:
var arr = ['Apple', 'Banana', 'Orange',['Tomato']];
var apple = arr[0];
var banana = arr[1];
var Orange = arr[2];
var tomato = arr[3][0]

//EC6 Destructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(apple, apple2)
console.log(tomato2)

// com objetos
//classica:
var obj = {
    name: 'Wander'
}
var name = obj.name;

//EC6
var {name} = obj;
console.log(name);