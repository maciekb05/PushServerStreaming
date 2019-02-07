const DBFactory = require("./database/DBFactory");
const socketIo = require('socket.io');
var io;
let dataBase;
class Facade {
    constructor() {
        console.log("Facade just created");
    }

    initializeSocket(server, dbString, eventSchema) {
        io = socketIo(server);
        let factory = new DBFactory();
        dataBase = factory.CreateDb(dbString,eventSchema);
        dataBase.Connect();
    };

    notifyEveryone(eventName, eventObject) {
        io.emit(eventName, eventObject);
    };

    onEvent(eventName, callback) {
        io.on('connection', function (socket) {
            socket.on(eventName, function (obj) {
                callback(obj);
            });
        });
    }
};
module.exports = new Facade();
