const MongoFactory = require("./database/AbstractFactory/MongoFactory");
const SQLFactory = require("./database/AbstractFactory/SQLFactory");
const socketIo = require('socket.io');


// default NotInitialized(initializeSocket -> Initialized), Initialized (connectDataBase -> Connected), Connected(notifyEveryone, onEvent)
class Facade {
    constructor() {
        console.log("Facade just created");
    }

    initializeSocket(server) {
        this.io = socketIo(server);
    }

    connectDataBase(dbString, eventSchema) {
        if (isMongoString(dbString)) {
            this.factory = new MongoFactory();
        } else if (isPostgresString(dbString)) {
            this.factory = new SQLFactory();
        }

        this.dataBase = this.factory.createDB(dbString, eventSchema);
        this.dataBase.Connect();

        this.dao = this.factory.createDAO(this.dataBase);
    }

    notifyEveryone(eventName, eventObject) {
        this.io.emit(eventName, eventObject);
        
        try {
            this.dao.AddEvent(eventObject);
        } catch(e) {
            console.log(e);
        }
    }

    async onEvent(eventName, callback) {
        const dao = this.dao;
        this.io.on('connection', async function (socket) {
            var history = await dao.FindEvents();
            socket.on(eventName, function (obj) {
                callback(obj);
            });
            socket.emit('history', history);
        });

    }
}

function isMongoString(url) {
    return url.match(/mongodb(?:\+srv)?:\/\/.*/) !== null;
}

function isPostgresString(url) {
    return url.match(/postgres(?:\+srv)?:\/\/.*/) !== null;
}

module.exports = new Facade();