const MongoFactory = require("./database/AbstractFactory/MongoFactory");
const SQLFactory = require("./database/AbstractFactory/SQLFactory");
const socketIo = require('socket.io');

class State {
    constructor(context) {
        this.context = context;
        this.context.error = "Not implemented";
    }

    initializeSocket(server) {
        throw new Error(this.context.error);
    }

    connectDataBase(dbString, eventSchema) {
        throw new Error(this.context.error);
    }

    notifyEveryone(eventName, eventObject) {
        throw new Error(this.context.error);
    }

    async onEvent(eventName, callback) {
        throw new Error(this.context.error);
    }
}

class NotInitialized extends State {
    constructor(context) {
        super(context);
        this.context.error = "Not implemented, you can only initializeSocket(server) it this state";
    }

    initializeSocket(server) {
        this.context.io = socketIo(server);
        this.context.changeState(new Initialized(this.context));
    }
}

class Initialized extends State {
    constructor(context) {
        super(context);
        this.context.error = "Not implemented, you can only connectDataBase(dbString, eventSchema) it this state";
    }

    connectDataBase(dbString, eventSchema) {
        if (isMongoString(dbString)) {
            this.context.factory = new MongoFactory();
        } else if (isPostgresString(dbString)) {
            this.context.factory = new SQLFactory();
        }

        this.context.dataBase = this.context.factory.createDB(dbString, eventSchema);
        this.context.dataBase.Connect();

        this.context.dao = this.context.factory.createDAO(this.context.dataBase);

        this.context.changeState(new Connected(this.context));
    }
}

class Connected extends State {
    constructor(context) {
        super(context);
        this.context.error = "Not implemented, you can notifyEveryone(eventName, eventObject) and onEvent(eventName, callback) it this state";
    }

    notifyEveryone(eventName, eventObject) {
        this.context.io.emit(eventName, eventObject);

        try {
            this.context.dao.AddEvent(eventObject);
        } catch(e) {
            console.log(e);
        }
    }

    async onEvent(eventName, callback) {
        const dao = this.context.dao;
        this.context.io.on('connection', async function (socket) {
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

module.exports = {NotInitialized, Initialized, Connected};