// Symbol identificador único
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello')

console.log(uniqueId === uniqueId2)

// pode ser usado para gerar propriedades privadas

const obj = {
    [uniqueId]: 'Hello'
}
console.log(obj)