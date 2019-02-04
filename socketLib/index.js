var io = {};

export function initializeSocket(http) {
    io = require('socket.io')(http);
} 

export function notifyEveryone(eventName, eventObject) {
    io.emit(eventName, eventObject);
}

export function onEvent(eventName, callback) {
    io.on('connection', function(socket){
        socket.on(eventName, function(obj){
            callback(obj);
        });
    });
}

