let mongoose = require('mongoose');
let Database = require('../Database');

class MongoDB extends  Database{
    constructor(dbString, eventSchema){
        super(dbString, eventSchema);
        this.Connect();
    }

    Connect(){
        mongoose.connect(this.dbString)
            .then(() => {
                console.log("Connected to MongoDB");
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
    RegistrySchema(){
        ValidateSchema(this.eventSchema);

    }

}

module.exports =  MongoDB;