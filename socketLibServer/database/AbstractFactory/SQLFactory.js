const AbstractFactory = require("./AbstractFactory");
const SQLDB = require("../SQL/SQLdb");
const SQLDAO = require("../SQL/SQLdao");
const validateSQLSchema = require("../SQL/schemaValidator");

class SQLFactory extends AbstractFactory {
    constructor() {
        super();
    }

    createDB(dbString, eventSchema) {
        if (validateSQLSchema(eventSchema)) {
            return new SQLDB(dbString, eventSchema);
        } else {
            throw new Error("Invalid schema");
        }
    }

    createDAO(database) {
        return new SQLDAO(database);
    }
}

module.exports = SQLFactory;