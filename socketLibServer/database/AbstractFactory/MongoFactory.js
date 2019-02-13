const AbstractFactory = require("./AbstractFactory");
const MongoDB = require("../Mongo/MongoDB");
const MongoDAO = require("../Mongo/MongoDao");

class MongoFactory extends AbstractFactory {
    constructor() {
        super();
    }

    createDB (dbString, eventSchema) {
        return new MongoDB(dbString, eventSchema);
    }

    createDAO (database) {
        return new MongoDAO(database);
    }
}

module.exports = MongoFactory;