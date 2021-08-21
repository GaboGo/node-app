const EventEmmitter = require('events') ;

const url = 'http://mylogger.io/log';

class Logger extends EventEmmitter{

    log(message, id) {
        console.log(message);

        this.emit('MessageLogged', {id: id, url: 'http://'});
    }  
}

module.exports = Logger;