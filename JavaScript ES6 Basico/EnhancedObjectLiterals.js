var obj = { // criação classica de um objeto literal
    prop1: 'Digital Innovation One' //cria propriedades e métodos
}

// outra maneira

var prop1 = 'Digital Innovation One' 
var obj = {
    prop1 : prop1
}
console.log(obj);

// EC6 com short range

var prop1 = 'Digital Innovation One' 
var obj = {
    prop1
}
console.log(obj);

function method1(){
    console.log('method called')
}
var obj = {
    method1
}
obj.method1()

// outra maneira de fazer um método
var obj = {
    sum: function sum(a, b){
        return a + b
    }
};
console.log(obj.sum(1,5));

// mais uma outra maneira
var obj = {
    sum(a, b) {
        return a + b;
    }
}
console.log(obj.sum(1,5));

