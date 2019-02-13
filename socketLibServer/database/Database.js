let _instance;

class Database {
    constructor(dbString, eventSchema) {
        if (_instance) {
            return _instance;
        } else {
            this.isDbCreated = false;
            _instance = this;
            this.dbString = dbString;
            this.eventSchema = eventSchema;
        }
    }
    
    Connect() {
        throw new Error("Not implemented");
    }

    _RegisterNewSchema() {
        throw new Error("Not implemented");
    }
}

module.exports = Database;