let Database = require('../Database');
let pg = require('pg');

class SQLdb extends Database {
    constructor(dbString, eventSchema) {
        super(dbString, eventSchema);
        this.client = new pg.Client(dbString);
    }

    async Connect() {
        try {
            await this.client.connect();
            console.log("Connected to SQL");
            await this._RegisterNewSchema();
        } catch (err) {
            console.error(err);
        }
        ;

    }

    async _RegisterNewSchema() {
        await this.client.query('CREATE TABLE IF NOT EXISTS events (' + this.CreateQueryString() + ');');
    }

    CreateQueryString() {
        let result = '';
        for (var key in this.eventSchema) {
            result += key + ' ' + this.eventSchema[key] + ', ';
        }
        return result.substr(0, result.length - 2);
    }
}

module.exports = SQLdb;