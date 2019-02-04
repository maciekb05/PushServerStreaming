const socketIo = require('socket.io');
var io;

exports.initializeSocket = function initializeSocket(server) {
    io = socketIo(server)
} 

exports.notifyEveryone = function notifyEveryone(eventName, eventObject) {
    io.emit(eventName, eventObject);
}

exports.onEvent = function onEvent(eventName, callback) {
    io.on('connection', function(socket){
        socket.on(eventName, function(obj){
            callback(obj);
        });
    });
}

