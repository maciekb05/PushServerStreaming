const { NotInitialized } = require("./stateMachine");

//Facade
class ServerPush {
    constructor() {
        this.state = new NotInitialized(this);
    }

    changeState(state) {
        this.state = state;
    }

    initializeSocket(server) {
        this.state.initializeSocket(server);
    }

    connectDataBase(dbString, eventSchema) {
        this.state.connectDataBase(dbString, eventSchema);
    }

    notifyEveryone(eventName, eventObject) {
        this.state.notifyEveryone(eventName, eventObject);
    }

    async onEvent(eventName, callback) {
        await this.state.onEvent(eventName, callback);
    }
}

module.exports = new ServerPush();