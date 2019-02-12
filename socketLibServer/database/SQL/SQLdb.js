let Database = require('../Database');
let pg = require('pg');



class SQLdb extends Database{

    constructor(dbString, eventSchema){
        super(dbString, eventSchema);
        this.client = new pg.Client(dbString);
        this.Connect();
        this.RegistrySchema();
    }

    Connect() {
        this.client.connect()
            .then(() => {
                console.log("Connected to SQL");
            })
            .catch(err => {
                console.error('Database connection error');
            })
    }

    RegistrySchema() {
        var res = this.client.query('CREATE TABLE events (' + this.CreateQueryString() + ');', (err, res) => {
            console.log(err ? err.stack : res.rows[0].message)});
        

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