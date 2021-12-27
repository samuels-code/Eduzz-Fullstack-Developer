// ES7 - ASYNC / AWAIT
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
})

const simpleFunction = async () => {
    const data = await asyncTimer();
    const dataJSON = await fetch('/data.json')
    .then(resStream => resStream =>
        resStream.json()
        )

    return data;
}
simpleFunction()
.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});
