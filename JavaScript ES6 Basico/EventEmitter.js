const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);    
    }
}

const users = new Users();
//com users.once retorna só o primeiro usuario
users.on('User logged', data => {
    console.log(data);
});

users.userLogged( {
    user: 'Wander Augusto'
})
users.userLogged( {
    user: 'Orestes Túlio'
})