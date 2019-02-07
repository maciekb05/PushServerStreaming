const {DBFactory} = require( "./database/DBFactory");
const socketIo = require('socket.io');
var io;
let dataBase;
class Facade {
    constructor () {
        this.log("Facade just created");
    }

    initializeSocket = function initializeSocket(server) {
        io = socketIo(server);
        let factory = new DBFactory();
        dataBase = factory.CreateDb(dbString,eventSchema);
    } 
    
    notifyEveryone = function notifyEveryone(eventName, eventObject) {
        io.emit(eventName, eventObject);
    }
    
    onEvent = function onEvent(eventName, callback) {
        io.on('connection', function(socket){
            socket.on(eventName, function(obj){
                callback(obj);
            });
        });
    }
}

exports = new Facade();
