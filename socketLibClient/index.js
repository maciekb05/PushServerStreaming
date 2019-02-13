const { NotInitialized } = require("./stateMachine");

class ServerPush {
    constructor() {
        this.state = new NotInitialized(this);
    }

    changeState(state) {
        this.state = state;
    }

    initializeSocket(endpoint) {
        this.state.initializeSocket(endpoint);
    }

    onEvent(eventName, callback) {
        this.state.onEvent(eventName, callback);
    }

    sendEvent(eventName, eventObject) {
        this.state.sendEvent(eventName, eventObject);
    }
}

module.exports = new ServerPush();