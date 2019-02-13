let _instance;

class Database {
    constructor(dbString, eventSchema) {
        if (_instance) {
            return this;
        } else {
            this.isDbCreated = false;
            _instance = this;
            this.dbString = dbString;
            this.eventSchema = eventSchema;
        }
    }
    
    Connect() {
        throw new Error('You have to implement the method to connect');
    }

    _RegisterNewSchema() {
        throw new Error('You have to implement this method');
    }
}

module.exports = Database;