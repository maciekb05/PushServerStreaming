let _instance;

class AbstractFactory {
    constructor() {
        if (_instance) {
            return _instance;
        } else {
            this.isDbCreated = false;
            _instance = this;
        }
    }

    createDB(dbString, eventSchema) {
        throw new Error("Not implemented");
    }

    createDAO(database) {
        throw new Error("Not implemented");
    }
}

module.exports = AbstractFactory;