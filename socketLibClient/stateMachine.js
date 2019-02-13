const socketIo = require('socket.io-client');

class State {
    constructor(context) {
        this.context = context;
        this.context.error = "Not implemented";
    }

    initializeSocket(endpoint) {
        throw new Error(this.context.error);
    }

    onEvent(eventName, callback) {
        throw new Error(this.context.error);
    }

    sendEvent(eventName, eventObject) {
        throw new Error(this.context.error);
    }
}

class NotInitialized extends State {
    constructor(context) {
        super(context);
        this.context.error = "Not implemented, you can only initializeSocket(endpoint) it this state";
    }

    initializeSocket(endpoint) {
        this.context.io = socketIo(endpoint);
    }
}

class Initialized extends State {
    constructor(context) {
        super(context);
        this.context.error = "Not implemented, you can onEvent(eventName, callback) and sendEvent(eventName, eventObject) it this state";
    }

    onEvent(eventName, callback) {
        this.context.io.on(eventName, function(obj){
            callback(obj);
        });
    }

    sendEvent(eventName, eventObject) {
        this.context.io.emit(eventName, eventObject);
    }
}

module.exports = {NotInitialized, Initialized};