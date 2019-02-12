let DBFactory = require('./DBFactory');
let SQLdb = require('./SQL/SQLdb');

class SQLFactory extends DBFactory{
    constructor() {
        super();
    }

    CreateDb(dbString, eventSchema) {
        this.isDbCreated = true;
        return new SQLdb(dbString, eventSchema);
    }
}

module.exports = SQLFactory;