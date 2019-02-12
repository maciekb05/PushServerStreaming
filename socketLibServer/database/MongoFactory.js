let DBFactory = require('./DBFactory');
let MongoDB = require('./Mongo/MongoDB');

class MongoFactory extends DBFactory{
    constructor() {
        super();
    }

    CreateDb(dbString, eventSchema) {
        this.isDbCreated = true;
        return new MongoDB(dbString, eventSchema);
    }

}

module.exports = MongoFactory;