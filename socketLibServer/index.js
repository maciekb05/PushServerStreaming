const socketIo = require('socket.io');
var io;
let dataBase;
exports.initializeSocket = function initializeSocket(server,dbString,eventSchema) {
    io = socketIo(server);
    factory = new DBFactory();
    dataBase = factory.CreateDb(dbString,eventSchema);
};

exports.notifyEveryone = function notifyEveryone(eventName, eventObject) {
    io.emit(eventName, eventObject);
};

exports.onEvent = function onEvent(eventName, callback) {
    io.on('connection', function(socket){
        socket.on(eventName, function(obj){
            callback(obj);
        });
    });
};