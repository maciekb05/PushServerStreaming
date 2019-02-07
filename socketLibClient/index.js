const socketIo = require('socket.io-client');
var io;

exports.initializeSocket = function initializeSocket(endpoint) {
    io = socketIo(endpoint)
} 

exports.onEvent = function onEvent(eventName, callback) {
    io.on(eventName, function(obj){
        callback(obj);
    });
}
exports.sendEvent = function sendEvent(eventName, eventObject) {
    io.emit(eventName, eventObject);
}