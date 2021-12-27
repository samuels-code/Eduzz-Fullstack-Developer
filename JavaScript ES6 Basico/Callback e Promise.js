// Promises
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('First data');
        }, 1000);
    })

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        //did something
        setTimeout(function () {
            resolve('Second data');
        }, 2000);
    })

// rodando as duas promises paralelamente
Promise.all( [doSomethingPromise(), doOtherThingPromise()])
.then((data) => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
})

//exectua a primeira promise
Promise.race( [doSomethingPromise(), doOtherThingPromise()])
.then((data) => {
    console.log(data)
});


// rodando as duas promises sequencial 
/*then(data => {
        console.log(data.split(''));
        return doOtherThingPromise()
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));
*/
// Pending
// Fulfiled
// Rejected 

// Callback
/*

function doSomething(callback) {
    setTimeout(function () {
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        callback('Second data');
    }, 1000);
}
//exemplo de callback hell
function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2)
                        }, 1000);
                    } catch (err) {
                        //handle error
                    }
                });
            } catch (err) {
                //handle error
            }
        });
    } catch (err) {
        //handle error
    }
}

doAll()
*/