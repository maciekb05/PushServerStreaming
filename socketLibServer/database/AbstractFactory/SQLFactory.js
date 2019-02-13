const AbstractFactory = require("./AbstractFactory");
const SQLDB = require("../SQL/SQLdb");
const SQLDAO = require("../SQL/SQLdao");

class SQLFactory extends AbstractFactory {
    constructor() {
        super();
    }

    createDB(dbString, eventSchema) {
        return new SQLDB(dbString, eventSchema);
    }

    createDAO(database) {
        return new SQLDAO(database);
    }
}

module.exports = SQLFactory;