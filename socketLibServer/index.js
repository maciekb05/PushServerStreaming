const MongoFactory = require("./database/MongoFactory");
const SQLFactory = require("./database/SQLFactory");
const socketIo = require('socket.io');
var io;
let dataBase;
let factory;

class Facade {
    constructor() {
        console.log("Facade just created");
    }

    initializeSocket(server, dbString, eventSchema) {
        io = socketIo(server);

        if (this.isMongoString(dbString)) {
            factory = new MongoFactory();
        } else if (this.isPostgresString(dbString)) {
            factory = new SQLFactory();
        }

        dataBase = factory.CreateDb(dbString,eventSchema);
        dataBase.Connect();
    }

    notifyEveryone(eventName, eventObject) {
        io.emit(eventName, eventObject);
    }

    onEvent(eventName, callback) {
        io.on('connection', function (socket) {
            socket.on(eventName, function (obj) {
                callback(obj);
            });
        });
    }

    isMongoString(url) {
        return url.match(/mongodb(?:\+srv)?:\/\/.*/) !== null;
    }

    isPostgresString(url) {
        return url.match(/postgres(?:\+srv)?:\/\/.*/) !== null;
    }

}

module.exports = new Facade();