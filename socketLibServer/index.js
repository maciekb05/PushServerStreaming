const MongoFactory = require("./database/AbstractFactory/MongoFactory");
const SQLFactory = require("./database/AbstractFactory/SQLFactory");
const socketIo = require('socket.io');

class Facade {
    constructor() {
        console.log("Facade just created");
    }

    initializeSocket(server, dbString, eventSchema) {
        this.io = socketIo(server);

        if (this.isMongoString(dbString)) {
            this.factory = new MongoFactory();
        } else if (this.isPostgresString(dbString)) {
            this.factory = new SQLFactory();
        }

        this.dataBase = this.factory.createDB(dbString,eventSchema);
        this.dataBase.Connect();

        this.dao = this.factory.createDAO(this.dataBase);
    }

    notifyEveryone(eventName, eventObject) {
        this.io.emit(eventName, eventObject);

        //tutaj moze trzeba try'owac
        
        this.dao.AddEvent(eventObject);
    }

    async onEvent(eventName, callback) {
        const dao = this.dao;
        this.io.on('connection', async function (socket) {
            var history = await dao.FindEvents();
            socket.on(eventName, function (obj) {
                callback(obj);
            });
            console.log("wysylam historie");
            console.log(history);
            socket.emit('history',history);
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