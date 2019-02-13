const socketIo = require('socket.io-client');

class Facade {
    constructor () {
        console.log("Facade just created");
    }

    initializeSocket(endpoint) {
        this.io = socketIo(endpoint);
    }

    onEvent(eventName, callback) {
        this.io.on(eventName, function(obj){
            callback(obj);
        });
    }

    sendEvent(eventName, eventObject) {
        this.io.emit(eventName, eventObject);
    }
}

module.exports = new Facade();