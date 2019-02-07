let MongoClient = require('mongodb').MongoClient;
let Database = require('./Database');

class MongoDB extends  Database{
    constructor(dbString, eventSchema){
        super(dbString, eventSchema);
    }
    Connect(){
        MongoClient.connect(this.dbString, function(err, db) {
            console.log("Connected to MongoDB");
            if (err) throw err;
        });
    }

}
module.exports =  MongoDB;