let InsertBuilder = require("./InsertBuilder");
let SelectBuilder = require('./SelectBuilder');
let EventObjectDao = require('../EventObjectDao');

class SQLdao extends EventObjectDao {
    constructor(database) {
        super(database);
        
    }

    AddEvent(event) {
        let insertBuilder = new InsertBuilder();
        insertBuilder.setTableName('events');
        insertBuilder.setValues(event);
        console.log(insertBuilder.buildQuery());
        this._database.client.query(insertBuilder.buildQuery());
    }

    FindEvents() {
        let selectBuilder = new SelectBuilder();
        selectBuilder.setTableName('events');
        selectBuilder.setColumns('*');
    }
}

module.exports = SQLdao;