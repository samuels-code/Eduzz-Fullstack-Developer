fetch('http://192.168.0.1:8080/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
         return responseStream.json();
        } else {
            throw new Error ('Request error');
        }

    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: ', err);
    });
