const socketIo = require('socket.io-client');
var io;


class Facade {
    constructor () {
        this.log("Facade just created");
    }

    initializeSocket = function initializeSocket(endpoint) {
        io = socketIo(endpoint)
    } 

    onEvent = function onEvent(eventName, callback) {
        io.on(eventName, function(obj){
            callback(obj);
        });
    }

    sendEvent = function sendEvent(eventName, eventObject) {
        io.emit(eventName, eventObject);
    }
}

exports = new Facade();