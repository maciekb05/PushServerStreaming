let InsertBuilder = require("./InsertBuilder");
let SelectBuilder = require('./SelectBuilder');
let EventObjectDao = require('../EventObjectDao');

class SQLdao extends EventObjectDao {
    constructor(database) {
        super(database);

    }

    async AddEvent(event) {
        let insertBuilder = new InsertBuilder();
        insertBuilder.setTableName('events');
        insertBuilder.setValues(event);
        try {
            await this._database.client.query(insertBuilder.buildQuery())
        } catch (e) {
            console.log(e);
        }
    }

    async FindEvents() {
        let selectBuilder = new SelectBuilder();
        selectBuilder.setTableName('events');
        selectBuilder.setColumns('*');
        try {
            let res = await this._database.client.query(selectBuilder.buildQuery())
            return res.rows;
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = SQLdao;