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

        // tutaj chyba powinien byc switch - case na podstawie dbString
        // na robienie roznych fabryk konkretnych
        // odpowiedzialnych za Mongo, Postgre itd...
        if (this.isMongoString(dbString)) {
            factory = new MongoFactory();
        } else {
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
}

module.exports = new Facade();