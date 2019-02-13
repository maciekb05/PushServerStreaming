const AbstractFactory = require("./AbstractFactory");
const MongoDB = require("../Mongo/MongoDB");
const MongoDAO = require("../Mongo/MongoDao");
const validateMongoSchema = require("../Mongo/schemaValidator");

class MongoFactory extends AbstractFactory {
    constructor() {
        super();
    }

    createDB(dbString, eventSchema) {
        if (validateMongoSchema(eventSchema)) {
            return new MongoDB(dbString, eventSchema);
        } else {
            throw new Error("Invalid schema");
        }
    }

    createDAO(database) {
        return new MongoDAO(database);
    }
}

module.exports = MongoFactory;