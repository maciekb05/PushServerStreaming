let Database = require('../Database');
let pg = require('pg');



class SQLdb extends Database{

    constructor(dbString, eventSchema){
        super(dbString, eventSchema);
        this.client = new pg.Client(dbString);
        
    }

    Connect() {
        this.client.connect()
            .then(() => {
                console.log("Connected to SQL");
                return null;
            })
            .catch(err => {
                console.error('Database connection error');
            });
        this.RegistrySchema();

    }

    RegistrySchema() {
        this.client.query('CREATE TABLE events (' + this.CreateQueryString() + ');');
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