//console

// console.log('Black text");
// console.warn('Yellow text with alert');
// console.error('Red error text')

/*
console.group('My group');
console.log('Info inside group')
console.lgo('More info inside group');
console.groupEnd('My group');
*/

/*
console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
},2000);
*/

//console.table(['Wander Augusto', 'Digital Innovation One'])

//console.log('%c styled log', 'color:blue; font-size:40px')
class CustomError extends Error {
    constructor({ message, data}){
        super(message);
        this.dta = data
    }
}


try {
    console.log(name);
    const name = 'Wander Augusto';

    const myError = new CustomError({message: 'Custom message', data: {
        type: 'Server error'
    }})
    throw myError
} catch (err) {
    console.log(err);
    console.log (err.data)
} finally {
    console.log('Keep going ...')
}
