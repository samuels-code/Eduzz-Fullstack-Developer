//Generators fazer pauses e transformar objeto em iterável.

/*function* hello(){
    console.log( 'Hello');
    yield 1;
    
    console.log('From');
   const value =  yield 2; 

    console.log(value);
}
const it = hello();
console.log(it)

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
*/

/*
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const it = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

*/

const str = 'Digital Innovation One' 
const arr = [1,2,3,4];

const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){
        for ( var i = 0; i < this.values.length; i++){
            yield this.values[i]
        }
    }
};

for (let value of obj){
    console.log(value)
}