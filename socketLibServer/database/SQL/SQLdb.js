let Database = require('../Database');

class SQLdb extends Database{

    constructor(dbString, eventSchema){
        super(dbString, eventSchema);
        this.Connect();
    }

    Connect() {
    }
}
module.exports = SQLdb;