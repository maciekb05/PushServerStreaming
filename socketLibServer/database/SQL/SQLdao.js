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
        this._database.client.query(insertBuilder.buildQuery())
        .then(res => {console.log(res.row);})
        .catch(e => console.log(e.stack))
    }

    FindEvents() {
        let selectBuilder = new SelectBuilder();
        selectBuilder.setTableName('events');
        selectBuilder.setColumns('*');
        console.log(selectBuilder.buildQuery());
        this._database.client.query(selectBuilder.buildQuery())
        .then(res => {console.log(res.rows); return res.rows;})
        .catch(e => console.log(e.stack))
    }
}

module.exports = SQLdao;